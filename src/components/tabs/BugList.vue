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
					:list="bugs"
				>
					<template #item="{ item }">
						<BugCard
							:title="item.attributes.designation"
							:deadline="
								item.attributes.deadline !== ''
									? item.attributes.deadline
									: 'No deadline'
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
const emit = defineEmits(["close"]);

const company = "[PH] Company";
const project = "[PH] Project";

const statuses = [
	{ id: "0", attributes: { designation: "Status 0" } },
	{ id: "1", attributes: { designation: "Status 1" } },
	{ id: "2", attributes: { designation: "Status 2" } },
	{ id: "3", attributes: { designation: "Status 3" } },
	{ id: "4", attributes: { designation: "Status 4" } },
];

const bugs = [
	{
		id: "0",
		attributes: {
			designation: "Bug 0",
			priority: { id: (0 % 4) + 1 },
			deadline: "",
		},
	},
	{
		id: "1",
		attributes: {
			designation: "Bug 1",
			priority: { id: (1 % 4) + 1 },
			deadline: "",
		},
	},
	{
		id: "2",
		attributes: {
			designation: "Bug 2",
			priority: { id: (2 % 4) + 1 },
			deadline: "",
		},
	},
	{
		id: "3",
		attributes: {
			designation: "Bug 3",
			priority: { id: (3 % 4) + 1 },
			deadline: "",
		},
	},
	{
		id: "4",
		attributes: {
			designation: "Bug 4",
			priority: { id: (4 % 4) + 1 },
			deadline: "",
		},
	},
	{
		id: "5",
		attributes: {
			designation: "Bug 5",
			priority: { id: (5 % 4) + 1 },
			deadline: "",
		},
	},
	{
		id: "6",
		attributes: {
			designation: "Bug 6",
			priority: { id: (6 % 4) + 1 },
			deadline: "",
		},
	},
	{
		id: "7",
		attributes: {
			designation: "Bug 7",
			priority: { id: (7 % 4) + 1 },
			deadline: "",
		},
	},
	{
		id: "8",
		attributes: {
			designation: "Bug 8",
			priority: { id: (8 % 4) + 1 },
			deadline: "",
		},
	},
	{
		id: "9",
		attributes: {
			designation: "Bug 9",
			priority: { id: (9 % 4) + 1 },
			deadline: "",
		},
	},
	{
		id: "10",
		attributes: {
			designation: "Bug 10",
			priority: { id: (10 % 4) + 1 },
			deadline: "",
		},
	},
	{
		id: "11",
		attributes: {
			designation: "Bug 11",
			priority: { id: (11 % 4) + 1 },
			deadline: "",
		},
	},
	{
		id: "12",
		attributes: {
			designation: "Bug 12",
			priority: { id: (12 % 4) + 1 },
			deadline: "",
		},
	},
];

const t = (value: any) => value;

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
