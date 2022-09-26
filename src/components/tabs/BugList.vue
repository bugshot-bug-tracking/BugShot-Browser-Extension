<template>
	<article class="bs-tab">
		<h2 flex justify-between m-0 mb-6>
			{{ t("bug_list") }}

			<img
				src="/assets/icons/close_2.svg"
				alt="X"
				@click="emit('close')"
				cursor-pointer
			/>
		</h2>

		<section class="bs-container">
			<h4 class="bs-bb">{{ t("current_project") }}</h4>

			<div
				grid
				gap-4
				style="grid-template-columns: auto 1fr; font-size: 0.875rem"
			>
				<b>{{ t("company") }}:</b>
				<div>{{ company }}</div>

				<b>{{ t("project") }}</b>
				<div>{{ project }}</div>
			</div>
		</section>

		<div class="statuses bs-scroll">
			<div v-for="status in statuses" :key="status.id">
				<CollapsableList
					:header="status.attributes.designation"
					:list="status.attributes.bugs"
				>
					<template #item="{ item }">
						<BugCard
							:title="item.attributes.designation"
							:deadline="
								item.attributes.deadline ?? 'No deadline'
							"
							:priority="item.attributes.priority.id"
							:active="info.id === item.id"
							@info="info.open(item.id)"
						/>
					</template>
				</CollapsableList>
			</div>
		</div>
	</article>

	<BugInfo v-if="info.show" :id="info.id" @close="info.close" />
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useMainStore } from "~/stores/main";

const emit = defineEmits(["close"]);

const company = "[PH] Company";
const project = "[PH] Project";
const store = useMainStore();

const statuses = computed(() => store.getStatuses);

const { t } = useI18n();

const info = reactive({
	show: false,
	id: "",
	open: (id: string) => {
		info.id = id;
		info.show = true;
	},
	close: () => {
		info.id = "";
		info.show = false;
	},
});
</script>

<style lang="scss" scoped>
.bs-tab {
	min-width: 22rem;
}

h4 {
	margin: 0 0 1rem 0;
	padding-bottom: 0.5rem;
}

.statuses {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	height: 100%;
	max-height: 100%;
	overflow: auto;
	padding: 0 0.5rem 1rem 0;
	margin: 1rem 0 0 0;
}
</style>
