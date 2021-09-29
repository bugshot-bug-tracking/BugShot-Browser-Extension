<template>
	<Tab style="width: 17vw">
		<State :show="state !== null" :state="state" />

		<BugGroup
			v-for="status in statuses"
			:key="status.id"
			:name="status.attributes.designation"
		>
			<BugCard
				v-for="bug in status.bugs"
				:key="bug.id"
				:bug="bug"
				@info="$emit('info', $event)"
			/>
		</BugGroup>
	</Tab>
</template>

<script>
import { onMounted, ref } from "vue";

import Tab from "../global/tab/Tab.vue";
import State from "../global/state/State.vue";
import BugGroup from "./BugGroup.vue";
import BugCard from "./BugCard.vue";

export default {
	name: "Buglist",
	components: {
		Tab,
		State,
		BugGroup,
		BugCard,
	},
	emits: ["info"],
	setup() {
		const statuses = ref([]);
		const state = ref("loading");

		const update = () => {
			chrome.runtime.sendMessage(
				{
					message: "getStatusesAndBugs",
					payload: {
						project_id: 1, // ! Need to get the proper project here
					},
				},
				(response) => {
					state.value = null;
					console.log(response);

					if (response.message === "error") {
						state.value = "error";
						console.error(response.error);
						return;
					}

					if (response.message !== "ok") {
						console.error("What was the message?");
						return;
					}

					statuses.value = response.payload;
				}
			);
		};

		onMounted(update);

		emitter.on("deleted", update);

		return {
			statuses,
			state,
		};
	},
};
</script>

