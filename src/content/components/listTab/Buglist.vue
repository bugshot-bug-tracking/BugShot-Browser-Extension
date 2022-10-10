<template>
	<Tab style="width: 17vw">
		<State :show="state !== null" :state="state" />

		<Container>
			<ProjectShow @update="update" />
		</Container>

		<BugGroup
			v-for="status in statuses"
			:key="status.id"
			:name="status.attributes.designation"
		>
			<BugCard
				v-for="bug in status.attributes.bugs"
				:key="bug.id"
				:bug="bug"
				:status_name="status.attributes.designation"
				@info="$emit('info', $event)"
			/>
		</BugGroup>
	</Tab>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";

import Tab from "../global/tab/Tab.vue";
import State from "../global/state/State.vue";
import BugGroup from "./BugGroup.vue";
import BugCard from "./BugCard.vue";
import ProjectShow from "../global/project/ProjectShow.vue";
import Container from "../global/container/Container.vue";

export default {
	name: "Buglist",
	components: {
		Tab,
		State,
		BugGroup,
		BugCard,
		ProjectShow,
		Container,
	},
	emits: ["info"],
	setup() {
		const statuses = ref([]);
		const state = ref(null);

		const update = () => {
			if (state.value === "loading") return;

			state.value = "loading";

			chrome.runtime.sendMessage(
				{
					message: "getStatusesAndBugs",
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

		onMounted(() => {
			update();
			emitter.on("deleted", update);
		});

		onUnmounted(() => {
			emitter.off("deleted", update);
		});

		return {
			statuses,
			state,
			update,
		};
	},
};
</script>
