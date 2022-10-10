<template>
	<div class="modal-wrapper2">
		<div class="modal-header2">
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
				/>
			</slot>
		</div>

		<div class="modal-content2">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
defineEmits(["close"]);
</script>

<style lang="scss" scoped>
.modal-wrapper2 {
	background: white;
	border-radius: 0.5em;
	padding: 1em;
	// min-width: 28em;
	box-shadow: 0 0.125em 0.25em hsla(0, 0%, 0%, 0.161);
}

.modal-header2 {
	border-bottom: 0.125em solid #eee5fc;
	padding-bottom: 1em;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
}

h4 {
	font-weight: bold;
	margin: unset;
}

.modal-content2 {
	margin: 1em 0;
}
</style>
