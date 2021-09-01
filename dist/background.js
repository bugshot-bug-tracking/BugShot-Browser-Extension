var baseURL = `https://bugshot.view4all.de`;
var enableCache = false;

/** Event listener on page update; injects content.js if there is a project for it */
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	const loadScript = (tabId, scriptPath, name, domain) => {
		chrome.scripting
			.executeScript({
				target: { tabId: tabId },
				files: [scriptPath],
			})
			.then(() => {
				console.log(`Injected ${name} in "${domain}".`);
			});
	};

	logged().then((response) => {
		// If not logged in exit
		if (!response) return;

		// If tab hasn't finished loading or it's not a legit one (http/https)
		if (!(changeInfo.status === "complete" && /^http/.test(tab.url))) return;

		// Get domain of the current page
		let domain = new URL(tab.url).hostname;

		// Get the project info from storage or remote (with cacheing if from remote)
		getProject(tab.url)
			.then((response) => {

				console.log({ domain, response });

				if (!response.id) return; // If no project exit

				// Inject the scripts in page
				// ! this may pose a problem later if there are any confilicts with the original page scripts
				// ? isolate worlds possible solves this ! not tested ¡

				loadScript(
					tabId,
					"libraries/webcomponents-bundle.js",
					"WebComponents",
					domain
				); // For custom elements
				loadScript(tabId, "manifest.js", "Manifest", domain); //
				loadScript(tabId, "vendor.js", "Vendor", domain); // Node modules in one place not in every page script
				loadScript(tabId, "content/content.js", "Content", domain); // The Bug-Shot in-page content(the sidebar)
			})
			.catch((err) => {
				console.log({
					domain,
					result: err,
					location: "Page Updated Listener",
				});
			});
	});
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	switch (request.message) {
		case "login": //TODO validate inputs
			logIn(request.payload)
				.then((response) => {
					/*
						response data structure
				
				
						response.data {
							token: string,
							user_id: int
						}
						response.message: string
						response.success: boolean
						*/

					//TODO save the relevant info for other API calls

					chrome.storage.local.set({ user_id: response.data.user_id });

					sendResponse({
						message: "login",
					});
				})
				.catch((err) => {
					console.log(err);

					sendResponse({
						message: "error",
						error: err,
					});
				});

			return true; // needed to keep the conection alive while the function runs asyncronus
			break;

		case "logout":
			logOut()
				.then(() => {
					sendResponse({
						message: "logout",
					});
				})
				.catch((err) => {
					console.log(err);
					sendResponse({
						message: "error",
						error: err,
					});
				});

			return true; // needed to keep the conection alive while the function runs asyncronus

			break;

		case "logged":
			//TODO somehow extract method from this
			chrome.storage.local.get("user_id", (data) => {
				if (chrome.runtime.lastError) {
					sendResponse({
						message: "error",
						error: chrome.runtime.lastError,
					});
					return;
				}

				if (data.user_id > 0)
					sendResponse({
						message: "logged",
					});
				sendResponse({});
			});

			return true;
			break;

		case "checkProject":
			getProject(sender.tab.url)
				.then((response) => {
					sendResponse({
						message: "ok",
						project: response,
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

		case "getBugs":
			getBugs(sender.tab.url)
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

		case "deleteBug":
			deleteBug(sender.tab.url, request.payload.bug_id)
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

		case "openAdminPannel":
			chrome.tabs
				.create({
					url: baseURL,
				})
				.then(() => {
					sendResponse({
						message: "ok",
					});
				});

			return true;

		case "openProjectPannel":
			let domain = new URL(sender.tab.url).hostname; // Get domain from the sender URL

			chrome.storage.local.get(domain, (data) => {
				let project = Object.values(data)[0];

				chrome.tabs
					.create({
						url: `${baseURL}/companies/${project.company_id}/projects/${project.id}/statuses`,
					})
					.then(() => {
						sendResponse({
							message: "ok",
						});
					});
			});

			return true;

		case "takeScreenshot":
			takeScreenshot(sender.tab.windowId)
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

		case "getScreenshots":
			getScreenshots(sender.tab.url, request.payload.bug_id)
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

		case "sendBug":
			let bug_details = {
				screenshot: request.payload.screenshot,
				designation: request.payload.name,
				description: request.payload.description,
				url: sender.tab.url,
				priority_id: request.payload.priority,
				selector: request.payload.selector,
				resolution: request.payload.resolution, // this is an object {width, height}
				mark_coords: request.payload.mark_coords, // this is an object {x, y}
			};

			sendBugDetails(bug_details)
				.then((response) => {
					sendBugScreenshot(bug_details, response.id).then(() => {
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

			return true;

		case "saveAttachment":
			saveAttachment(
				request.payload.data,
				sender.tab.url,
				request.payload.bug_id
			)
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

		case "getAttachment":
			getAttachment(sender.tab.url, request.payload.bug_id)
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

		case "downloadAttachment":
			downloadAttachment(
				sender.tab.url,
				request.payload.bug_id,
				request.payload.data
			)
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

		case "deleteAttachment":
			deleteAttachment(
				sender.tab.url,
				request.payload.bug_id,
				request.payload.data
			)
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

		case "getComments":
			getComments(sender.tab.url, request.payload.bug_id)
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

		case "postComment":
			postComment(sender.tab.url, request.payload.bug_id, request.payload.data)
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


		default:
			sendResponse({
				message: "Message not recognized as a command!",
			});
			break;
	}
});

/**
 * Authenticate user and get coocies for communication
 * @param  {{username, password}} credentials The credentials for authentication
 * @return {Promise} All info regarding the user or '{}' if not found
 * @throws Will throw an error messaje in case of non-existance (codes >=500)
 */
async function logIn(credentials) {
	let url = "https://bugshot.view4all.de/api/user/login";

	let response = await fetch(url, {
		method: "POST",
		redirect: "follow",
		headers: {
			"Content-type": "application/json",
			clientId: "5",
			version: "1.0.0",
		},
		body: JSON.stringify({
			email: credentials.username,
			password: credentials.password,
		}),
	});

	if (response.status >= 200 && response.status < 300)
		return await response.json();

	if (response.status >= 500) throw `Server error code: ${response.status}!`;

	throw "Not a good response from server";
}

/**
 * Reset the environment to default
 */
async function logOut() {
	//TODO Implement the cleanup of localStorage after saving something in it
	chrome.storage.local.clear();
}

/**
 * Check to see if the apropriate informations are available for comunication to consider the state as logged in
 * @return {Boolean} True if everything is ok, false otherwise
 */
async function logged() {
	// return new Promise((resolve, reject) => {
	//     chrome.storage.local.get("user_id", item => {
	//         if (chrome.runtime.lastError)
	//             console.log('Error getting');

	//         if (Object.values(item) != undefined) {
	//             resolve(Object.values(item).val);
	//         } else {
	//             reject();
	//         }

	//         console.log(item);
	//     })
	// })
	return true;
}

/**
 * Check if the URL belong to a project and return the details
 * @param  {String} projectURL The URL of the project (Ex: https://www.google.com/*)
 * @return {Promise} All info regarding current project or 'null' if not found
 * @throws {Object} A 'message' and the 'response' object from fetch function
 */
async function getProject(projectURL) {
	if (enableCache === false) return getProjectRemote(projectURL);

	let domain = new URL(projectURL).hostname; // Get domain from the URL

	// Check to see if it is already in local storage
	let cacheProject = await getProjectFromCache(projectURL);

	// If the domain is in cache but there is no porject asociated
	if (cacheProject[domain] === null) return null;

	// If the domain is in cache with a project
	if (!!cacheProject[domain]) return cacheProject[domain];

	// If not get from remote
	let remoteProject = getProjectRemote(projectURL);

	// Save in local storage {"the domain": {project info}}
	// If no data from remote save null
	let obj = {};
	obj[domain] = remoteProject == null ? null : remoteProject;

	chrome.storage.local.set(obj);

	if (remoteProject == null) return null;

	return remoteProject;
}

/**
 * Check if the URL belong to a project and return the details from server
 * @param  {String} projectURL The URL of the project (Ex: https://www.google.com/*)
 * @return {Promise} All info regarding current project or 'null' if not found
 * @throws {Object} A 'message' and the 'response' object from fetch function
 */
async function getProjectRemote(projectURL) {
	let domain = new URL(projectURL).hostname; // Get domain from the URL

	let requestURL = `${baseURL}/api/check-project`;

	let response = await fetch(requestURL, {
		method: "GET",
		headers: {
			"Content-type": "application/json",
			clientId: 5,
			version: "1.0.0",
			projectUrl: domain,
			"Access-Control-Allow-Headers": "*",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "*",
		},
	});

	if (response.ok) {
		let json = await response.json();

		if (json.success === false) return null;
		else return json.data;
	}

	throw {
		message: "Not a good response from server",
		response: response,
	};
}
/**
 * Check if the project is in local storage
 * @param  {String} projectURL The URL of the project (Ex: https://www.google.com/*)
 * @return {Promise} All info regarding current project from storage or '{}' if not found
 */
async function getProjectFromCache(projectURL) {
	let domain = new URL(projectURL).hostname; // Get domain from the URL

	return new Promise(function (resolve) {
		chrome.storage.local.get(domain, (data) => {
			resolve(data);
		});
	});
}

/**
 * Get the stage list and their bug list associated with a project
 * @param  {String} projectURL The URL of the project (Ex: https://www.google.com/)
 * @return {Promise} Array with all the curent stages (columns) and their respective list of bugs, null otherwise
 * @throws Will throw an error messaje in case of server problems (codes >= 500) from remote
 */
async function getBugs(projectURL) {
	project = await getProject(projectURL); // Will throw error if project not in remote

	if (project === null) return null; // In case the project was taken from storage and no info is given

	var url = `${baseURL}/api/companies/${project.company_id}/projects/${project.id}/bugs`;

	let response = await fetch(url, {
		method: "GET",
		withCredentials: true,
		credentials: "include",
		headers: {
			clientId: "5",
			version: "1.0.0",
		},
	});

	if (!response.ok) return null;

	response = await response.json();
	return response.data;
}

async function deleteBug(projectURL, bug_id) {
	let project = await getProject(projectURL);

	if (project === null) return null;

	let url = `${baseURL}/api/companies/${project.company_id}/projects/${project.id}/bugs/${bug_id}`;

	let response = await fetch(url, {
		method: "DELETE",
		headers: {
			clientId: "5",
			version: "1.0.0",
		},
	});

	if (!response.ok) return null;

	response = await response.json();
	return response.data;
}

async function takeScreenshot(windowID) {
	return await chrome.tabs.captureVisibleTab(windowID, {
		format: "jpeg",
		quality: 100,
	});
}

async function getScreenshots(projectURL, bug_id) {
	let screenArray = [];

	let infos = await getScreenshotsInfo(projectURL, bug_id);

	if (infos === null) return null;

	for (let index = 0; index < infos.length; index++) {
		const info = infos[index];

		let data = await getScreenshotsData(projectURL, bug_id, info.id);

		if (data === null) continue;

		let screenshot = {
			id: info.id,
			designation: info.designation,
			data: `data:image/jpeg;base64,${data.base64}`,
			position: {
				x: data.position_x,
				y: data.position_y,
			},
		};

		screenArray.push(screenshot);
	}

	return screenArray;
}

async function getScreenshotsInfo(projectURL, bug_id) {
	let project = await getProject(projectURL);

	if (project === null) return null;

	let url = `${baseURL}/api/companies/${project.company_id}/projects/${project.id}/bugs/${bug_id}/screenshots`;

	let response = await fetch(url, {
		method: "GET",
		headers: {
			clientId: "5",
			version: "1.0.0",
		},
	});

	if (!response.ok) return null;

	response = await response.json();
	return response.data;
}

async function getScreenshotsData(projectURL, bug_id, screenshot_id) {
	let project = await getProject(projectURL);

	if (project === null) return null;

	let url = `${baseURL}/api/companies/${project.company_id}/projects/${project.id}/bugs/${bug_id}/screenshots/${screenshot_id}`;

	let response = await fetch(url, {
		method: "GET",
		headers: {
			clientId: "5",
			version: "1.0.0",
		},
	});

	if (!response.ok) return null;

	response = await response.json();
	return response.data;
}

async function sendBugDetails(bug_details) {
	let project = await getProject(bug_details.url);

	let url = `${baseURL}/api/companies/${project.company_id}/projects/${project.id}/bugs`;

	let osInfo = await getOS();
	let browser = getBrowser();

	let response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
			clientId: "5",
			version: "1.0.0",
		},
		body: JSON.stringify({
			designation: bug_details.designation,
			description: bug_details.description,
			url: bug_details.url,
			priority_id: bug_details.priority_id,
			operating_system: `${osInfo.os} ${osInfo.arch}`,
			browser: `${browser.name} ${browser.version}`,
			selector: bug_details.selector,
			resolution: `${bug_details.resolution.width}x${bug_details.resolution.height}`,
		}),
	});

	if (!response.ok) return null;

	response = await response.json();
	return response.data;
}

async function saveAttachment(data, projectURL, bug_id) {
	let project = await getProject(projectURL);

	if (project === null) return null;

	let url = `${baseURL}/api/companies/${project.company_id}/projects/${project.id}/bugs/${bug_id}/attachments`;

	let response = await fetch(url, {
		method: "POST",
		headers: {
			clientId: "5",
			version: "1.0.0",
			"Content-type": "application/json",
		},
		body: JSON.stringify({
			designation: data.name,
			base64: data.data,
		}),
	});

	if (!response.ok) return null;

	response = await response.json();
	return response.data;
}

async function getAttachment(projectURL, bug_id) {
	let project = await getProject(projectURL);

	if (project === null) return null;

	let url = `${baseURL}/api/companies/${project.company_id}/projects/${project.id}/bugs/${bug_id}/attachments`;

	let response = await fetch(url, {
		method: "GET",
		headers: {
			clientId: "5",
			version: "1.0.0",
		},
	});

	if (!response.ok) return null;

	response = await response.json();
	return response.data;
}

async function downloadAttachment(projectURL, bug_id, data) {
	let project = await getProjectWithCache(projectURL);

	if (project === null) return null; // In case the project was taken from storage and no info is given

	let url = `${baseURL}/companies/${project.company_id}/projects/${project.id}/bugs/${bug_id}/attachments/${data.id}/download`;

	return await chrome.tabs.create({
		url: url,
	});
}

async function deleteAttachment(projectURL, bug_id, data) {
	let project = await getProject(projectURL);

	if (project === null) return null;

	let url = `${baseURL}/api/companies/${project.company_id}/projects/${project.id}/bugs/${bug_id}/attachments/${data.id}`;

	let response = await fetch(url, {
		method: "DELETE",
		headers: {
			clientId: "5",
			version: "1.0.0",
		},
	});

	if (!response.ok) return null;

	response = await response.json();
	return response.data;
}

async function getComments(projectURL, bug_id) {
	let project = await getProject(projectURL);

	if (project === null) return null;

	let url = `${baseURL}/api/companies/${project.company_id}/projects/${project.id}/bugs/${bug_id}/comments`;

	let response = await fetch(url, {
		method: "GET",
		headers: {
			clientId: "5",
			version: "1.0.0",
		},
	});

	if (!response.ok) return null;

	response = await response.json();
	return response.data;
}

async function postComment(projectURL, bug_id, data) {
	let project = await getProject(projectURL);

	if (project === null) return null;

	let url = `${baseURL}/api/companies/${project.company_id}/projects/${project.id}/bugs/${bug_id}/comments`;

	let response = await fetch(url, {
		method: "POST",
		headers: {
			clientId: "5",
			version: "1.0.0",
			"Content-type": "application/json",
		},
		body: JSON.stringify({
			content: data.content,
		}),
	});

	if (!response.ok) return null;

	response = await response.json();
	return response.data;
}

async function sendBugScreenshot(bug_details, bugID) {
	let project = await getProject(bug_details.url);

	if (project === null) return null;

	let url = `${baseURL}/api/companies/${project.company_id}/projects/${project.id}/bugs/${bugID}/screenshots`;

	let today = new Date();
	let timestamp = today.toISOString();
	timestamp += ".jpg";

	let response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
			clientId: "5",
			version: "1.0.0",
		},
		body: JSON.stringify({
			base64: bug_details.screenshot.replace(/^data:image\/[a-z]+;base64,/, ""), // Because ':' and ';' get lost in transit
			designation: timestamp,
			position_x: bug_details.mark_coords.x,
			position_y: bug_details.mark_coords.y,
			// TODO moidify the API endpoint and request to set the page_XY coords
		}),
	});

	if (!response.ok) return null;

	response = await response.json();
	return response.data;
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