import { defineStore } from "pinia";
import axios from "axios";
import { useMainStore } from "./main";
import { Bug } from "~/models/Bug";
import getOS from "~/util/getOS";
import getBrowser from "~/util/getBrowser";

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

		selector: "",

		screenshots: [] as string[],
		markers: [] as Object[],
		attachments: [] as { designation: string; base64: string }[],
	}),

	actions: {
		async destroy() {
			this.bug = {
				designation: "",
				description: "",
				deadline: null as String | null,
			};

			this.priority = 2;

			this.clientX = 0;
			this.clientY = 0;

			this.pageX = 0;
			this.pageY = 0;

			this.selector = "";

			this.screenshots = [] as string[];
			this.markers = [] as Object[];
			this.attachments = [] as { designation: string; base64: string }[];

			return true;
		},

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
								deadline: new Date(this.bug.deadline)
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

			await Promise.all(
				this.screenshots.map(async (s) => {
					if (s)
						await axios.post(`bugs/${bug.id}/screenshots`, {
							base64: btoa(s),
							position_x: this.clientX,
							position_y: this.clientY,
							web_position_x: this.pageX,
							web_position_y: this.pageY,
						});
				})
			);

			await Promise.all(
				this.attachments.map(async (a) => {
					await axios.post(`bugs/${bug.id}/attachments`, a);
				})
			);

			console.log(bug);

			await this.destroy();

			await useMainStore().fetchStatuses();
		},
	},

	getters: {},
});
