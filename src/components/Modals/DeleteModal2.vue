<template>
	<MyModal v-model="modal.show" :close="modal.close" z-101>
		<div class="wrapper">
			<span class="text">
				<p v-if="header === ''">{{ t("want_to_delete") }}</p>
				<p v-if="header !== ''">{{ header }}</p>

				<p>
					<b> {{ text }}</b> ?
				</p>
			</span>

			<div class="actions">
				<a class="bs-btn red" @click.prevent="execute">
					{{ t("yes") }}
				</a>

				<a class="bs-btn green empty" @click.prevent="modal.close">
					{{ t("no") }}
				</a>
			</div>
		</div>
	</MyModal>

	<LoadingModal2
		:show="loadingModal.show"
		:state="loadingModal.state"
		:message="loadingModal.message"
		@close="
			loadingModal.clear();
			modal.close();
		"
	/>
</template>

<script setup lang="ts">
const props = defineProps({
	show: {
		required: true,
		type: Boolean,
	},

	header: {
		required: false,
		type: String,
		default: "",
	},

	text: {
		required: true,
		type: String,
	},

	callback: {
		required: false,
		type: Function || null,
	},
});

const emit = defineEmits(["close", "delete"]);

const { t } = useI18n();

const execute = async () => {
	if (props.callback)
		try {
			loadingModal.show = true;

			await props.callback();

			loadingModal.state = 1;
		} catch (error: any) {
			// console.log(error);

			let data = error.response.data;

			loadingModal.state = 2;
			loadingModal.message = data.message;
		}
	else {
		emit("delete");
		modal.close();
	}
};

watch(
	() => props.show,
	() => {
		modal.show = props.show;
	}
);

const modal = reactive({
	show: props.show,
	open: () => {
		modal.show = true;
	},
	close: () => {
		modal.show = false;
		emit("close");
	},
});

const loadingModal = reactive({
	show: false,
	state: 0,
	message: "",
	clear: () => {
		loadingModal.show = false;
		loadingModal.state = 0;
		loadingModal.message = "";
	},
});
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 25em;
	height: 12.5em;
	justify-content: center;
	gap: 1.25em;
	padding: 1.25em;
	background-color: #ffffff;
	border-radius: 0.5em;

	.actions {
		display: flex;
		align-items: center;
		gap: 2.5em;
	}

	.text {
		white-space: pre-line;
		margin: unset;
		text-align: center;
	}
}
</style>
