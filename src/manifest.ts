import type { Manifest } from "webextension-polyfill";
import pkg from "../package.json";

export function getManifest(): Manifest.WebExtensionManifest {
	// update this file to update this manifest.json
	// can also be conditional based on your need
	return {
		manifest_version: 3,
		name: pkg.displayName || pkg.name,
		version: pkg.version,
		description: pkg.description,

		icons: {
			"16": "./assets/extension_icons/icon_16x16.png",
			"32": "./assets/extension_icons/icon_32x32.png",
			"48": "./assets/extension_icons/icon_48x48.png",
			"96": "./assets/extension_icons/icon_96x96.png",
			"128": "./assets/extension_icons/icon_128x128.png",
			"256": "./assets/extension_icons/icon_256x256.png",
		},

		permissions: ["activeTab", "tabs", "storage", "scripting", "downloads"],
		host_permissions: ["*://*/*", "<all_urls>"],

		action: {
			default_popup: "./popup/index.html",
		},
		// options_ui: {
		// 	page: "./options/index.html",
		// 	open_in_tab: true,
		// },
		background: {
			service_worker: "background.js",
			type: "module",
		},
		content_scripts: [
			{
				matches: ["http://*/*", "https://*/*"],
				js: ["./content/index.js"],
			},
		],
	};
}
