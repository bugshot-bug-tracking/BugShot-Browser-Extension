<template>
	<article :class="`poss-${position}`">
		<div flex flex-row-reverse v-if="done && settings.sidebar">
			<Sidebar
				:id="store.getCompany.id"
				:organization_id="store.getCompany.attributes.organization_id"
				:open="sidebar.state"
				@openBugList="buglist.open"
				@open="sidebar.open"
				@close="
					sidebar.close();
					buglist.close();
				"
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

		<Overlay
			v-if="add.overlay && settings.sidebar"
			@done="add.stage2"
			@close="add.cancel"
		/>
	</article>

	<div class="markers" v-if="markerList.length > 0">
		<MarkerList
			:show="settings.markers"
			:list="markerList"
			@open="openMarker"
		/>
	</div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";
import { useMainStore } from "~/stores/main";
import { useReportStore } from "~/stores/report";
import { useI18nStore } from "~/stores/i18n";
import { useSettingsStore } from "~/stores/settings";

useI18nStore().init();

const store = useMainStore();
const settings = useSettingsStore();

//WIP use for loading animation; now used for proper component init
const done = ref(false);

onMounted(async () => {
	await useAuthStore().init();

	settings.init();

	await store.init();

	done.value = true;
});

const sidebar = reactive({
	state: false,
	open: () => {
		sidebar.state = true;
	},
	close: () => {
		sidebar.state = false;
	},
});

const position = computed(() => settings.getPosition);

const buglist = reactive({
	show: false,
	open: () => {
		buglist.show = true;
	},
	close: () => {
		buglist.show = false;
		bugInfo.close();
		add.cancel();
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
		useReportStore().$reset();
	},
});

const markerList = computed(() => store.getMarkers);

const openMarker = (bug_id: string) => {
	store.setActiveBug(bug_id);

	sidebar.open();

	bugInfo.open(bug_id);
};
</script>

<style lang="scss">
@import "~/styles/Style.scss";

:host {
	font-size: 16px;
	color: #1a2040;
	width: fit-content;
	height: fit-content;
	overflow: hidden;
	background-color: transparent;
}

article {
	position: fixed;
	bottom: 0;
	right: 0;
	z-index: 2047483647;

	&.poss-2 {
		top: 0;
		bottom: unset;
	}
}
</style>
