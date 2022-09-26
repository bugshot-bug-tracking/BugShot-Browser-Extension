import * as storage from "~/logic/backgroundStorage";
import * as webex from "webext-bridge";

console.log("background!");

/*

	Background script goals:
	- store auth info
	- store settings data
	- load sidebar(content.js) in page

*/

//** --------- STORAGE --------- */

webex.onMessage("getToken", () => {
	try {
		return storage.token.value;
	} catch (error) {
		console.log(error);
		return "";
	}
});

webex.onMessage("setToken", ({ data }) => {
	try {
		storage.token.value = data.token;
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
});

webex.onMessage("invalidate", () => {
	try {
		storage.token.value = "";
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
});
