import * as storage from "~/logic/backgroundStorage";
import { onMessage, sendMessage } from "webext-bridge";

/*

	Background script goals:
	- store auth info
	- store settings data
	- load sidebar(content.js) in page

*/

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

	return {
		message: "ok",
		payload: await browser.tabs.captureVisibleTab(tab.windowId, {
			format: "jpeg",
			quality: 100,
		}),
	};
});
