<template>
	<div flex flex-row-reverse>
		<Sidebar
			:id="company.id"
			@openBugList="buglist.open"
			@close="buglist.close"
		/>

		<BugList v-if="buglist.show" @close="buglist.close" />
	</div>
</template>

<script setup lang="ts">

const company = computed(() => {
	return { id: "[PH]company-id" };
});

const buglist = reactive({
	show: false,
	open: () => {
		buglist.show = true;
	},
	close: () => {
		buglist.show = false;
	},
});
</script>

<style lang="scss">
@import "~/styles/Style.scss";

:host {
	position: relative;
	font-size: 16px;
	color: #1a2040;
}
</style>
