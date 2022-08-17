<template>
	<div
		:class="{
			overlay: overlay,
		}"
	>
		<img src="/assets/animations/loading.svg" alt="loading" />
	</div>
</template>

<script setup lang="ts">
defineProps({
	overlay: {
		type: Boolean,
		default: false,
	},
});
</script>

<style lang="scss" scoped>
div {
	position: relative;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	&.overlay {
		position: absolute;
		height: 100vh;
		width: 100vw;
		top: 0;
		left: 0;
		z-index: 10;
		background-color: hsla(0, 0%, 100%, 0.5);
	}
}
</style>
