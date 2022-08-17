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
body {
	margin: 0;
	min-width: 100px;
	min-height: 100px;
}
</style>
