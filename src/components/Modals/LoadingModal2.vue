<template>
	<MyModal v-model="show" :close="close" z-200>
		<div class="process">
			<div class="loading" v-if="state === 0">
				<slot name="loading">
					<img src="/assets/animations/loading.svg" alt="loading" />
				</slot>
			</div>

			<div class="success" v-if="state === 1">
				<slot name="success">
					<slot name="success-img">
						<img
							src="/assets/animations/bug_confirmation.gif"
							alt="Success"
						/>
					</slot>
					<slot name="success-header">
						<div>{{ t("success") + "!" }}</div>
					</slot>

					<slot name="success-message">
						<span v-if="message !== ''">{{ message }} </span>
					</slot>
				</slot>
			</div>

			<div class="error" v-if="state === 2">
				<slot name="error">
					<slot name="error-img">
						<img
							src="/assets/animations/error_bug.gif"
							alt="error"
						/>
					</slot>

					<slot name="error-header">
						<div>{{ t("error") + "!" }}</div>
					</slot>

					<slot name="error-message">
						<span v-if="message !== ''">{{ message }} </span>
					</slot>
				</slot>
			</div>
		</div>
	</MyModal>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const props = defineProps({
	show: {
		required: true,
		type: Boolean,
		description: "Determine if the modal is visible or not",
	},

	state: {
		required: true,
		type: Number,
		default: 0,
		description: "Determine if the state is loading, success or error",
	},

	message: {
		required: false,
		type: String,
		default: "",
		description: "Message shown in the success/error state",
	},
});

const emit = defineEmits(["close", "onSuccess", "onError"]);

const { t } = useI18n();

const timeout = ref({} as ReturnType<typeof setTimeout>);

const close = () => {
	if (props.state === 0) return;
	if (props.state === 1) emit("onSuccess");
	if (props.state === 2) emit("onError");

	clearTimeout(timeout.value);
	timeout.value = {} as ReturnType<typeof setTimeout>;

	emit("close");
};

watch(
	props,
	() => {
		if (props.state === 0) return;

		timeout.value = setTimeout(close, 3000);
	},
	{ deep: true }
);
</script>

<style lang="scss" scoped>
.process {
	background-color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 22em;
	height: 24em;
	padding: 1em;
	border-radius: 0.5em;

	> * {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.success,
	.error {
		gap: 1em;

		img {
			height: 50%;
		}

		> div {
			color: #5916b9;
			font-weight: bold;
			font-size: 2em;
		}
	}

	.error div {
		color: hsl(0, 88%, 58%);
	}

	span {
		font-size: 1.125em;
		border-top: 1px solid #eee5fc;
		padding: 1em;
		width: 100%;
		text-align: center;
	}
}
</style>
