<template>
	<Spinner v-if="loading" style="height: 30em" />

	<div v-else>
		<Login v-if="!auth" />

		<Main
			v-if="auth && !noProject && !errorPage"
			@noProjects="noProject = true"
			@error="errorPage = true"
		/>

		<Empty v-if="auth && noProject && !errorPage" />

		<Error v-if="auth && errorPage" />
	</div>
</template>

<script setup lang="ts">
import Login from "./pages/Login.vue";
import Main from "./pages/Main.vue";
import Empty from "./pages/Empty.vue";
import Error from "./pages/Error.vue";

import { useI18nStore } from "~/stores/i18n";
import { useAuthStore } from "~/stores/auth";

useI18nStore().init();

const loading = ref(true);

const store = useAuthStore();
const auth = computed(() => store.isAuthenticated);

const noProject = ref(false);
const errorPage = ref(false);

const init = async () => {
	try {
		let result = await store.init();

		// if not authenticated exit
		if (!result) {
			console.log("An error occured!", result);
			return;
		}
	} catch (error) {
		console.log(error);
		errorPage.value = true;
	} finally {
		loading.value = false;
	}
};

onMounted(init);
</script>

<style lang="scss">
@import "~/styles/Style.scss";
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
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
	font-family: "Open Sans", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

p {
	margin: unset;
}
</style>
