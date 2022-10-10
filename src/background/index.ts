import * as storage from "~/logic/backgroundStorage";
import { onMessage, sendMessage } from "webext-bridge";

/*

	Background script goals:
	- store auth info
	- store settings data
	- load sidebar(content.js) in page

*/

/** Event listener on page update; injects content.js if there is a project for it */
browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
	// If tab loading is not complete exit
	if (!(changeInfo.status === "complete")) return;

	// If tab url is not http or https exit
	if (!tab.url || !/^http/.test(tab.url)) return;

	// check if content script is already inserted
	let res = await browser.tabs
		.sendMessage(tabId, "content-status")
		.catch((e) => {});
	if (res === "ok") return;

	// If not logged in exit
	let token = storage.token.value;

	if (!token || token === "") return;

	let user = storage.user.value;
	if (!user || user === "") {
		let response = await fetch(
			import.meta.env.VITE_API_ENDPOINT + "/auth/user",
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
					Accept: "application/json",
					"Content-type": "application/json",
					clientId: import.meta.env.VITE_CLIENT_ID,
					version: import.meta.env.VITE_VERSION,
				},
			}
		);

		if (!response.ok) {
			if (response.status === 401) {
				storage.token.value = "";
				storage.user.value = "";
				return;
			}

			return;
		}

		let userData = undefined;
		userData = (await response.json()).data;
		storage.user.value = userData.id;
		user = userData.id;
	}

	let response = await fetch(
		import.meta.env.VITE_API_ENDPOINT + `/users/${user}/check-project`,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
				"Content-type": "application/json",
				clientId: import.meta.env.VITE_CLIENT_ID,
				version: import.meta.env.VITE_VERSION,
			},
			body: JSON.stringify({
				url: new URL(tab.url).origin,
			}),
		}
	);

	if (!response.ok) return;

	let data = (await response.json()).data;

	// If no project exit
	if (data.length < 1) return;

	// Inject the scripts in page

	// let injectResult =
	await browser.scripting.executeScript({
		target: { tabId: tabId },
		files: ["content/index.js"],
	});

	// console.log(`Injected content-script in "${tabId}".\n`, injectResult);
});

//** --------- STORAGE --------- */

onMessage("getToken", () => {
	try {
		return storage.token.value;
	} catch (error) {
		console.log(error);
		return "";
	}
});

onMessage("setToken", ({ data }) => {
	try {
		storage.token.value = data.token;
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
});

onMessage("getUser", () => {
	try {
		return storage.user.value;
	} catch (error) {
		console.log(error);
		return "";
	}
});

onMessage("setUser", ({ data }) => {
	try {
		storage.user.value = data.user;
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
});

onMessage("invalidate", () => {
	try {
		storage.token.value = "";
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
});

onMessage("background-set-locale", async ({ data }) => {
	storage.locale.value = data.locale;

	return await sendMessage(
		"set-locale",
		{ locale: data.locale },
		"content-script@" + data.tab_id
	);
});

onMessage("background-get-locale", async () => {
	return storage.locale.value;
});

onMessage("background-set-theme", async ({ data }) => {
	storage.theme.value = data.theme;

	return await sendMessage(
		"set-theme",
		{ theme: data.theme },
		"content-script@" + data.tab_id
	);
});

onMessage("background-get-theme", async () => {
	return storage.theme.value;
});

//** --------- FUNCTIONS --------- */

onMessage("takeScreenshot", async () => {
	let tab = (
		await browser.tabs.query({ active: true, currentWindow: true })
	)[0];

	if (!tab.windowId) throw "Could not find active tab!";
	let screenshot = await browser.tabs.captureVisibleTab(undefined, {
		format: "jpeg",
		quality: 100,
	});

	return {
		message: "ok",
		payload: screenshot,
	};
});
