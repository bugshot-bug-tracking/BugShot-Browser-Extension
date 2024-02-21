import * as storage from "~/logic/backgroundStorage";
import { onMessage, sendMessage } from "webext-bridge";
import * as browser from "webextension-polyfill";

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

	// If not logged in exit
	let token = storage.token.value;
	let guestToken = storage.guestToken.value;

	if ((!token || token === "") && (!guestToken || guestToken === "")) return;

	// check if content script is already inserted
	let timer = undefined;
	let res = await Promise.race([
		browser.tabs
			.sendMessage(tabId, "content-status")
			.then((r) => r)
			.catch((e) => {
				console.log(e);
				return false;
			}),
		new Promise((resolve) => {
			timer = setTimeout(resolve, 2000);
		}).then(() => false),
	]);

	if (timer !== undefined) clearTimeout(timer);
	if (res === "ok") return;

	let normalCheck = await userHasProjectOnPage(tab.url);

	if (!normalCheck) {
		if (guestToken && guestToken !== "") {
			let response = await fetch(
				import.meta.env.VITE_API_ENDPOINT + "/access-tokens/check-url",
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-type": "application/json",
						clientId: import.meta.env.VITE_CLIENT_ID,
						version: import.meta.env.VITE_VERSION,
						"access-token": guestToken,
					},
					body: JSON.stringify({
						url: tab.url,
					}),
				}
			);

			// if the response was successful but there is no project on this url associated to the token exit
			if (!response.ok || response.status === 204) return;
		}
	}
	// Inject the scripts in page
	let injectResult = await browser.scripting.executeScript({
		target: { tabId: tabId },
		files: ["content/index.js"],
	});

	console.log(`Injected content-script in "${tabId}".\n`, injectResult);
});

async function userHasProjectOnPage(url: string): Promise<boolean> {
	let user = storage.user.value;

	if (!user || user === "") {
		let response = await fetch(
			import.meta.env.VITE_API_ENDPOINT + "/auth/user",
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${storage.token.value}`,
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
			}

			return false;
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
				Authorization: `Bearer ${storage.token.value}`,
				Accept: "application/json",
				"Content-type": "application/json",
				clientId: import.meta.env.VITE_CLIENT_ID,
				version: import.meta.env.VITE_VERSION,
				"include-organization-id": "true",
			},
			body: JSON.stringify({ url }),
		}
	);

	if (!response.ok) return false;

	let data = (await response.json()).data;

	// If no project exit
	if (data.length < 1) return false;

	return true;
}

/**
 * Used for checking if the extension context is still valid from the content-script
 */
onMessage("checkStatus", () => {
	return "ok";
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

onMessage("getGuestToken", () => {
	try {
		return storage.guestToken.value;
	} catch (error) {
		console.log(error);
		return "";
	}
});

onMessage("setGuestToken", ({ data }) => {
	try {
		storage.guestToken.value = data.token;
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

onMessage("getGuestUser", () => {
	try {
		return {
			name: storage.guestName.value,
			email: storage.guestEmail.value,
		};
	} catch (error) {
		console.log(error);
		return undefined;
	}
});

onMessage("setGuestUser", ({ data }) => {
	try {
		storage.guestName.value = data.name ?? "";
		storage.guestEmail.value = data.email ?? "";

		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
});

onMessage("invalidate", () => {
	try {
		storage.token.value = "";

		storage.guestToken.value = "";
		storage.guestName.value = "";
		storage.guestEmail.value = "";
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
