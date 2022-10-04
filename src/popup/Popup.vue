<template>
	<Spinner v-if="loading" style="height: 30rem" />

	<component v-else :is="auth ? Main : Login" />
</template>

<script setup lang="ts">
import Login from "./pages/Login.vue";
import Main from "./pages/Main.vue";

import { useI18nStore } from "~/stores/i18n";
import { useAuthStore } from "~/stores/auth";

useI18nStore().init();

const loading = ref(true);

const store = useAuthStore();
const auth = computed(() => store.isAuthenticated);

onMounted(async () => {
	try {
		let result = await store.init();

		if (!result) console.log("An error occured!");
	} catch (error) {
		console.log(error);
	} finally {
		loading.value = false;
	}
});
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
	min-height: 30rem;
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
