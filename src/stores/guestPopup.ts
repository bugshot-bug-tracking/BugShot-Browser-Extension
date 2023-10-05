import { defineStore } from "pinia";

import axios, { HttpStatusCode } from "axios";
import { Project } from "~/models/Project";

import { Tabs } from "webextension-polyfill";

export const useGuestPopupStore = defineStore("guest-popup", {
	state: () => ({
		project: undefined as Project | undefined,

		tab: undefined as Tabs.Tab | undefined,
	}),

	actions: {
		async init() {
			this.tab = await this.getActiveTab();

			if (this.tab === undefined) throw "No active tab found!";

			if (this.tab.url === undefined) throw "Not a proper tab url!";

			try {
				let response = await axios.post(
					"projects/check-via-access-token",
					{
						url: this.tab.url,
					}
				);

				if (response.status === HttpStatusCode.NoContent) return;

				this.project = response.data.data as Project;
			} catch (error) {
				console.log(error);
				throw error;
			}

			if (this.project == undefined) return;

			if (!(await this.checkAlive())) throw "No content-script present!";
		},

		async getActiveTab() {
			let tab = await browser.tabs.query({
				active: true,
				currentWindow: true,
			});

			if (tab) return tab[0];

			return undefined;
		},

		async checkAlive() {
			if (!this.tab?.id) return false;

			let timer = undefined;
			let alive = await Promise.race([
				browser.tabs
					.sendMessage(this.tab.id, "content-status")
					.then((v) => v)
					.catch((e) => {
						console.log(e);
						return false;
					}),
				new Promise((resolve) => {
					timer = setTimeout(resolve, 3000);
				}).then(() => false),
			]);

			if (timer !== undefined) clearTimeout(timer);

			console.log(alive);

			if (alive !== "ok") {
				try {
					let response = await browser.scripting.executeScript({
						target: { tabId: this.tab.id },
						files: ["content/index.js"],
					});

					console.log(response);

					if (response[0]?.error != undefined) return false;
				} catch (error) {
					console.log(error);

					return false;
				}
			}

			return true;
		},
	},

	getters: {
		getProject: (state) => state.project,
	},
});
