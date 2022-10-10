<template>
	<transition :duration="100" name="modal">
		<div class="modal-mask" v-if="show">
			<div
				class="modal-wrapper"
				@click.self="no_close_button ? {} : emit('close')"
			>
				<div class="modal-container">
					<button
						class="btn-modal-close"
						@click.prevent="$emit('close')"
						v-if="!no_close_button"
					/>

					<div class="modal-content">
						<slot />
					</div>

					<slot name="extra" />
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);

const props = defineProps({
	show: {
		type: Boolean,
		default: true,
	},

	no_close_button: {
		required: false,
		type: Boolean,
		default: false,
	},
});
</script>

<style lang="scss" scoped>
.modal-mask {
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: hsla(0, 0%, 0%, 0.5);
	display: table;
	transition: opacity 0.3s ease;
}

.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

.modal-container {
	height: fit-content;
	width: fit-content;
	max-height: 95vh;
	max-width: 95vw;
	position: relative;
	margin: auto;
	background-color: transparent;
	border-radius: 6px;
	box-shadow: 0 2px 8px hsla(0, 0%, 0%, 0.33);
	transition: all 0.3s ease;
	font-family: Helvetica, Arial, sans-serif;

	> .btn-modal-close {
		position: absolute;
		top: -13px;
		right: -13px;
		background-image: url("/assets/icons/close_2.svg");
		background-repeat: no-repeat;
		width: 16px;
		height: 16px;
		background-color: hsl(0, 0%, 100%) !important;
		padding: 12px !important;
		border-radius: 100% !important;
		background-position: center;
		z-index: 1;
		box-shadow: -1px 2px 10px hsla(0, 0%, 0%, 0.5);
		background-size: 70%;
		border: unset;

		&:focus {
			box-shadow: unset;
		}
	}

	> .modal-content {
		contain: content;
		overflow: auto;
		scroll-behavior: auto;
		min-width: 300px;
		min-height: 200px;
		max-height: 95vh;

		&::-webkit-scrollbar {
			display: none;
		}
	}
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
	opacity: 0;
}

.modal-leave-active {
	opacity: 0;
}

.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}

.modal-enter-active .modal-container {
	-webkit-transform: scale(0);
	transform: scale(0);
}
</style>
