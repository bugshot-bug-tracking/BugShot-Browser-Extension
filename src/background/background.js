var baseURL = `http://localhost:8000`;
var webURL = `${baseURL}/`;
var apiURL = `${baseURL}/api/v1`;
var enableCache = false;
var token = `1|q3mY7GOjvHheVtJ2TkNChXCd31Xa4NJUWUO4MaYe`;
var defaultHeaders = {
	"Authorization": `Bearer ${token}`,
	"Accept": "application/json",
}


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

				if (response === null) return; // If no project exit

				// Inject the scripts in page
				// ! this MAY pose a problem later if there are any confilicts with the original page scripts
				// ? isolate worlds possible solves this ! not tested ¡

				loadScript(tabId, "libraries/webcomponents-bundle.js", "WebComponents", domain); // For custom elements
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
			getBugs(request.payload.project_id)
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

		case "getStatusesAndBugs":
			getStatusesAndBugs(request.payload.project_id)
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
			deleteBug(request.payload.bug_id)
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
					url: webURL,
				})
				.then(() => {
					sendResponse({
						message: "ok",
					});
				});

			return true;

		case "openProjectPannel":
			getProject(sender.tab.url).then(
				(response) => {
					chrome.tabs
						.create({
							url: `${webURL}/companies/${response.project.attributes.company_id}/projects/${response.project.id}/statuses`,
						})
						.then(() => {
							sendResponse({
								message: "ok",
							});
						});
				}
			);

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
			getScreenshots(request.payload.bug_id)
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
				project_id: request.payload.project_id,
				priority_id: request.payload.priority,
				designation: request.payload.name,
				description: request.payload.description,
				url: sender.tab.url,
				selector: request.payload.selector,
				resolution: request.payload.resolution, // this is an object {width, height}
				screenshot: request.payload.screenshot,
				mark_coords: request.payload.mark_coords, // this is an object {x, y}
			};

			sendBugDetails(bug_details)
				.then((response) => {
					console.log(response);

					let data = {
						screenshot: bug_details.screenshot,
						mark_coords: bug_details.mark_coords
					}

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

			return true;

		case "saveAttachment":
			saveAttachment(request.payload.bug_id, request.payload.data,)
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

		case "getAttachments":
			getAttachments(request.payload.bug_id)
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
			downloadAttachment(request.payload.attachment_id)
				.then(() => {
					sendResponse({
						message: "ok",
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
			deleteAttachment(request.payload.attachment_id)
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
			getComments(request.payload.bug_id)
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
			postComment(request.payload.bug_id, request.payload.content)
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






//** --------- GET --------- */

/**
 * Check if the URL belong to a project and return the details
 * @param  {String} projectURL The URL of the project (Ex: https://www.google.com/*)
 * @return {Array} All info regarding projects on the URL or 'null' if not found
 * @throws {Object} A 'message' and the 'response' object from fetch function in case response code != 2xx or 404
 */
async function getProject(projectURL) {
	let origin = new URL(projectURL).origin; // Get url origin from the URL

	let requestURL = `${apiURL}/check-project`;

	let response = await fetch(requestURL, {
		method: "POST",
		headers: {
			"Authorization": `Bearer ${token}`,
			"Accept": "application/json",
			"Content-type": "application/json"
		},
		body: JSON.stringify({
			url: origin
		}),
	});

	if (response.ok) {
		let res = await response.json();

		if (res.data.length === 1)
			return res.data[0];

		return res.data;
	}

	if (!response.ok && response.status === 404) // Expect 404 to mean no project found
		return null;

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

/**
 * Get the bug list associated with a project
 * @param  {String} project_id The id of the project
 * @return {Array} Array with all the bugs associated with a project, null if project not found
 * @throws {Object} A 'message' and the 'response' object from fetch function in case response code != 2xx or 404
 */
async function getBugs(project_id) {

	let url = `${apiURL}/project/${project_id}/bugs`;

	let response = await fetch(url, {
		method: "GET",
		headers: defaultHeaders,
	});

	if (response.ok) {
		let res = await response.json();
		return res;
	}

	if (!response.ok && response.status === 404) // Expect 404 to mean no project found
		return null;

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

async function getStatusesAndBugs(project_id) {
	let statuses = await getStatuses(project_id);

	if (statuses === null) return null;

	for (let index = 0; index < statuses.length; index++) {
		const status = statuses[index];
		status["bugs"] = await getBugsByStatus(status.id);
	}

	return statuses;
}

async function getStatuses(project_id) {
	let url = `${apiURL}/project/${project_id}/statuses`;

	let response = await fetch(url, {
		method: "GET",
		headers: defaultHeaders,
	});

	if (response.ok) {
		let res = await response.json();
		return res;
	}

	if (!response.ok && response.status === 404) // Expect 404 to mean no project found
		return null;

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

async function getBugsByStatus(status_id) {

	let url = `${apiURL}/status/${status_id}/bugs`;

	let response = await fetch(url, {
		method: "GET",
		headers: defaultHeaders,
	});

	if (response.ok) {
		let res = await response.json();
		return res;
	}

	if (!response.ok && response.status === 404) // Expect 404 to mean no project found
		return null;

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

async function getScreenshots(bug_id) {
	let screenArray = [];

	let infos = await getScreenshotsInfo(bug_id);

	if (infos === null) return null;

	for (let index = 0; index < infos.length; index++) {
		const info = infos[index];

		let data = await getScreenshotsData(info.id);

		if (data === null) continue;

		info["attributes"]["data"] = data
		let screenshot = info;

		screenArray.push(screenshot);
	}

	console.log(screenArray);
	return screenArray;
}

async function getScreenshotsData(screenshot_id) {
	let url = `${apiURL}/screenshot/${screenshot_id}/download`;

	let response = await fetch(url, {
		method: "GET",
		headers: defaultHeaders,
	});

	if (response.ok) {
		let res = await (await response.blob()).text();
		return res;
	}

	if (!response.ok && response.status === 404) // Expect 404 to mean no screenshot found
		return null;

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

async function getScreenshotsInfo(bug_id) {
	let url = `${apiURL}/bug/${bug_id}/screenshots`;

	let response = await fetch(url, {
		method: "GET",
		headers: defaultHeaders,
	});

	if (response.ok) {
		let res = await response.json();
		return res;
	}

	if (!response.ok && response.status === 404) // Expect 404 to mean no project found
		return null;

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

async function getAttachments(bug_id) {
	let url = `${apiURL}/bug/${bug_id}/attachments`;

	let response = await fetch(url, {
		method: "GET",
		headers: defaultHeaders,
	});

	if (response.ok) {
		let res = await response.json();
		return res;
	}

	if (!response.ok && response.status === 404) // Expect 404 to mean no bug found
		return null;

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

async function getComments(bug_id) {
	let url = `${apiURL}/bug/${bug_id}/comments`;

	let response = await fetch(url, {
		method: "GET",
		headers: defaultHeaders,
	});

	if (response.ok) {
		let res = await response.json();
		return res;
	}

	if (!response.ok && response.status === 404) // Expect 404 to mean no bug found
		return null;

	throw {
		message: "Not a good response from server",
		response: response,
	};
}


//** --------- POST --------- */
async function sendBugDetails(data) {
	let url = `${apiURL}/bug`;

	let osInfo = await getOS();
	let browser = getBrowser();

	let response = await fetch(url, {
		method: "POST",
		headers: {
			"Authorization": `Bearer ${token}`,
			"Accept": "application/json",
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
		}),
	});

	if (response.ok) {
		let res = await response.json();
		return res.data;
	}

	if (!response.ok && response.status === 404) // Expect 404 to mean no project found
		return null;

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

async function postComment(bug_id, content) {
	let url = `${apiURL}/comment`;

	let response = await fetch(url, {
		method: "POST",
		headers: {
			"Authorization": `Bearer ${token}`,
			"Accept": "application/json",
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

	if (!response.ok && response.status === 404) // Expect 404 to mean no bug found
		return null;

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

async function sendBugScreenshot(bug_id, data) {

	let url = `${apiURL}/screenshot`;

	let today = new Date();
	let timestamp = today.toISOString();
	timestamp += ".jpg";

	let formData = new FormData();
	formData.append("bug_id", bug_id);
	formData.append("position_x", data.mark_coords.x);
	formData.append("position_y", data.mark_coords.y);
	formData.append("file", new Blob([data.screenshot], { type: 'image/jpeg' }), timestamp);

	let response = await fetch(url, {
		method: "POST",
		headers: defaultHeaders,
		body: formData
	});

	if (response.ok) {
		let res = await response.json();
		return res;
	}

	if (!response.ok && response.status === 404) // Expect 404 to mean no bug found
		return null;

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

async function saveAttachment(bug_id, data) {
	let url = `${apiURL}/attachment`;

	// for base64 to binary array
	let binary = await (await fetch(data.data)).arrayBuffer();
	let formData = new FormData();
	formData.append("bug_id", bug_id);
	formData.append("file", new File([binary], data.designation));

	let response = await fetch(url, {
		method: "POST",
		headers: defaultHeaders,
		body: formData
	});

	if (response.ok) {
		let res = await response.json();
		return res;
	}

	if (!response.ok && response.status === 404) // Expect 404 to mean no bug found
		return null;

	throw {
		message: "Not a good response from server",
		response: response,
	};
}


//** --------- PUT --------- */
//** --------- DELETE --------- */

async function deleteBug(bug_id) {
	let url = `${apiURL}/bug/${bug_id}`;

	let response = await fetch(url, {
		method: "DELETE",
		headers: defaultHeaders,
	});

	if (response.ok)
		return true; // Delete returns 204

	if (!response.ok && response.status === 404) // Expect 404 to mean no bug found
		return null;

	throw {
		message: "Not a good response from server",
		response: response,
	};
}

async function deleteAttachment(attachment_id) {
	let url = `${apiURL}/attachment/${attachment_id}`;

	let response = await fetch(url, {
		method: "DELETE",
		headers: defaultHeaders,
	});

	if (response.ok)
		return true; // Delete returns 204

	if (!response.ok && response.status === 404) // Expect 404 to mean no bug found
		return null;

	throw {
		message: "Not a good response from server",
		response: response,
	};
}


//** --------- Download --------- */

async function downloadAttachment(attachment_id) {
	return chrome.downloads.download({
		url: `${apiURL}/attachment/${attachment_id}/download`,
		method: "GET",
		headers: [
			{ name: "Authorization", value: `Bearer ${token}` },
			{ name: "Accept", value: "application/json" },
		],
	});
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
