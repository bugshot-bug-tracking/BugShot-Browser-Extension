<template>
	<article class="bs-tab" gap-4>
		<section class="bs-container">

		</section>

	</article>
</template>

<script setup lang="ts">

const props = defineProps({
	id: {
		required: true,
		type: String,
		description: "Bug ID",
	},
});

const emit = defineEmits(["close"]);

</script>

<style lang="scss" scoped>
</style>
