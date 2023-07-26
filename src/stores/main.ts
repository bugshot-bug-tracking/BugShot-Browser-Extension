import { defineStore } from "pinia";

import axios from "axios";
import { Company } from "~/models/Company";
import { Project } from "~/models/Project";
import { Status } from "~/models/Status";
import { Bug } from "~/models/Bug";
import { useAuthStore } from "./auth";
import { User } from "~/models/User";
import { BugUserRole } from "~/models/BugUserRole";

import { onMessage } from "webext-bridge";
import { useStorage } from "@vueuse/core";

export const useMainStore = defineStore("main", {
	state: () => ({
		company: {} as Company,
		project: {} as Project,

		projects: [] as Project[],

		statuses: [] as Status[],

		bug: {} as Bug,

		prefProjectId: useStorage("bugshot-pref-proj", ""),

		markers: [],
	}),

	actions: {
		async destroy() {
			this.project = {} as Project;
			this.projects = [] as Project[];

			this.company = {} as Company;

			this.statuses = [] as Status[];

			this.bug = {} as Bug;

			return true;
		},

		async init() {
			/*
				- fetch all projects on the url
				- set main project/company
					* compare or set the pref company on the page local storage (bugshot-pref-proj)
			*/
			let url = window.location.href;

			let user = useAuthStore().getUser;

			try {
				let projects = (
					await axios.post(
						`users/${user.id}/check-project`,
						{
							url: url,
						},
						{
							headers: {
								// "include-project-users": true,
								"include-project-role": true,
								"include-organization-id": true,
							},
						}
					)
				).data.data;

				this.projects = [
					...projects.exact,
					...projects.additional,
				] as Project[];
			} catch (error) {
				console.log(error);
				throw error;
			}

			this.setProject();
		},

		setProject() {
			// if there is a preferred project use that otherwise use the first available
			if (!this.prefProjectId || this.prefProjectId === "")
				this.prefProjectId = this.projects[0].id;

			// find the project in the list of projects
			let project = this.projects.find(
				(x) => x.id === this.prefProjectId
			);

			// used for preventing errors when a bug info tab is open and the project changed
			this.bug = {} as Bug;

			// if the project was not found fall back to the first available
			if (project === undefined) {
				this.project = this.projects[0];
				// register the choice (treats the case where a preference is set and the project is not in the list)
				this.prefProjectId = this.project.id;
			} else this.project = project;

			// set the company based on the project
			this.company = this.project.attributes.company;

			this.fetchStatuses();
			this.fetchProjectUsers();
			this.fetchMarkers();
		},

		async fetchMarkers() {
			let params = new URLSearchParams();
			params.set("url", window.location.href);

			try {
				let markers = await axios.get(
					`projects/${this.project.id}/markers?${params.toString()}`
				);

				this.markers = markers.data.data;
			} catch (error) {
				console.log(error);
				throw error;
			}
		},

		changePreference(project_id: string) {
			if (!project_id || project_id == "") return "";

			this.prefProjectId = project_id;
			this.setProject();

			return this.prefProjectId;
		},

		async fetchProjectUsers() {
			try {
				let project = await axios.get(
					`companies/${this.project.attributes.company.id}/projects/${this.project.id}`,

					{
						headers: {
							"include-project-users": true,
						},
					}
				);

				this.project.attributes.users = (project.data.data as Project)
					.attributes.users as User[];
			} catch (error) {
				console.log(error);
				throw error;
			}
		},

		async fetchStatuses() {
			/*
				- fetch all statuses for the active (project_id) project
				- at the same time fetch all bugs
			*/

			try {
				let project = await axios.get(
					`projects/${this.project.id}/statuses`,
					{
						headers: {
							"include-bugs": true,
						},
					}
				);

				this.statuses = project.data.data as Status[];
			} catch (error) {
				console.log(error);
				throw error;
			}
		},

		async setActiveBug(id: string) {
			const bug = this.getBugById(id);

			if (!bug) throw "Could not set active bug.";

			this.bug = bug;

			this.fetchAttachments();
			this.fetchComments();
			this.fetchBugUsers();
			// this.fetchScreenshots(this.bug.id)
		},

		async resetActiveBug() {
			this.bug = {} as Bug;
		},

		async syncBug(payload: any) {
			try {
				let bug = this.getBugById(payload.id);
				if (!bug) throw "Bug not found in memory";

				let response = await axios.put(
					`statuses/${bug.attributes.status_id}/bugs/${bug.id}`,
					{
						ai_id: bug.attributes.ai_id,

						...(payload.changes.designation
							? { designation: payload.changes.designation }
							: { designation: bug.attributes.designation }),

						...(payload.changes.description
							? { description: payload.changes.description }
							: { description: bug.attributes.description }),

						url: bug.attributes.url,
						operating_system: bug.attributes.operating_system,
						browser: bug.attributes.browser,
						selector: bug.attributes.selector,
						resolution: bug.attributes.resolution,

						...(payload.changes.status_id
							? { status_id: payload.changes.status_id }
							: { status_id: bug.attributes.status_id }),

						...(payload.changes.priority_id
							? { priority_id: payload.changes.priority_id }
							: { priority_id: bug.attributes.priority.id }),

						...(payload.changes.order_number != null
							? { order_number: payload.changes.order_number }
							: { order_number: bug.attributes.order_number }),

						// if undefined it means that no change was made; if null it means resetting the deadline;
						...(payload.changes.deadline === undefined
							? {
									deadline: bug.attributes.deadline?.slice(
										0,
										-1
									),
							  }
							: payload.changes.deadline === null
							? { deadline: null }
							: {
									deadline: payload.changes.deadline?.slice(
										0,
										-1
									),
							  }),
					}
				);

				if (payload.changes.status_id) {
					let orgList = this.getBugsByStatusId(
						bug.attributes.status_id
					);

					let index1 = orgList?.findIndex((x) => x.id === bug.id);

					if (index1 !== undefined && index1 >= 0)
						orgList?.splice(index1, 1);

					let newList = this.getBugsByStatusId(
						payload.changes.status_id
					);

					newList?.unshift(bug);
				}

				bug.attributes = response.data.data.attributes;

				console.log(bug);
			} catch (error) {
				console.log(error);
				throw error;
			}
		},

		async fetchScreenshots() {
			let bug = this.bug;

			if (!bug) throw "Bug not found in memory";

			try {
				// fetch bug screenshots
				let screenshots = (
					await axios.get(`bugs/${bug.id}/screenshots`)
				).data.data;

				bug.screenshots = screenshots;
			} catch (error) {
				console.log(error);
				throw error;
			}
		},

		async fetchAttachments() {
			let bug = this.bug;
			if (!bug) throw "Bug not found in memory";

			try {
				// fetch bug screenshots
				let attachments = (
					await axios.get(`bugs/${bug.id}/attachments`)
				).data.data;

				bug.attachments = attachments;
			} catch (error) {
				console.log(error);
				throw error;
			}
		},

		async fetchComments() {
			let bug = this.bug;

			if (!bug) throw "Bug not found in memory";

			try {
				// fetch bug screenshots
				let comments = (await axios.get(`bugs/${bug.id}/comments`)).data
					.data;

				bug.comments = comments;
			} catch (error) {
				console.log(error);
				throw error;
			}
		},

		async fetchBugUsers() {
			let bug = this.bug;

			if (!bug) throw "Bug not found in memory";

			try {
				// fetch bug screenshots
				let users = (await axios.get(`bugs/${bug.id}/users`)).data
					.data as BugUserRole[];

				bug.users = users;
			} catch (error) {
				console.log(error);
				throw error;
			}
		},
	},

	getters: {
		getCompany: (state) => state.company,
		getProject: (state) => state.project,
		getProjects: (state) => state.projects,
		getStatuses: (state) => state.statuses,

		getStatusById: (state) => (id: string) =>
			state.statuses?.find((x) => x.id === id),

		getBugById: (state) => (id: string) => {
			if (!state.statuses) return null;

			for (const status of state.statuses)
				for (const bug of status.attributes.bugs ?? [])
					if (bug.id === id) return bug;

			return null;
		},

		getBugsByStatusId: (state) => (id: string) => {
			let status = state.statuses?.find((x) => x.id === id);

			if (status) return status.attributes.bugs;
			else throw "No status found";
		},

		getProjectUsers: (state) => state.project.attributes.users,

		getFirstStatus: (state) => {
			if (state.statuses.length < 1) return null;

			return state.statuses?.find((x) => x.attributes.order_number === 0);
		},

		getActiveBug: (state) => state.bug,
		getProjectPreference: (state) => state.prefProjectId,

		getMarkers: (state) => state.markers,

		getAssignees: (state) =>
			state.bug.users?.map((x: BugUserRole) => {
				x.user.role = x.role;
				return x.user;
			}),
	},
});

onMessage("content-get-project-preference", () => {
	return useMainStore().getProjectPreference;
});
onMessage("content-set-project-preference", ({ data }) => {
	let { project_id } = data;

	return useMainStore().changePreference(project_id);
});
