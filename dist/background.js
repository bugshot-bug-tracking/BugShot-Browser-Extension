var baseURL = `https://dev.bugshot.de`;
var webURL = `${baseURL}/`;
var apiURL = `${baseURL}/api/v1`;

/** Event listener on page update; injects content.js if there is a project for it */
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	// If tab loading is not complete exit
	if (!(changeInfo.status === "complete")) return;

	// If tab url is not http or https exit
	if (!/^http/.test(tab.url)) return;

	// If not logged in exit
	logged().then((isLogged) => {
		if (!isLogged) return;

		managedProject(tab.url)
			.then((response) => {
				// If no project exit
				if (response === null) return;

				// Inject the scripts in page
				// ! this MAY pose a problem later if there are any confilicts with the original page scripts
				// ? isolate worlds possible solves this ! not tested ¡

				const loadScript = (tabId, scriptPath, name) => {
					// Get origin of the current page
					let origin = new URL(tab.url).origin;

					chrome.scripting
						.executeScript({
							target: { tabId: tabId },
							files: [scriptPath],
						})
						.then(() => {
							console.log(`Injected ${name} in "${origin}".`);
						});
				};

				// For custom elements
				loadScript(
					tabId,
					"libraries/webcomponents-bundle.js",
					"WebComponents"
				);
				loadScript(tabId, "manifest.js", "Manifest"); //
				loadScript(tabId, "vendor.js", "Vendor"); // Node modules in one place not in every page script
				loadScript(tabId, "content/content.js", "Content"); // The Bug-Shot in-page content(the sidebar)
			})
			.catch((err) => {
				let origin = new URL(tab.url).origin;

				console.log({
					origin,
					result: err,
					location: "Page onUpdated Listener",
				});
			});
	});
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	function sendResponseWrapper(fn, args) {
		fn(...args)
			.then((response) => {
				sendResponse({
					message: "ok",
					payload: response,
				});
			})
			.catch((err) => {
				sendResponse({
					message: "error",
					error: err,
				});
				console.error(err);
			});
		return true;
	}

	/*
	|-------------------|>
	| Public API Routes |>
	|-------------------|>
	*/

	switch (request.message) {
		case "login":
			return sendResponseWrapper(logIn, [request.payload]);

		case "logged":
			return sendResponseWrapper(logged, []);
	}

	/*
	|--------------------|>
	| Private API Routes |>
	|--------------------|>
	*/

	// If not logged in exit
	logged().then((isLogged) => {
		if (!isLogged) {
			sendResponse({
				message: "error",
				error: {
					message: "Not logged in!",
					code: 401,
				},
			});
		}

		switch (request.message) {
			case "logout":
				return sendResponseWrapper(logOut, []);

			case "user":
				return sendResponseWrapper(getUserFromStorage, []);

			case "checkProject":
				return sendResponseWrapper(managedProject, [
					request.payload.url,
				]);

			case "getProject":
				return sendResponseWrapper(getProject, [request.payload.url]);

			case "currentProject":
				return sendResponseWrapper(managedProject, [sender.tab.url]);

			case "getStatusesAndBugs":
				managedProject(sender.tab.url).then((project) => {
					sendResponseWrapper(getStatusesAndBugs, [
						project.project.id,
					]);
				});

				return true;

			case "deleteBug":
				return sendResponseWrapper(deleteBug, [request.payload.bug]);

			// ! WIP for when the web dashboard is done
			case "openAdminPannel":
				return true;
				chrome.tabs
					.create({
						url: webURL,
					})
					.then(() => {
						sendResponse({
							message: "ok",
						});
					});

				return true;

			// ! WIP for when the web dashboard is done
			case "openProjectPannel":
				return true;
				getProject(sender.tab.url).then((response) => {
					chrome.tabs
						.create({
							url: `${webURL}/companies/${response.project.attributes.company_id}/projects/${response.project.id}/statuses`,
						})
						.then(() => {
							sendResponse({
								message: "ok",
							});
						});
				});

				return true;

			case "takeScreenshot":
				return sendResponseWrapper(takeScreenshot, [
					sender.tab.windowId,
				]);

			case "getScreenshots":
				return sendResponseWrapper(getScreenshots, [
					request.payload.bug_id,
				]);

			case "sendBug":
				managedProject(sender.tab.url).then((project) => {
					let bug_details = {
						project_id: project.project.id,
						priority_id: request.payload.priority,
						status_id: project.project.attributes.statuses[0].id,
						designation: request.payload.name,
						description: request.payload.description,
						url: sender.tab.url,
						selector: request.payload.selector,
						resolution: request.payload.resolution, // this is an object {width, height}
						screenshot: request.payload.screenshot,
						mark_coords: request.payload.mark_coords, // this is an object {x, y, wx, wy}
					};

					sendBugDetails(bug_details)
						.then((response) => {
							console.log(response);

							let data = {
								screenshot: btoa(bug_details.screenshot),
								mark_coords: bug_details.mark_coords,
							};

							sendBugScreenshot(response.id, data).then(() => {
								sendResponse({
									message: "ok",
									payload: response,
								});
							});
						})
						.catch((err) => {
							sendResponse({
								message: "error",
								error: err,
							});
							console.error(err);
						});
				});

				return true;

			case "saveAttachment":
				return sendResponseWrapper(saveAttachment, [
					request.payload.bug_id,
					request.payload.data,
				]);

			case "getAttachments":
				return sendResponseWrapper(getAttachments, [
					request.payload.bug_id,
				]);

			case "downloadAttachment":
				return sendResponseWrapper(downloadAttachment, [
					request.payload.attachment_id,
					request.payload.bug_id,
				]);

			case "deleteAttachment":
				return sendResponseWrapper(deleteAttachment, [
					request.payload.attachment_id,
				]);

			case "getComments":
				return sendResponseWrapper(getComments, [
					request.payload.bug_id,
				]);

			case "postComment":
				return sendResponseWrapper(postComment, [
					request.payload.bug_id,
					request.payload.content,
				]);

			case "setPrefered":
				return sendResponseWrapper(setPrefered, [
					request.payload.project_id,
					request.payload.url,
				]);

			default:
				sendResponse({
					message: "Message not recognized as a command!",
				});
				break;
		}
	});

	return true;
});

/**
 * Authenticate user and get token for communication
 * @param  {{email, password}} credentials The credentials for authentication
 * @return {Promise} All info regarding the user
 * @throws {Object} A 'message' and the 'response' object from fetch function in case response code !== 2xx
 */
async function logIn(credentials) {
	const url = `${apiURL}/auth/login`;

	let response = await fetch(url, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-type": "application/json",
		},
		body: JSON.stringify({
			email: credentials.email,
			password: credentials.password,
		}),
	});

	if (response.ok) {
		let res = await response.json();
		await chrome.storage.local.set({ auth: res.data });
		return res.data;
	}

	if (!response.ok)
		throw {
			message: "Not a good response from server",
			response: await response.json(),
			code: response.status,
		};
}

async function logOut() {
	const token = await getTokenFromStorage();
	const url = `${apiURL}/auth/logout`;

	// send a token destroy request, response not realy important
	await fetch(url, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
			"Content-type": "application/json",
		},
	});

	// clean the local storage
	await chrome.storage.local.clear();

	// return something
	return true;
}

/**
 * Check the state of authentication inforamtions to determined if a communication can be made
 * @return {Promise<Boolean>} True if everything is ok, false otherwise
 */
async function logged() {
	// get the auth record from storage
	let token = await getTokenFromStorage();
	let user = await getUserFromStorage();

	// if the record was empty
	if (token === null) return false;

	// make a request to see if the token is still valid
	const url = `${apiURL}/auth/user`;
	let response = await fetch(url, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
			"Content-type": "application/json",
		},
	});

	// if token expired
	if (!response.ok) return false;

	// get user from response
	response = (await response.json()).data;

	// check if server data is still up to date with local
	if (
		response.id !== user.id ||
		response.type !== user.type ||
		response.attributes.email !== user.attributes.email ||
		response.attributes.first_name !== user.attributes.first_name ||
		response.attributes.last_name !== user.attributes.last_name
	)
		return false;

	return true;
}

//** --------- GET --------- */

/**
 * Check if the URL belong to a project and return the details
 * @param  {String} projectURL The URL of the project (Ex: https://www.google.com/*)
 * @return {Promise<Array>} All info regarding projects on the URL or 'null' if not found
 * @throws {Object} A 'message' and the 'response' object from fetch function in case response code != 2xx or 404
 */
// TODO update check of project
async function getProject(projectURL) {
	const token = await getTokenFromStorage();
	let origin = new URL(projectURL).origin; // Get url origin from the URL

	let requestURL = `${apiURL}/user/check-project`;

	let response = await fetch(requestURL, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
			"Content-type": "application/json",
			"include-statuses": true,
		},
		body: JSON.stringify({
			url: origin,
		}),
	});

	if (response.ok) {
		let res = await response.json();
		return res.data;
	}

	// Expect 404 to mean no project found
	if (!response.ok && response.status === 404) return null;

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

/**
 * Get the statuse list and bugs associated with a project
 * @param  {String} project_id The id of the project
 * @return {Array} Array with all the bugs associated with a project, null if project not found
 * @throws {Object} A 'message' and the 'response' object from fetch function in case response code != 2xx or 404
 */
async function getStatusesAndBugs(project_id) {
	const token = await getTokenFromStorage();
	const url = `${apiURL}/projects/${project_id}/statuses`;

	let response = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
			"include-bugs": true,
			"include-bug-users": true,
		},
	});

	if (response.ok) {
		let res = await response.json();
		return res.data;
	}

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

async function getScreenshots(bug_id) {
	const token = await getTokenFromStorage();
	const url = `${apiURL}/bugs/${bug_id}/screenshots`;

	let response = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
		},
	});

	if (response.ok) {
		let res = (await response.json()).data;
		return res;
	}

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

async function getAttachments(bug_id) {
	const token = await getTokenFromStorage();
	const url = `${apiURL}/bugs/${bug_id}/attachments`;

	let response = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
		},
	});

	if (response.ok) {
		let res = await response.json();
		return res.data;
	}

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

async function getComments(bug_id) {
	const token = await getTokenFromStorage();
	const url = `${apiURL}/bugs/${bug_id}/comments`;

	let response = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
		},
	});

	if (response.ok) {
		let res = await response.json();
		return res.data;
	}

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

//** --------- POST --------- */
async function sendBugDetails(data) {
	const token = await getTokenFromStorage();
	const url = `${apiURL}/statuses/${data.status_id}/bugs`;

	let osInfo = await getOS();
	let browser = getBrowser();

	let response = await fetch(url, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
			"Content-type": "application/json",
		},
		body: JSON.stringify({
			project_id: data.project_id,
			priority_id: data.priority_id,
			designation: data.designation,
			description: data.description,
			url: data.url,
			operating_system: `${osInfo.os} ${osInfo.arch}`,
			browser: `${browser.name} ${browser.version}`,
			selector: data.selector,
			resolution: `${data.resolution.width}x${data.resolution.height}`,
			// deadline: null,
			order_number: 0,
		}),
	});

	if (response.ok) {
		let res = await response.json();
		return res.data;
	}

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

async function postComment(bug_id, content) {
	const token = await getTokenFromStorage();
	const url = `${apiURL}/comment`;

	let response = await fetch(url, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
			"Content-type": "application/json",
		},
		body: JSON.stringify({
			bug_id: bug_id,
			content: content,
		}),
	});

	if (response.ok) {
		let res = await response.json();
		return res.data;
	}

	// Expect 404 to mean no bug found
	if (!response.ok && response.status === 404) return null;

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

async function sendBugScreenshot(bug_id, data) {
	const token = await getTokenFromStorage();
	const url = `${apiURL}/bugs/${bug_id}/screenshots`;

	let response = await fetch(url, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
			"Content-type": "application/json",
		},
		body: JSON.stringify({
			position_x: data.mark_coords.x,
			position_y: data.mark_coords.y,
			web_position_x: data.mark_coords.wx,
			web_position_y: data.mark_coords.wy,
			base64: data.screenshot,
		}),
	});

	if (response.ok) {
		let res = await response.json();
		return res.data;
	}

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

async function saveAttachment(bug_id, data) {
	const token = await getTokenFromStorage();
	const url = `${apiURL}/bugs/${bug_id}/attachments`;

	// // for base64 to binary array
	// let binary = await (await fetch(data.data)).arrayBuffer();
	// let formData = new FormData();
	// formData.append("bug_id", bug_id);
	// formData.append("file", new File([binary], data.designation));

	let response = await fetch(url, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
			"Content-type": "application/json",
		},
		body: JSON.stringify({
			designation: data.designation,
			base64: btoa(data.base64),
		}),
	});

	if (response.ok) {
		let res = await response.json();
		return res.data;
	}

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

//** --------- PUT --------- */
//** --------- DELETE --------- */

async function deleteBug(bug) {
	const token = await getTokenFromStorage();
	const url = `${apiURL}/statuses/${bug.attributes.status_id}/bugs/${bug.id}`;

	let response = await fetch(url, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
		},
	});

	if (response.ok) return true; // Delete returns 204

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

async function deleteAttachment(attachment_id) {
	const token = await getTokenFromStorage();
	const url = `${apiURL}/attachments/${attachment_id}`;

	let response = await fetch(url, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
		},
	});

	if (response.ok) return true; // Delete returns 204

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

//** --------- Download --------- */

async function downloadAttachment(attachment_id, bug_id) {
	const token = await getTokenFromStorage();
	const url = `${apiURL}/bugs/${bug_id}/attachments/${attachment_id}`;

	let response = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
			"include-attachment-base64": true,
		},
	});

	if (!response.ok)
		throw {
			message: "Not a good response from server",
			response: response,
		};

	let attachment = (await response.json()).data;

	return chrome.downloads.download({
		url: atob(attachment.attributes.base64),
		filename: attachment.attributes.designation,
	});

	// return chrome.downloads.download({
	// 	url: `${apiURL}/bugs/${bug_id}/attachments/${attachment_id}`,
	// 	method: "GET",
	// 	headers: [
	// 		{ name: "Authorization", value: `Bearer ${token}` },
	// 		{ name: "Accept", value: "application/json" },
	// 	],
	// });
}

//** --------- Others --------- */

async function takeScreenshot(windowID) {
	return await chrome.tabs.captureVisibleTab(windowID, {
		format: "jpeg",
		quality: 100,
	});
}

async function getOS() {
	return new Promise((resolve, reject) => {
		chrome.runtime.getPlatformInfo(function (info) {
			resolve({ os: info.os, arch: info.arch });
		});
	});
}

function getBrowser() {
	var ua = navigator.userAgent,
		tem,
		M =
			ua.match(
				/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
			) || [];
	if (/trident/i.test(M[1])) {
		tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
		return { name: "IE", version: tem[1] || "" };
	}
	if (M[1] === "Chrome") {
		tem = ua.match(/\bOPR|Edge\/(\d+)/);
		if (tem != null) {
			return { name: "Opera", version: tem[1] };
		}
	}
	M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
	if ((tem = ua.match(/version\/(\d+)/i)) != null) {
		M.splice(1, 1, tem[1]);
	}
	return {
		name: M[0],
		version: M[1],
	};
}

async function managedProject(url) {
	// get latest data from server
	let projects = await getProject(url);

	// if there is no project on the page return null
	if (projects === null || projects.length === 0) return null;

	// if it is only one project return it
	if (projects.length === 1) return projects[0];

	// if there are more on the page look for a record on localstorage
	let storage = await getLocalProjects(url);

	// if no projects in storage, create a record and return first project
	if (storage === null) {
		await storeProjects(url, projects);
		return projects[0];
	}

	// * if there is a record

	// if the data is the same from server and localstorage return the prefered project
	if (await areProjectsEqual(JSON.stringify(projects), storage.json))
		return projects[storage.option];

	// if data is not the same, first try to find the prefered project in the new data
	let pref = -1;
	for (let index = 0; index < projects.length; index++) {
		const project = projects[index].project;
		if (project.id === storage.projects[storage.option].project.id) {
			pref = index;
			break;
		}
	}

	// if the prefered project was not found update data and set the prefered to first project
	if (pref === -1) {
		await updateProjects(url, projects, 0);
		return projects[0];
	}

	// else update data in storage and set the new prefered to the new index
	await updateProjects(url, projects, pref);
	return projects[pref];
}

async function storeProjects(url, projects) {
	let origin = new URL(url).origin;

	let record = {};
	record[origin] = {
		url: origin,
		option: 0,
		projects: projects,
		json: JSON.stringify(projects),
	};

	return await chrome.storage.local.set(record);
}

async function getLocalProjects(url) {
	let origin = new URL(url).origin;

	// try to get a record from localStorage
	let record = await new Promise((resolve) =>
		chrome.storage.local.get(origin, resolve)
	);

	// if the record was empty
	if (
		record &&
		Object.keys(record).length === 0 &&
		Object.getPrototypeOf(record) === Object.prototype
	)
		return null;

	// else return the record object
	return Object.values(record)[0];
}

async function updateProjects(url, projects, index) {
	let origin = new URL(url).origin;

	let record = {};
	record[origin] = {
		url: origin,
		option: index,
		projects: projects,
		json: JSON.stringify(projects),
	};

	return await chrome.storage.local.set(record);
}

// not the best method but it works for now.
async function areProjectsEqual(json1, json2) {
	if (json1 === json2) return true;

	return false;
}

async function getTokenFromStorage() {
	let record = await new Promise((resolve) =>
		chrome.storage.local.get("auth", resolve)
	);

	// if the record was empty
	if (
		record &&
		Object.keys(record).length === 0 &&
		Object.getPrototypeOf(record) === Object.prototype
	)
		return null;

	return record.auth.token;
}

async function getUserFromStorage() {
	let record = await new Promise((resolve) =>
		chrome.storage.local.get("auth", resolve)
	);

	// if the record was empty
	if (
		record &&
		Object.keys(record).length === 0 &&
		Object.getPrototypeOf(record) === Object.prototype
	)
		return null;

	return record.auth.user;
}

async function setPrefered(option, url) {
	// get current project record from storage
	let record = await getLocalProjects(url);

	// if the record doesn't exist return null
	if (record === null) return null;

	// set new prefered project INDEX
	let newPref = -1;

	// look for the project that has id === "option"
	for (let index = 0; index < record.projects.length; index++) {
		const project = record.projects[index];
		if (project.project.id === option) {
			newPref = index;
			break;
		}
	}

	// if no project with the id found return null and exit
	if (newPref === -1) return null;

	// update storage record with the new prefered option
	record.option = newPref;
	let newRec = {};
	newRec[new URL(url).origin] = record;

	return await chrome.storage.local.set(newRec);
}
