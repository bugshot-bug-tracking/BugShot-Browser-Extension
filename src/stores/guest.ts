import { defineStore } from "pinia";

import axios, { HttpStatusCode } from "axios";
import { Project } from "~/models/Project";

export const useGuestStore = defineStore("guest", {
	state: () => ({
		project: {} as Project,
	}),

	actions: {
		async init() {
			let url = window.location.href;

			try {
				let response = await axios.post("access-tokens/check-url", {
					url,
				});

				if (response.status === HttpStatusCode.NoContent) return;

				this.project = response.data.data as Project;
			} catch (error) {
				console.log(error);
				throw error;
			}
		},
	},

	getters: {
		getProject: (state) => state.project,
	},
});
