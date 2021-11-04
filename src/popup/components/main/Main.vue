<template>
	<div class="no-project" v-if="!selectedProject.id">
		<img src="/assets/popup/no-project.png" />
		<div>No project on this page</div>
	</div>

	<div class="change-project" v-if="options.length > 1 && selectedProject.id">
		<div class="text">Change Project</div>
		<Dropdown
			:options="options"
			:default="selectedProject.id"
			@selected="selectChange"
		/>
	</div>

	<Project v-if="selectedProject.id" :project="selectedProject" />

	<Settings :context="context" />

	<div class="btn logout-btn" @click="logout">
		<img src="/assets/icons/log_out.svg" />
		<span class="logout-label"> Log out </span>
	</div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Project from "./Project.vue";
import Dropdown from "../Dropdown.vue";
import Settings from "./Settings.vue";
import { onMounted } from "@vue/runtime-core";

export default {
	components: { Project, Dropdown, Settings },
	name: "Main",
	emits: ["logout", "loading"],
	props: {
		context: Object,
		user: Object,
	},
	setup(props, context) {
		const selectedProject = ref({});
		const options = ref([]);

		const loading = ref({
			project: true,
			settings: true,
		});

		const setLoading = (what, value) => {
			switch (what) {
				case "project":
					loading.value.project = value;
					break;

				case "settings":
					loading.value.settings = value;
					break;
			}

			context.emit(
				"loading",
				loading.value.project || loading.value.settings
			);
		};

		const logout = () => {
			context.emit("loading");

			chrome.runtime.sendMessage(
				{
					message: "logout",
				},
				(response) => {
					context.emit("logout");
				}
			);
		};

		const setProject = () => {
			setLoading("project", true);

			chrome.runtime.sendMessage(
				{
					message: "checkProject",
					payload: { url: props.context.url },
				},
				(response) => {
					setLoading("project", false);

					switch (response.message) {
						case "error":
							console.error(response.err);
							break;

						case "ok":
							if (response.payload !== null)
								selectedProject.value =
									response.payload.project;
							else selectedProject.value = {};

							break;
					}
				}
			);
		};

		onMounted(() => {
			setLoading();

			setProject();

			setLoading("settings", true);

			chrome.runtime.sendMessage(
				{
					message: "getProject",
					payload: { url: props.context.url },
				},
				(response) => {
					setLoading("settings", false);

					switch (response.message) {
						case "error":
							console.error(response.err);
							break;

						case "ok":
							if (response.payload !== null)
								options.value = response.payload;
							else options.value = [];
							break;
					}
				}
			);
		});

		const selectChange = (value) => {
			if (value === selectedProject.value.id) return;
			setLoading("project", true);

			chrome.runtime.sendMessage(
				{
					message: "setPrefered",
					payload: {
						project_id: value,
						url: props.context.url,
					},
				},
				(response) => {
					setLoading("project", false);

					switch (response.message) {
						case "error":
							console.error(response.err);
							break;

						case "ok":
							setProject();
							alertContentScript();
							break;
					}
				}
			);
		};

		const alertContentScript = () => {
			chrome.tabs.sendMessage(props.context.id, {
				message: "updateProject",
			});
		};

		return {
			selectedProject,
			options,
			selectChange,
			logout,
		};
	},
};
</script>

<style lang="scss">
@import "../../../content/components/global/container/Style.scss";

.btn.logout-btn {
	display: flex;
	align-items: center;

	&:hover {
		> img {
			filter: invert(46%) sepia(72%) saturate(6900%) hue-rotate(343deg)
				brightness(110%) contrast(93%);
			// color: #f53d3d;
		}

		.logout-label {
			color: hsl(0, 90%, 60%);
		}
	}

	.logout-label {
		font-size: 20px;
		font-weight: 500;
		margin-left: 10px;
	}
}

.no-project {
	width: 80%;
	margin: auto;

	> img {
		width: 100%;
		margin: auto;
	}

	color: hsl(265, 79%, 41%);
	font-weight: 700;
	text-align: center;
}

.change-project {
	width: 95%;

	.text {
		margin: 0 0 2% 2%;
		font-weight: 500;
	}
}
</style>
