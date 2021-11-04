import * as Vue from "vue";
import Content from "./components/Content.vue";
import mitt from "mitt";

window.emitter = mitt();

var extensionOrigin = "chrome-extension://" + chrome.runtime.id;

if (location.ancestorOrigins.contains(extensionOrigin)) throw "";

console.log(extensionOrigin);

class BugShot extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });

		Vue.createApp(Content).mount(this.shadowRoot);

		setCSS(this.shadowRoot);
	}
}

// Add CSS stylesheet links in the provided DOM
function setCSS(dom) {
	let styleSheet = [
		chrome.runtime.getURL("/libraries/bootstrap.css"),
		chrome.runtime.getURL("/content/Styles.css"),
	];

	styleSheet.forEach((sheet) => {
		let link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("href", sheet);
		dom.prepend(link);
	});
}

window.customElements.define("bug-shot", BugShot);

// After the preparations are done append the new element to the DOM
let div = document.createElement("div");

div.style.cssText = `
    position: fixed;
    bottom: 0;
    right: 0;
    width: fit-content;
    height: fit-content;
    overflow: hidden;
    background-color: transparent;
    z-index: 10000;
    `;

div.appendChild(document.createElement("bug-shot"));

document.body.append(div);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (sender.id !== chrome.runtime.id) console.error(sender);

	switch (request.message) {
		case "getStatus":
			sendResponse({
				message: "ok",
				payload: { status: !div.hidden },
			});

			break;

		case "setStatus":
			div.hidden = !request.payload.status;
			sendResponse({
				message: "ok",
				payload: { status: !div.hidden },
			});

			break;

		case "refresh":
			div.innerHTML = "";
			div.appendChild(document.createElement("bug-shot"));
			sendResponse({
				message: "ok",
				payload: 1,
			});

			break;

		case "updateProject":
			emitter.emit("updateProject");
			break;
	}

	return true;
});
