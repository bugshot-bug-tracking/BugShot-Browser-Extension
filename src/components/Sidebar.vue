<template>
	<div
		id="sidebar"
		:class="{
			open: open,
			top: settings.position === 2,
		}"
	>
		<img
			class="logo"
			src="/assets/icons/bugshot.svg"
			alt="BugShot logo"
			@click="sidebar.toggle"
			cursor-pointer
		/>

		<ul style="display: none">
			<div text-center v-if="mode === 'normal'">
				<li @click="emit(`openBugList`)">
					<img src="/assets/icons/buglist.svg" alt="bug list" />
					<p>{{ t("bug_list") }}</p>
				</li>

				<li @click="emit('openAdmin')">
					<img src="/assets/icons/admin.svg" alt="admin" />
					<p>{{ t("admin") }}</p>
				</li>
			</div>
			<div v-else />

			<li class="report-button" @click="emit('add')">
				<img src="/assets/icons/add.svg" alt="add" />
			</li>

			<div v-if="mode === 'normal'">
				<div h-22 />
				<div h-22 />
				<div h-22 />
			</div>
			<div
				v-else
				class="text-center p-2 text-3.5 font-bold"
				style="
					background-color: var(--bs-green-dark);
					color: #ffffff;
					letter-spacing: 1px;
					text-shadow: 1px 1px 2px var(--bs-black);
				"
			>
				<span>{{ t("guest") }}</span>
			</div>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { useSettingsStore } from "~/stores/settings";

const { t } = useI18n();

const props = defineProps({
	open: {
		required: true,
		type: Boolean,
		description: "State of the sidebar",
	},
	mode: {
		required: false,
		default: "normal",
		type: String as PropType<"normal" | "guest">,
	},
});

const emit = defineEmits([
	"update:open",
	"openBugList",
	"add",
	"openAdmin",
	"close",
]);

const settings = useSettingsStore();

const sidebar = reactive({
	toggle: () => {
		if (props.open) {
			emit("update:open", false);
			emit("close");
		} else emit("update:open", true);
	},
});
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
