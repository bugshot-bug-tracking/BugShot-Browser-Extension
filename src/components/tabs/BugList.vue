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

		<ProjectManager />

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
								item.attributes.deadline
									? d(
											new Date(
												dateFix(
													item.attributes.deadline
												)
											),
											'short'
									  )
									: t('no_deadline')
							"
							:priority="item.attributes.priority.id"
							:active="activeBug.id === item.id"
							@info="openInfo(item.id)"
						/>
					</template>
				</CollapsableList>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useMainStore } from "~/stores/main";
import dateFix from "~/util/dateFixISO";

const emit = defineEmits<{
	(event: "close"): void;
	(event: "openInfo", id: string): void;
}>();

const { t, d } = useI18n();

const store = useMainStore();

const statuses = computed(() => store.getStatuses);

const activeBug = computed(() => store.getActiveBug);

const openInfo = (id: string) => {
	store.setActiveBug(id);
	emit("openInfo", id);
};
</script>

<style lang="scss" scoped>
.bs-tab {
	min-width: 22em;
}

.statuses {
	display: flex;
	flex-direction: column;
	gap: 1em;
	height: 100%;
	max-height: 100%;
	overflow: auto;
	padding: 0 0.5em 1em 0;
	margin: 1em 0 0 0;
}
</style>
