import * as Vue from "vue";
import Content from "./components/Content.vue";
import Markers from "./components/Markers.ce.vue";
import mitt from "mitt";

if (!window.emitter) window.emitter = mitt();

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

// check to see if the element was defined beforehand if not define it
if (!customElements.get("bug-shot")) customElements.define("bug-shot", BugShot);

let bugshot = null;
// check to see if the page contains an instance of bugshot
let domBugshot = document.getElementsByTagName("bug-shot");

// if no instance found define add one otherwise get refference to the one present
if (domBugshot.length === 0) {
	// create a containing element to host the custom element
	bugshot = document.createElement("div");

	bugshot.style.cssText = `
    position: fixed;
    bottom: 0;
    right: 0;
    width: fit-content;
    height: fit-content;
    overflow: hidden;
    background-color: transparent;
    z-index: 2047483647;
    `;

	bugshot.appendChild(document.createElement("bug-shot"));

	document.body.append(bugshot);
} else {
	bugshot = domBugshot[0];
}

// check to see if the element was defined beforehand if not define it
const element = Vue.defineCustomElement(Markers);
if (!customElements.get("bug-shot-markers"))
	customElements.define("bug-shot-markers", element);

let markers = null;
// check to see if the page contains an instance of bugshot-markers
let domMarkers = document.getElementsByTagName("bug-shot-markers");

// if no instance found define add one otherwise remove the one present and create a new one (in case of SPA's it will help refetch the markers data)
if (domMarkers.length === 0) {
	markers = document.createElement("bug-shot-markers");
	document.body.appendChild(markers);
} else {
	markers = domMarkers[0];
	markers.remove();

	markers = document.createElement("bug-shot-markers");
	document.body.appendChild(markers);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (sender.id !== chrome.runtime.id) console.error(sender);

	switch (request.message) {
		case "getStatus":
			sendResponse({
				message: "ok",
				payload: {
					status: !bugshot.hidden,
					markers: !markers.hidden,
				},
			});

			break;

		case "setStatus":
			bugshot.hidden = !request.payload.status;
			sendResponse({
				message: "ok",
				payload: { status: !bugshot.hidden },
			});

			break;

		case "setMarkers":
			markers.hidden = !request.payload.status;
			sendResponse({
				message: "ok",
				payload: { status: !markers.hidden },
			});

			break;

		case "refresh":
			bugshot.innerHTML = "";
			bugshot.appendChild(document.createElement("bug-shot"));
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
