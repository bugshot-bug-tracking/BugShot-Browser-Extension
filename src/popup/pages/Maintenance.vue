<template>
	<main flex flex-col items-center text-center>
		<h1 class="black-to-purple">{{ t("maintenance_in_progress") }}</h1>

		<p>
			{{ t("maintenance_in_progress_subtext") }}
		</p>
	</main>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style scoped></style>
