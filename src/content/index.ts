import "@webcomponents/webcomponentsjs/bundles/webcomponents-ce.js";
import "uno.css";
import { createApp, App as Application } from "vue";

import axi from "~/modules/axios";
import pinia from "~/modules/pinia";
import i18n from "~/modules/i18n";
import VueUniversalModal from "vue-universal-modal";
import "vue-universal-modal/dist/index.css";

import gComponents from "~/modules/globalComponents";

import App from "./App.vue";
import { sendMessage } from "webext-bridge";
import { useSettingsStore } from "~/stores/settings";

var BugShotApp = undefined as undefined | Application;
var CheckInterval = undefined as undefined | NodeJS.Timer;

class BugShot extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });

		BugShotApp = createApp(App);

		pinia.install({ app: BugShotApp });
		axi.install({ app: BugShotApp });
		i18n.install({ app: BugShotApp });

		gComponents.install({ app: BugShotApp });

		BugShotApp.mount(this.shadowRoot);

		let modalsNode = document.createElement("div");
		modalsNode.setAttribute("id", "modals");
		this.shadowRoot?.firstElementChild?.appendChild(modalsNode);
		BugShotApp.use(VueUniversalModal, {
			teleportTarget: modalsNode,
			modalComponent: "MyModal",
		});

		const styleEl = document.createElement("link");

		styleEl.setAttribute("rel", "stylesheet");
		styleEl.setAttribute(
			"href",
			browser.runtime.getURL("content/style.css")
		);
		this.shadowRoot?.prepend(styleEl);
	}
}

// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
(() => {
	// check to see if the element was defined beforehand if not define it
	if (!customElements.get("bugshot-sidebar"))
		customElements.define("bugshot-sidebar", BugShot);

	let bugshot = null;
	// check to see if the page contains an instance of bugshot
	let domBugshot = document.getElementsByTagName("bugshot-sidebar");

	// if no instance found define add one otherwise get reference to the one present
	if (domBugshot.length === 0) {
		bugshot = document.body.appendChild(
			document.createElement("bugshot-sidebar")
		);
	} else {
		bugshot = domBugshot[0];
	}

	// used to check if the content-script is present (used by popup and background)
	chrome.runtime.onMessage.addListener(handleExternalMessages);

	function handleExternalMessages(
		message: any,
		sender: chrome.runtime.MessageSender,
		sendResponse: (response?: any) => void
	) {
		console.log(message);

		if (sender.id !== chrome.runtime.id) console.error(sender);

		if (message === "content-status") sendResponse("ok");
		if (message === "login") {
			useSettingsStore().disabled = false;
			sendResponse("ok");
		}
		if (message === "logout") {
			useSettingsStore().disabled = true;
			sendResponse("ok");
		}
	}

	//check every 10s if the context is still valid; if it's not (error) remove the sidebar from the page
	CheckInterval = setInterval(async () => {
		try {
			// let response =
			await sendMessage("checkStatus", {}, "background");
			// console.log(response);
		} catch (error) {
			console.log(error);

			destroyBugShot();
		}
	}, 1000 * 10);

	function destroyBugShot() {
		if (BugShotApp != undefined) BugShotApp.unmount();
		if (CheckInterval != undefined) clearInterval(CheckInterval);

		// remove the nodes from DOM
		let domBugShot = document.getElementsByTagName("bugshot-sidebar");

		if (domBugShot.length !== 0) {
			for (let index = 0; index < domBugShot.length; index++) {
				const element = domBugShot[index];

				// preferably delete the parent div but it can be dangerous if somehow the bugshot-sidebar is in body
				element.remove();
			}
		}

		chrome.runtime.onMessage.removeListener(handleExternalMessages);
	}
})();
