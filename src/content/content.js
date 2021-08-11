import * as Vue from 'vue';

import Content from "./components/Content.vue";

var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;

if (location.ancestorOrigins.contains(extensionOrigin))
	throw "";


console.log(extensionOrigin);


class BugShot extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		this.shadowRoot.innerHTML = `<div id="bugshotcontainer"></div>`;
		Vue.createApp(Content).mount(this.shadowRoot);
		setCSS(this.shadowRoot)
	}

}


// Add CSS stylesheet links in the provided DOM
function setCSS(dom) {
	let styleSheet = [
		chrome.runtime.getURL("assets/css/content_class.css"),
		chrome.runtime.getURL("assets/css/content.css"),
		chrome.runtime.getURL("libraries/bootstrap-5.0.2-dist/css/bootstrap.min.css")
	];

	styleSheet.forEach(sheet => {
		let link = document.createElement('link');
		link.setAttribute('rel', 'stylesheet');
		link.setAttribute('href', sheet);
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



