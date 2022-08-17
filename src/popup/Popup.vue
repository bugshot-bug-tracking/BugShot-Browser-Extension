<template>
	<header text-12>Header</header>

	<main>Main</main>

	<footer>BugShot WebExtension v{{ pkg.version }}</footer>
</template>

<script setup lang="ts">

import { useI18nStore } from "~/stores/i18n";
import { useAuthStore } from "~/stores/auth";

useI18nStore().init();

const store = useAuthStore();
const auth = computed(() => store.isAuthenticated);

onMounted(async () => {
		let result = await store.init();

		if (!result) console.log("An error occured!");
});
</script>

<style lang="scss">
body {
	margin: 0;
	min-width: 100px;
	min-height: 100px;
}
</style>
