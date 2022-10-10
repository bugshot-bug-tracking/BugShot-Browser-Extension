<template>
	<Spinner v-if="loading" style="height: 30rem" />

	<div v-else>
		<Login v-if="!auth" @onSuccess="init" />

		<component
			v-if="auth && initDone"
			:is="!errorPage ? (noProject ? Empty : Main) : Error"
		/>
	</div>
</template>

<script setup lang="ts">
import Login from "./pages/Login.vue";
import Main from "./pages/Main.vue";
import Empty from "./pages/Empty.vue";
import Error from "./pages/Error.vue";

import { useI18nStore } from "~/stores/i18n";
import { useAuthStore } from "~/stores/auth";
import { useMainPopupStore } from "~/stores/mainPopup";

useI18nStore().init();

const loading = ref(true);

const store = useAuthStore();
const auth = computed(() => store.isAuthenticated);

let main = useMainPopupStore();

const noProject = ref(false);
const errorPage = ref(false);

// used as a way to wait until init is done so that Main doesn't throw errors
const initDone = ref(false);

const init = async () => {
	initDone.value = false;

	try {
		let result = await store.init();

		// if not authenticated exit
		if (!result) {
			console.log("An error occured!", result);
			return;
		}

		await main.init();

		if (main.projects.length < 1) noProject.value = true;
	} catch (error) {
		console.log(error);
		errorPage.value = true;
	} finally {
		loading.value = false;

		initDone.value = true;
	}
};

onMounted(init);
</script>

<style lang="scss">
@import "~/styles/Style.scss";
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
@import "vue-select/dist/vue-select.css";

html input {
	font-size: 1rem;
	line-height: 1.5rem;
}

body {
	margin: 0;
	min-width: 22rem;
	background-color: #f8f8fc;
	padding: 1rem;
	font-size: 1rem;
	color: #1a2040;
	font-family: "Open Sans", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

p {
	margin: unset;
}
</style>
