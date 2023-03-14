<template>
	<section class="bs-container">
		<h4 class="bs-bb">{{ t("current_project") }}</h4>

		<div
			grid
			gap-4
			style="grid-template-columns: auto 1fr; font-size: 0.875em"
		>
			<b>{{ t("company") }}:</b>
			<div>{{ company.attributes.designation }}</div>

			<b>{{ t("project") }}</b>
			<div>{{ project.attributes.designation }}</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useMainStore } from "~/stores/main";

const { t } = useI18n();

const store = useMainStore();

const company = computed(() => store.getCompany);
const project = computed(() => store.getProject);
</script>

<style lang="scss" scoped>
h4 {
	margin: 0 0 1em 0;
	padding-bottom: 0.5em;
}
</style>
