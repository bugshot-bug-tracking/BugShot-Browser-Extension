import { defineStore } from "pinia";

import axios from "axios";
import { Company } from "~/models/Company";
import { Project } from "~/models/Project";

import { useAuthStore } from "./auth";
import { sendMessage } from "webext-bridge";
import { Tabs } from "webextension-polyfill";

export const useMainPopupStore = defineStore("main-popup", {
	state: () => ({
		companies: new Map<String, Company>(),

		projects: [] as Project[],

		company: "",
		project: "",

		tab: undefined as Tabs.Tab | undefined,
	}),

	actions: {
		async destroy() {
			this.companies = new Map<String, Company>();
			this.projects = [] as Project[];

			return true;
		},

		async init() {
			this.tab = await this.getActiveTab();

			if (this.tab === undefined) throw "No active tab found!";

			if (this.tab.url === undefined) throw "Not a proper tab url!";

			let user = useAuthStore().getUser;

			if (user.id === undefined) throw "Error while fetching user data!";

			try {
				let response = (
					await axios.post(
						`users/${user.id}/check-project`,
						{
							url: this.tab.url,
						},
						{
							headers: {
								"include-organization-id": true,
							},
						}
					)
				).data.data;

				let projects = [
					...response.exact,
					...response.additional,
				] as Project[];

				projects.forEach((project) => {
					if (!this.projects.some((p) => p.id === project.id))
						this.projects.push(project);

					this.companies.set(
						project.attributes.company.id,
						project.attributes.company
					);
				});
			} catch (error) {
				console.log(error);
				throw error;
			}

			if (this.projects.length < 1) return;

			if (!(await this.checkAlive())) throw "No content-script present!";

			await this.checkPreference();
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

			let alive = await browser.tabs
				.sendMessage(this.tab?.id, "content-status")
				.catch((e) => {
					console.log(e);
					return false;
				});

			console.log(alive);

			if (alive === false) {
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

		async checkPreference() {
			let preference = await sendMessage(
				"content-get-project-preference",
				{},
				"content-script@" + this.tab?.id
			);

			await this.setProject(preference);
		},

		async changeCompany() {
			const company = this.companies.get(this.company);

			const project = this.getCompanyProjects(company?.id)[0];

			this.setProject(project.id);

			await this.changePreference();
		},

		async changeProject() {
			this.setProject(this.project);

			await this.changePreference();
		},

		async setProject(id: string) {
			const project = this.projects.find((x) => x.id === id);

			if (project === undefined) {
				this.project = this.projects[0].id;
				this.company = this.projects[0].attributes.company.id;

				await this.changePreference();
				return;
			}

			this.project = project.id;
			this.company = project.attributes.company.id;
		},

		async changePreference() {
			let response = await sendMessage(
				"content-set-project-preference",
				{ project_id: this.project },
				"content-script@" + this.tab?.id
			);

			if (response === "") console.log("error");
		},
	},

	getters: {
		getCompanies: (state) => state.companies,
		getProjects: (state) => state.projects,

		getCompany: (state) => state.companies.get(state.company),
		getProject: (state) =>
			state.projects.find((p) => p.id === state.project),

		getCompanyProjects: (state) => (company_id: string) =>
			state.projects.filter(
				(p) => p.attributes.company.id === company_id
			),
	},
});
