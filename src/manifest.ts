import { isDev } from "scripts/utils";
import type { Manifest } from "webextension-polyfill";
import pkg from "../package.json";

export enum Mode {
	DEV = "development",
	PROD = "production",
}

export enum Target {
	CHROMIUM = "chromium",
	FIREFOX = "firefox",
	SAFARI = "safari",
}

const sharedConfig = {
	manifest_version: 3,
	name: (pkg.displayName || pkg.name) + (isDev ? " [DEV]" : ""),
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
	permissions: ["activeTab", "tabs", "storage", "scripting"],

	content_scripts: [
		{
			matches: ["https://*.bugshot.de/*"],
			js: ["misc-script.js"],
		},
	],
};

export function getManifest(
	target: Target = Target.CHROMIUM
): Manifest.WebExtensionManifest {
	// update this file to update this manifest.json
	// can also be conditional based on your need

	return {
		...sharedConfig,

		manifest_version: 3,

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

		// content_scripts: [
		// 	{
		// 		matches: ["http://*/*", "https://*/*"],
		// 		js: ["./content/index.js"],
		// 	},
		// ],

		web_accessible_resources: [
			{
				resources: ["assets/*", "content/*"],
				matches: ["*://*/*", "<all_urls>"],
			},
		],
	};
}

export function getManifestV2(
	target: Target = Target.FIREFOX
): Manifest.WebExtensionManifest {
	// update this file to update this manifest.json
	// can also be conditional based on your need

	return {
		...sharedConfig,

		manifest_version: 2,

		permissions: [...sharedConfig.permissions, "<all_urls>"],

		browser_action: {
			default_icon: {
				"16": "./assets/extension_icons/icon_16x16.png",
				"32": "./assets/extension_icons/icon_32x32.png",
				"48": "./assets/extension_icons/icon_48x48.png",
				"96": "./assets/extension_icons/icon_96x96.png",
				"128": "./assets/extension_icons/icon_128x128.png",
				"256": "./assets/extension_icons/icon_256x256.png",
			},
			default_title: sharedConfig.name,
			default_popup: "./popup/index.html",
		},

		// chose this way because using scripts doesn't work with modules
		background: {
			page: "background.html",
		},

		web_accessible_resources: ["assets/*", "content/*"],
	};
}
