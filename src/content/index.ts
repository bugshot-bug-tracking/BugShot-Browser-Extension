import "@webcomponents/webcomponentsjs/bundles/webcomponents-ce.js";
import "uno.css";
import { createApp } from "vue";

import axi from "~/modules/axios";
import pinia from "~/modules/pinia";
import i18n from "~/modules/i18n";
import VueUniversalModal from "vue-universal-modal";
import "vue-universal-modal/dist/index.css";

import gComponents from "~/modules/globalComponents";

import App from "./App.vue";
import { sendMessage } from "webext-bridge";

// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
(() => {
	class BugShot extends HTMLElement {
		constructor() {
			super();
			this.attachShadow({ mode: "open" });

			let app = createApp(App);

			pinia.install({ app });
			axi.install({ app });
			i18n.install({ app });

			gComponents.install({ app });

			app.mount(this.shadowRoot);

			let modalsNode = document.createElement("div");
			modalsNode.setAttribute("id", "modals");
			this.shadowRoot?.firstElementChild?.appendChild(modalsNode);
			app.use(VueUniversalModal, {
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

	// check to see if the element was defined beforehand if not define it
	if (!customElements.get("bugshot-sidebar"))
		customElements.define("bugshot-sidebar", BugShot);

	let bugshot = null;
	// check to see if the page contains an instance of bugshot
	let domBugshot = document.getElementsByTagName("bugshot-sidebar");

	// if no instance found define add one otherwise get reference to the one present
	if (domBugshot.length === 0) {
		// create a containing element to host the custom element
		bugshot = document.createElement("div");

		bugshot.appendChild(document.createElement("bugshot-sidebar"));

		document.body.append(bugshot);
	} else {
		bugshot = domBugshot[0];
	}

	// used to check if the content-script is present (used by popup and background)
	chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
		if (sender.id !== chrome.runtime.id) console.error(sender);

		if (message === "content-status") sendResponse("ok");
	});

	//check every 10s if the context is still valid; if it's not (error) remove the sidebar from the page
	var checkInterval = setInterval(async () => {
		try {
			let response = await sendMessage("checkStatus", {}, "background");
			console.log(response);
		} catch (error) {
			console.log(error);
			removeSidebar();
			clearInterval(checkInterval);
		}
	}, 1000 * 10);
})();

function removeSidebar() {
	let domBugShot = document.getElementsByTagName("bugshot-sidebar");

	if (domBugShot.length !== 0) {
		for (let index = 0; index < domBugShot.length; index++) {
			const element = domBugShot[index];

			// preferably delete the parent div but it can be dangerous if somehow the bugshot-sidebar is in body
			element.remove();
		}
	}
}
