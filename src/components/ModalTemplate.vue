<template>
	<div class="modal-wrapper2">
		<div
			class="modal-header2"
			v-if="$slots['header'] || $slots['header-text']"
		>
			<slot name="header">
				<h4>
					<slot name="header-text">[PH] Header</slot>
				</h4>

				<img
					src="/assets/icons/close_1.svg"
					alt="close"
					w-8
					h-8
					cursor-pointer
					class="black-to-purple"
					@click="$emit('close')"
					v-if="!noCloseButton"
				/>
			</slot>
		</div>

		<slot name="content">
			<div class="modal-content2" p-1 pr-2>
				<slot />
			</div>
		</slot>

		<footer v-if="$slots['footer']">
			<slot name="footer" />
		</footer>
	</div>
</template>

<script setup lang="ts">
defineProps({
	noCloseButton: {
		required: false,
		type: Boolean,
		default: false,
	},
});

defineEmits(["close"]);
</script>

<style lang="scss" scoped>
.modal-wrapper2 {
	background: white;
	border-radius: 0.5em;
	padding: 1em;
	// min-width: 28em;
	max-height: 90vh;
	box-shadow: 0 0.125em 0.25em hsla(0, 0%, 0%, 0.161);
	overflow: auto;
}

.modal-header2 {
	border-bottom: 0.125em solid #eee5fc;
	padding-bottom: 1em;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

h4 {
	font-weight: bold;
	margin: unset;
}

.modal-content2 {
	margin: 1em 0;
}
</style>
