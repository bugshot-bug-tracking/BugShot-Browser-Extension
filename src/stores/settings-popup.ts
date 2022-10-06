import { defineStore } from "pinia";
import { onMessage, sendMessage } from "webext-bridge";
import { Tabs } from "webextension-polyfill";

import { Position, Theme } from "~/models/settings-store";

export const useSettingsPopupStore = defineStore("settings-popup", {
	state: () => ({
		position: Position.TopRight,
		sidebar: true,
		theme: Theme.Dark,
		locale: "en",
		markers: false,

		tab: undefined as Tabs.Tab | undefined,
	}),

	actions: {
		async init() {
			this.tab = await this.getActiveTab();

			if (this.tab === undefined)
				return console.error("no active tab found!");

			await this.checkState();
		},

		async checkState() {
			try {
				let state = await sendMessage(
					"check-state",
					{},
					"content-script@" + this.tab?.id
				);

				this.position = state.position;
				this.sidebar = state.sidebar;
				this.theme = state.theme;
				this.locale = state.locale;
				this.markers = state.markers;
			} catch (error: any) {
				console.log(error);
			}
		},

		async getActiveTab() {
			let tab = await browser.tabs.query({
				active: true,
				currentWindow: true,
			});

			if (tab) return tab[0];

			return undefined;
		},

		async setPosition(position: Position) {
			this.position = position;

			try {
				let response = await sendMessage(
					"set-position",
					{ position: this.position },
					"content-script@" + this.tab?.id
				);

				console.log("response set-position: ", response);
			} catch (error: any) {
				console.log(error);
			}
		},

		async setSidebar() {
			try {
				let response = await sendMessage(
					"set-sidebar",
					{ sidebar: this.sidebar },
					"content-script@" + this.tab?.id
				);

				console.log("response set-sidebar: ", response);
			} catch (error: any) {
				console.log(error);
			}
		},

		async setMarkers() {
			try {
				let response = await sendMessage(
					"set-markers",
					{ markers: this.markers },
					"content-script@" + this.tab?.id
				);

				console.log("response set-markers: ", response);
			} catch (error: any) {
				console.log(error);
			}
		},

		async setTheme() {
			try {
				let response = await sendMessage("background-set-theme", {
					theme: this.theme,
					tab_id: this.tab?.id,
				});

				console.log("response set-theme: ", response);
			} catch (error: any) {
				console.log(error);
			}
		},

		async setLocale(value: string) {
			this.locale = value;

			try {
				let response = await sendMessage("background-set-locale", {
					locale: this.locale,
					tab_id: this.tab?.id,
				});

				console.log("response set-locale: ", response);
			} catch (error: any) {
				console.log(error);
			}
		},
	},

	getters: {},
});
