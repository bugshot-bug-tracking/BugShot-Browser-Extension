<template>
	<div flex flex-row-reverse v-if="done">
		<Sidebar
			:id="store.getCompany.id"
			@openBugList="buglist.open"
			@close="buglist.close"
			@add="add.start"
			v-show="!addMode"
		/>

		<BugList v-if="buglist.show" @close="buglist.close" v-show="!addMode" />
	</div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";
import { useMainStore } from "~/stores/main";

const store = useMainStore();

//WIP use for loading animation; now used for proper component init
const done = ref(false);

onMounted(async () => {
	await useAuthStore().init();

	await store.init(new URL(window.location.href).origin);

	done.value = true;
});

const buglist = reactive({
	show: false,
	open: () => {
		buglist.show = true;
	},
	close: () => {
		buglist.show = false;
	},
});

// indicator for add procedure to hide elements
const addMode = computed(() => add.formTab || add.overlay);

const add = reactive({
	formTab: false,
	overlay: false,

	start: () => {
		add.stage1();
	},

	// use the overlay to gather screenshot and marker data
	stage1: () => {
		add.overlay = true;
	},

	// start gathering bug infos like designation, description ...
	stage2: () => {
		add.formTab = true;
	},

	cancel: () => {
		add.formTab = false;
		add.overlay = false;
	},
});
</script>

<style lang="scss">
@import "~/styles/Style.scss";

:host {
	position: relative;
	font-size: 16px;
	color: #1a2040;
}
</style>
