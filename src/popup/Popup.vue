<template>
	<Spinner v-if="loading" style="height: 30em" />

	<Maintenance v-else-if="isMaintenance" />

	<div v-else>
		<Login v-if="!auth" />

		<Error v-else-if="errorPage" />

		<Empty v-else-if="noProject" />

		<Main v-else @noProjects="noProject = true" @error="errorPage = true" />
	</div>
</template>

<script setup lang="ts">
import Login from "./pages/Login.vue";
import Main from "./pages/Main.vue";
import Empty from "./pages/Empty.vue";
import Error from "./pages/Error.vue";

import { useI18nStore } from "~/stores/i18n";
import { useAuthStore } from "~/stores/auth";
import Maintenance from "./pages/Maintenance.vue";

useI18nStore().init();

const loading = ref(true);

const store = useAuthStore();
const auth = computed(() => store.isAuthenticated);

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
</script>

<style lang="scss">
@import "~/styles/Style.scss";
@import "vue-select/dist/vue-select.css";

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
