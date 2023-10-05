<template>
	<article :class="`poss-${settings.getPosition}`" v-if="!disabled">
		<div flex flex-row-reverse v-if="done && settings.sidebar">
			<Sidebar
				v-model:open="sidebar"
				@openBugList="buglist.open"
				@open-admin="openAdmin"
				@close="buglist.close"
				@add="add.start"
				v-show="!addMode"
				:mode="auth.isGuest ? 'guest' : 'normal'"
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

	<div id="modals"></div>

	<div
		class="markers"
		v-if="
			store.getMarkers.length > 0 &&
			settings.markerShow &&
			!disabled &&
			!auth.isGuest
		"
	>
		<MarkerList
			:show="settings.markers"
			:list="store.getMarkers"
			@open="openMarker"
		/>
	</div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";
import { useGuestStore } from "~/stores/guest";
import { useI18nStore } from "~/stores/i18n";
import { useMainStore } from "~/stores/main";
import { useReportStore } from "~/stores/report";
import { useSettingsStore } from "~/stores/settings";

useI18nStore().init();

const store = useMainStore();
const guest = useGuestStore();
const settings = useSettingsStore();
const auth = useAuthStore();

//WIP use for loading animation; now used for proper component init
const done = ref(false);

const init = async () => {
	try {
		await auth.init();

		await settings.init();

		if (auth.isGuest) await guest.init();
		else await store.init();

		done.value = true;
	} catch (error) {
		console.log(error);
	}
};
onMounted(init);

const disabled = computed(() => settings.disabled);
watch(disabled, (newValue, oldValue) => {
	if (newValue === false && oldValue === true) init();
});

const sidebar = ref(false);

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

const openMarker = (bug_id: string) => {
	store.setActiveBug(bug_id);

	sidebar.value = true;

	bugInfo.open(bug_id);
};

const openAdmin = () => {
	window
		.open(
			import.meta.env.VITE_WEB_URL +
				`/${store.getCompany?.attributes.organization_id}/company/${store.getCompany?.id}/project/${store.getProject.id}`,
			"_blank"
		)
		?.focus();
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

article,
#modals {
	position: fixed;
	bottom: 0;
	right: 0;
	z-index: 2047483647;

	&.poss-2 {
		top: 0;
		bottom: unset;
	}
}

.markers {
	z-index: 2047483647;
}
</style>
