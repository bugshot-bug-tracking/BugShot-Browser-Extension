<template>
	<n-config-provider
		:locale="locale"
		:date-locale="dateLocale"
		:theme="theme"
		:theme-overrides="overrides"
		:inline-theme-disabled="true"
		:preflight-style-disabled="true"
		flex
	>
		<n-global-style />

		<Spinner v-if="loading" h-120 flex-1 />

		<Maintenance v-else-if="isMaintenance" flex-1 />

		<div v-else flex-1 p-4 class="max-w-100%">
			<Login v-if="!store.isAuthenticated" />

			<Error v-else-if="errorPage" />

			<Empty v-else-if="noProject" />

			<MainGuest
				v-else-if="store.isGuest"
				@noProjects="noProject = true"
			/>

			<Main
				v-else
				@noProjects="noProject = true"
				@error="errorPage = true"
			/>
		</div>
	</n-config-provider>
</template>

<script setup lang="ts">
import Login from "./pages/Login.vue";
import Main from "./pages/Main.vue";
import MainGuest from "./pages/MainGuest.vue";
import Empty from "./pages/Empty.vue";
import Error from "./pages/Error.vue";

import { useI18nStore } from "~/stores/i18n";
import { useAuthStore } from "~/stores/auth";
import Maintenance from "./pages/Maintenance.vue";
import { useTheme } from "~/composables/useThemes";

import { enUS, dateEnUS, deDE, dateDeDE } from "naive-ui";

const { theme, overrides } = useTheme();

useI18nStore().init();

const loading = ref(true);

const store = useAuthStore();

const noProject = ref(false);
const errorPage = ref(false);

const isMaintenance = ref(false);

const init = async () => {
	try {
		loading.value = true;

		await store.init();
	} catch (error: any) {
		console.log(error);

		if (error?.response?.status === 503)
			return (isMaintenance.value = true);

		errorPage.value = true;
	} finally {
		loading.value = false;
	}
};

onMounted(init);

const locale = computed(() => {
	switch (useI18nStore().getCurrentLocale) {
		default:
		case "en":
			return enUS;

		case "de":
			return deDE;
	}
});
const dateLocale = computed(() => {
	switch (useI18nStore().getCurrentLocale) {
		default:
		case "en":
			return dateEnUS;

		case "de":
			return dateDeDE;
	}
});
</script>

<style lang="scss">
@import "~/styles/Style.scss";

html input {
	font-size: 1em;
	line-height: 1.5em;
}

body {
	margin: 0;
	min-width: 22em;
	width: 22em;
	background-color: #f8f8fc;
	padding: 1em;
	font-size: 1em;
	color: #1a2040;
}

p {
	margin: unset;
}
</style>
