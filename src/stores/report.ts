import { defineStore } from "pinia";
import axios from "axios";
import { useMainStore } from "./main";
import { Bug } from "~/models/Bug";
import getOS from "~/util/getOS";
import getBrowser from "~/util/getBrowser";
import { User } from "~/models/User";
import { useAuthStore } from "./auth";

export const useReportStore = defineStore("report", {
	state: () => ({
		bug: {
			designation: "",
			description: "",
			deadline: null as String | null,
		},

		priority: 2,

		clientX: 0,
		clientY: 0,

		pageX: 0,
		pageY: 0,

		devicePixelRatio: 1,

		selector: "",

		screenshots: [] as string[],
		markers: [] as Object[],
		attachments: [] as { designation: string; base64: string }[],

		assignees: [] as User[],
	}),

	actions: {
		async submit() {
			let status_id = useMainStore().getFirstStatus?.id;

			// send bug data and get bug object
			let bug = (
				await axios.post(`statuses/${status_id}/bugs`, {
					designation: this.bug.designation,
					description: this.bug.description,
					priority_id: this.priority,

					...(this.bug.deadline
						? {
								deadline: new Date(this.bug.deadline as string)
									.toISOString()
									.slice(0, -1),
						  }
						: {}),

					url: window.location.href,
					operating_system: getOS(),
					browser: `${getBrowser().name} ${getBrowser().version}`,
					selector: this.selector,
					resolution: `${window.screen.width}x${window.screen.height}`,
					order_number: 0,
				})
			).data.data as Bug;

			await Promise.allSettled([
				this.screenshots.map(async (s) => {
					if (s)
						await axios.post(`bugs/${bug.id}/screenshots`, {
							base64: btoa(s),
							position_x: this.clientX,
							position_y: this.clientY,
							web_position_x: this.pageX,
							web_position_y: this.pageY,
							device_pixel_ratio: this.devicePixelRatio,
							markers: this.markers,
						});
				}),
				this.attachments.map(async (a) => {
					await axios.post(`bugs/${bug.id}/attachments`, a);
				}),
				this.assignees.map(async (a) => {
					await axios.post(`bugs/${bug.id}/assign-user`, {
						user_id: a.id,
					});
				}),
			]);

			console.log(bug);

			this.$reset();

			await useMainStore().fetchStatuses();
			await useMainStore().fetchMarkers();
		},

		async guestSubmit() {
			let creator = await useAuthStore().getGuestUser();

			// send bug data and get bug object
			let bug = (
				await axios.post(`bugs/store-with-token`, {
					designation: this.bug.designation,
					description: this.bug.description,
					priority_id: this.priority,

					...(this.bug.deadline
						? {
								deadline: new Date(this.bug.deadline as string)
									.toISOString()
									.slice(0, -1),
						  }
						: {}),

					url: window.location.href,
					operating_system: getOS(),
					browser: `${getBrowser().name} ${getBrowser().version}`,
					selector: this.selector,
					resolution: `${window.screen.width}x${window.screen.height}`,
					order_number: 0,

					screenshots: this.screenshots.map((s) => {
						if (s)
							return {
								base64: btoa(s),
								position_x: this.clientX,
								position_y: this.clientY,
								web_position_x: this.pageX,
								web_position_y: this.pageY,
								device_pixel_ratio: this.devicePixelRatio,
								markers: this.markers,
							};
					}),
					attachments: this.attachments,

					...(creator ? { guest_creator: creator } : {}),
				})
			).data.data as Bug;

			console.log(bug);

			this.$reset();
		},
	},

	getters: {
		getFirstMarkerCoordinates: (state) => {
			if (state.markers[0] == undefined) return { x: 0, y: 0 };

			let marker = state.markers[0];

			return {
				x:
					marker.position_x <= 0
						? 0
						: (marker.position_x / marker.screenshot_width) * 100,

				y:
					marker.position_y <= 0
						? 0
						: (marker.position_y / marker.screenshot_height) * 100,
			};
		},
	},
});
