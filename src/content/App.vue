<template>
	<div flex flex-row-reverse v-if="done">
		<Sidebar
			:id="store.getCompany.id"
			@openBugList="buglist.open"
			@close="buglist.close"
			@add="add.start"
			v-show="!addMode"
		/>

		<BugList
			v-if="buglist.show && !addMode"
			@close="buglist.close"
			@openInfo="bugInfo.open"
		/>

		<BugTab
			v-if="bugInfo.show && !addMode"
			:id="bugInfo.id"
			@close="bugInfo.close"
		/>

		<AddBug :show="add.formTab" @close="add.cancel" />
	</div>

	<Overlay v-if="add.overlay" @done="add.stage2" @close="add.cancel" />
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";
import { useMainStore } from "~/stores/main";
import { useReportStore } from "~/stores/report";

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

const bugInfo = reactive({
	show: false,
	id: "",
	open: (id: string) => {
		bugInfo.id = id;
		bugInfo.show = true;
	},
	close: () => {
		bugInfo.id = "";
		bugInfo.show = false;
		store.resetActiveBug();
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
		useReportStore().destroy;
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
