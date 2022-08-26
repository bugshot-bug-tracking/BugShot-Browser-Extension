<template>
	<div id="sidebar" :class="{ open: open.value }">
		<img
			class="logo"
			src="/assets/icons/bugshot.svg"
			alt="BugShot logo"
			@click="open.toggle"
			cursor-pointer
		/>

		<ul style="display: none">
			<div>
				<li @click="openBugList">
					<img src="/assets/icons/buglist.svg" alt="bug list" />
					<p>{{ t("bug_list") }}</p>
				</li>

				<li @click="openAdmin">
					<img src="/assets/icons/admin.svg" alt="admin" />
					<p>{{ t("admin") }}</p>
				</li>

				<li @click="openProject">
					<img src="/assets/icons/projects.svg" alt="projects" />
					<p>{{ t("project", 2) }}</p>
				</li>
			</div>

			<li class="report-button">
				<img src="/assets/icons/add.svg" alt="add" />
			</li>

			<div>
				<div h-22 />
				<div h-22 />
				<div h-22 />
				<div h-22 />
			</div>
		</ul>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	id: {
		required: true,
		type: String,
		description: "Company ID",
	},
});

const emit = defineEmits(["open", "close", "openBugList"]);

const open = reactive({
	value: false,
	toggle: () => {
		open.value = !open.value;

		if (open.value) emit("open");
		else emit("close");
	},
});

//! replace this with the appropriate vue-18n method
const t = (value: any, value2?: any) => value;

const openBugList = () => {
	emit("openBugList");
};
const openAdmin = () => {
	window.open(import.meta.env.VITE_WEB_URL, "_blank")?.focus();
};
const openProject = () => {
	window
		.open(import.meta.env.VITE_WEB_URL + `/company/${props.id}`, "_blank")
		?.focus();
};
</script>

<style lang="scss" scoped>
#sidebar {
	display: flex;
	flex-direction: column;
	min-width: 4rem;
	min-height: 4rem;
	width: 5.5rem;
	height: 5.5rem;
	transition: 0.2s;
	transition-timing-function: ease-in;
	background: linear-gradient(
		to bottom right,
		transparent 0%,
		transparent 49%,
		hsl(230deg, 40%, 20%) 50%,
		hsl(230deg, 40%, 20%) 100%
	);

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
				height: 5.5rem;
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
					width: 2rem;
					filter: brightness(0) invert(1);
				}
			}
		}

		.logo {
			width: 2.5rem;
			min-height: 5.5rem;
			margin: 0 auto;
		}

		.report-button {
			color: #18d992;

			img {
				width: 2.5rem;

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
	width: 2.125rem;
	margin: auto 0.5rem 0.5rem auto;
}
</style>
