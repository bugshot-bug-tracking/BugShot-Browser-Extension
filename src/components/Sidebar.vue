<template>
	<div id="sidebar" :class="{ open: open, top: settings.position === 2 }">
		<img
			class="logo"
			src="/assets/icons/bugshot.svg"
			alt="BugShot logo"
			@click="sidebar.toggle"
			cursor-pointer
		/>

		<ul style="display: none">
			<div text-center>
				<li @click="openBugList">
					<img src="/assets/icons/buglist.svg" alt="bug list" />
					<p>{{ t("bug_list") }}</p>
				</li>

				<li @click="openAdmin">
					<img src="/assets/icons/admin.svg" alt="admin" />
					<p>{{ t("admin") }}</p>
				</li>
			</div>

			<li class="report-button" @click="emit('add')">
				<img src="/assets/icons/add.svg" alt="add" />
			</li>

			<div>
				<div h-22 />
				<div h-22 />
				<div h-22 />
			</div>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { useSettingsStore } from "~/stores/settings";

const props = defineProps({
	open: {
		required: true,
		type: Boolean,
		description: "State of the sidebar",
	},
	project_id: {
		required: true,
		type: String,
		description: "Project ID",
	},
	company_id: {
		required: true,
		type: String,
		description: "Company ID",
	},
	organization_id: {
		required: true,
		type: String,
		description: "Organization ID",
	},
});

const emit = defineEmits(["open", "close", "openBugList", "add"]);

const settings = useSettingsStore();

const sidebar = reactive({
	toggle: () => {
		if (props.open) emit("close");
		else emit("open");
	},
});

const { t } = useI18n();

const openBugList = () => {
	emit("openBugList");
};
const openAdmin = () => {
	window
		.open(
			import.meta.env.VITE_WEB_URL + `/${props.organization_id}`,
			"_blank"
		)
		?.focus();
};
const openProject = () => {
	window
		.open(
			import.meta.env.VITE_WEB_URL +
				`/${props.organization_id}/company/${props.company_id}/project/${props.project_id}`,
			"_blank"
		)
		?.focus();
};
</script>

<style lang="scss" scoped>
#sidebar {
	display: flex;
	flex-direction: column;
	min-width: 4em;
	min-height: 4em;
	width: 5.5em;
	height: 5.5em;
	transition: 0.2s;
	transition-timing-function: ease-in;
	background: linear-gradient(
		to bottom right,
		transparent 0%,
		transparent 49%,
		hsl(230deg, 40%, 20%) 50%,
		hsl(230deg, 40%, 20%) 100%
	);

	&.top {
		background: linear-gradient(
			to top right,
			transparent 0%,
			transparent 49%,
			hsl(230deg, 40%, 20%) 50%,
			hsl(230deg, 40%, 20%) 100%
		);

		.logo {
			margin: 0.5em 0.5em auto auto;
		}
	}

	&.open {
		height: 100vh;
		background: hsl(230, 40%, 20%);

		ul {
			display: flex !important;
			flex-direction: column;
			align-items: stretch;
			justify-content: space-between;
			height: 100%;

			li {
				height: 5.5em;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				cursor: pointer;

				color: #ffffff;

				&:hover {
					background-color: hsl(230, 40%, 40%);
					cursor: pointer;
				}

				img {
					width: 2em;
					filter: brightness(0) invert(1);
				}
			}
		}

		.logo {
			width: 2.5em;
			min-height: 5.5em;
			margin: 0 auto;
		}

		.report-button {
			color: #18d992;

			img {
				width: 2.5em;

				filter: brightness(0) saturate(1) invert(76%) sepia(16%)
					saturate(4475%) hue-rotate(102deg) brightness(96%)
					contrast(81%);
			}

			&:hover {
				img {
					filter: brightness(0) invert(1);
				}

				background-color: #18d992;
			}
		}
	}
}

.logo {
	width: 2.125em;
	margin: auto 0.5em 0.5em auto;
}
</style>
