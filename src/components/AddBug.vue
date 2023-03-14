<template>
	<div v-if="show" class="bs-tab bs-scroll">
		<form
			@submit.prevent="submit"
			flex
			flex-col
			gap-4
			@reset.prevent="emit('close')"
		>
			<div class="top">
				<h4 m-0>{{ t("new_bug_report") }}</h4>

				<img
					src="/assets/icons/close_2.svg"
					alt="close"
					@click="emit('close')"
				/>
			</div>

			<ProjectManager />

			<div class="bs-container" gap-4>
				<div class="bs-input" ref="name">
					<label>
						{{ t("bug_name") }}

						<span>{{ `${store.bug.designation.length}/50` }}</span>
					</label>

					<input
						@focus.stop.prevent="focusName"
						autofocus
						type="text"
						:placeholder="t('bug_name')"
						v-model="store.bug.designation"
						required
						minlength="1"
						maxlength="50"
					/>
				</div>

				<div class="bs-input" ref="description">
					<label>
						{{ t("describe_problem") }}

						<span>
							{{ `${store.bug.description.length}/1500` }}
						</span>
					</label>

					<textarea
						@focus.stop.prevent="focusDescription"
						:placeholder="t('describe_problem')"
						v-model="store.bug.description"
						rows="3"
						maxlength="1500"
					/>
				</div>

				<div class="datepicker">
					<b>{{ t("pick_date") }}</b>

					<Datepicker
						v-model="store.bug.deadline"
						:placeholder="t('no_deadline')"
						:locale="locale"
						:format="format"
						:previewFormat="format"
						@cleared="clearDeadline"
						:selectText="t('select.select')"
						:cancelText="t('cancel')"
						:teleport="datepicker"
						:altPosition="altPosition"
					/>

					<div ref="datepicker" relative></div>
				</div>

				<div class="priority">
					<div>{{ t("set_priority") }}</div>

					<div class="options" py-2>
						<div>
							<input
								type="radio"
								name="priority-radio"
								value="1"
								id="i1"
								v-model="store.priority"
							/>
							<label for="i1" class="i i1">
								<span> {{ t("minor") }} </span>
							</label>
						</div>
						<div>
							<input
								type="radio"
								name="priority-radio"
								value="2"
								id="i2"
								v-model="store.priority"
							/>
							<label for="i2" class="i i2">
								<span> {{ t("normal") }} </span>
							</label>
						</div>
						<div>
							<input
								type="radio"
								name="priority-radio"
								value="3"
								id="i3"
								v-model="store.priority"
							/>
							<label for="i3" class="i i3">
								<span> {{ t("important") }} </span>
							</label>
						</div>
						<div>
							<input
								type="radio"
								name="priority-radio"
								value="4"
								id="i4"
								v-model="store.priority"
							/>
							<label for="i4" class="i i4">
								<span> {{ t("critical") }} </span>
							</label>
						</div>
					</div>
				</div>

				<div class="assign-to" v-if="false">
					<div>Assign to</div>
					<Assignees :list="[]" />
				</div>
			</div>

			<AttachmentsList
				:list="data.attachments"
				:error="attachments.error"
				@upload="attachments.upload"
				local
			>
				<template #item="{ item, index }">
					<AttachmentsItem
						:name="item.name"
						:id="index"
						@delete="attachments.delete"
						:download="false"
					/>
				</template>
			</AttachmentsList>

			<div flex justify-around>
				<button class="bs-btn green" type="submit">
					{{ t("report_bug") + "!" }}
				</button>

				<button class="bs-btn green empty" type="reset">
					{{ t("cancel") }}
				</button>
			</div>
		</form>

		<LoadingModal2
			:show="loadingModal.show"
			:state="loadingModal.state"
			:message="loadingModal.message"
			@close="loadingModal.clear"
			@onSuccess="close"
		/>
	</div>
</template>

<script setup lang="ts">
import toBase64 from "~/util/toBase64";
import { useReportStore } from "~/stores/report";
import { useI18nStore } from "~/stores/i18n";

defineProps({
	show: {
		type: Boolean,
		required: true,
	},
});

// this code forces the focus on a field and subsequently crushes the function in a webpage that wants to take the focus away by exceeding stack call size
const name = ref(null);
const description = ref(null);
const focusName = (event) => {
	name.value.lastChild.focus();
};
const focusDescription = (event) => {
	description.value.lastChild.focus();
};
/////////

const emit = defineEmits(["close"]);

const { t, d } = useI18n();

const store = useReportStore();

const datepicker = ref(null);
const altPosition = (el: HTMLElement | undefined) => ({
	top: "1em",
	left: 0,
});

const locale = computed(() => useI18nStore().getCurrentLocale);
const format = (date: Date) => d(new Date(date).toISOString(), "short");

const data = reactive({
	attachments: [] as File[],
});

const attachments = reactive({
	error: "",

	upload: (files: File[]) => {
		data.attachments = files;
	},

	delete: (index: number) => {
		data.attachments.splice(index, 1);
	},
});

const clearDeadline = () => {
	store.bug.deadline = null;
};

const submit = async () => {
	try {
		loadingModal.show = true;

		store.attachments = await Promise.all(
			data.attachments.map(async (x) => ({
				designation: x.name,
				base64: btoa(await toBase64(x)),
			}))
		);

		await store.submit();

		loadingModal.state = 1;
		loadingModal.message = t("bug_created");
	} catch (error) {
		loadingModal.state = 2;

		console.log(error);
	}
};

const close = () => {
	resetData();
	emit("close");
};

const resetData = () => {
	data.attachments = [];
};

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
.add-button {
	display: flex;
	align-items: center;
	gap: 6px;

	> img {
		filter: invert(1);
		height: 1.5em;
	}
}

.top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.25em 1em;

	font-size: 1.4em;

	img {
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
}

.priority {
	text-align: start;
	font-weight: bold;
	font-size: 14px;

	input {
		display: none;

		&:checked + label {
			background-color: currentcolor;

			span {
				color: white;
			}
		}
	}

	.options {
		display: flex;
		justify-content: space-around;
	}

	.i {
		font-weight: normal;
		font-size: 12px;
		line-height: 16px;
		border-radius: 30px;
		width: fit-content;
		height: fit-content;

		padding: 3px 10px;
		user-select: none;
		border: 2px solid;
		text-transform: capitalize;
		cursor: pointer;

		&.i1 {
			color: hsl(188, 80%, 47%);
		}
		&.i2 {
			color: hsl(218, 80%, 47%);
		}
		&.i3 {
			color: hsl(32, 100%, 67%);
		}
		&.i4 {
			color: hsl(0, 90%, 60%);
		}
	}
}
.datepicker {
	text-align: start;

	font-size: 14px;
}

.assign-to {
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: bold;
	font-size: 14px;
}
</style>
