<template>
	<header text-12>Header</header>

	<main>Main</main>

	<footer>BugShot WebExtension v{{ pkg.version }}</footer>
</template>

<script setup lang="ts">
import pkg from "../../package.json";
</script>

<style lang="scss">
body {
	margin: 0;
	min-width: 100px;
	min-height: 100px;
}
</style>
