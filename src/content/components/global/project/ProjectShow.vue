<template>
	<State :show="show" :state="`mini-loading`" style="z-index: 1" />

	<div class="project-grid-container" v-if="project.id">
		<div class="top">Current Project</div>

		<div class="company">Company:</div>
		<div class="company-name">
			{{ project.attributes.company.attributes.designation }}
		</div>

		<div class="project">Project:</div>
		<div class="project-name">
			{{ project.attributes.designation }}
		</div>
	</div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";
import State from "../state/State.vue";

export default {
	components: { State },
	name: "ProjectShow",
	emits: ["update"],
	setup(props, context) {
		const project = ref({});
		const show = ref(true);

		const update = () => {
			show.value = true;
			chrome.runtime.sendMessage(
				{
					message: "currentProject",
				},
				(response) => {
					show.value = false;
					switch (response.message) {
						case "error":
							console.error(response.error);
							break;

						case "ok":
							project.value = response.payload;
							break;
					}
				}
			);
		};

		const msgUpdate = () => {
			update();
			context.emit("update");
		};

		onMounted(() => {
			update();

			emitter.on("updateProject", msgUpdate);
		});

		onUnmounted(() => {
			emitter.off("updateProject", msgUpdate);
		});

		return {
			project,
			show,
		};
	},
};
</script>
