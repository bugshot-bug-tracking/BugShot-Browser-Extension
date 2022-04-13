<template>
	<div id="sidebar" :class="{ open: open }">
		<div id="logo" @click="logoClick"></div>

		<div id="bug-list-button" v-show="open" @click="$emit('list')" />

		<div id="admin-button" v-show="open" @click="adminButtonClick" />

		<div
			id="project-button"
			v-show="open"
			@click="projectButtonClick"
		></div>

		<div id="add-button" v-show="open" @click="$emit('add')" />
	</div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";

export default {
	name: "Sidebar",
	emits: ["default", "list", "add"],
	setup(props, context) {
		const open = ref(false);

		const logoClick = () => {
			open.value = !open.value;
			if (open.value === false)
				// trigger default state if sidebar is closed
				context.emit("default");
		};

		const adminButtonClick = (event) => {
			chrome.runtime.sendMessage(
				{ message: "openAdminPannel" },
				(response) => {
					if (response.message === "ok")
						console.log("Oppened admin pannel in new tab.");
				}
			);
		};

		const projectButtonClick = (event) => {
			chrome.runtime.sendMessage(
				{ message: "openProjectPannel" },
				(response) => {
					if (response.message === "ok")
						console.log("Oppened project pannel in new tab.");
				}
			);
		};

		onMounted(() => {
			emitter.on("openSidebar", openSidebar);
		});

		onUnmounted(() => {
			emitter.off("openSidebar", openSidebar);
		});

		const openSidebar = () => {
			open.value = true;
		};

		return {
			open,
			logoClick,
			adminButtonClick,
			projectButtonClick,
		};
	},
};
</script>
