<template>
	<div flex items-center justify-start gap-2 flex-wrap>
		<Avatar
			v-for="item in assignedList"
			:key="item.id"
			:size="'XS'"
			:first_name="item.attributes.first_name"
			:last_name="item.attributes.last_name"
		/>

		<a
			class="bs-btn"
			style="padding: 0"
			@click="modal.open"
			v-if="!disableAdd"
		>
			<img
				src="/assets/icons/add.svg"
				alt="close"
				w-8
				h-8
				class="black-to-green"
				vertical-middle
			/>
		</a>
	</div>

	<MyModal v-model="modal.show" :close="modal.close" z-10000>
		<ModalTemplate @close="modal.close" style="min-width: 22rem">
			<template #header-text>
				{{ t("assign_team_member") }}
			</template>

			<template #content>
				<div class="options" mt-4>
					<div
						class="item"
						v-for="[index, { user, checked }] of list.entries()"
						:key="user.id"
					>
						<div flex items-center>
							<input
								type="checkbox"
								:id="'cp' + user.id"
								:value="user.id"
								:checked="checked"
								@change="changeUser(user, checked, index)"
							/>

							<div class="check-state" />

							<label :for="'cp' + user.id" class="lab">
								<Avatar
									:size="'XS'"
									:first_name="user.attributes.first_name"
									:last_name="user.attributes.last_name"
								/>
								<div class="name">
									{{
										user.attributes.first_name +
										" " +
										user.attributes.last_name
									}}
								</div>
							</label>
						</div>

						<img
							src="/assets/icons/close_2.svg"
							alt="close"
							w-4
							h-4
							class="black-to-gray"
							v-if="checked"
							@click="changeUser(user, true, index)"
							mr-4
							cursor-pointer
						/>
					</div>
				</div>
			</template>

			<template #footer>
				<div flex justify-end mt-4>
					<a class="bs-btn green" @click="submit" ml-a>
						{{ t("save") }}
					</a>
				</div>
			</template>
		</ModalTemplate>
	</MyModal>

	<LoadingModal2
		:show="loadingModal.show"
		:state="loadingModal.state"
		:message="loadingModal.message"
		@close="
			loadingModal.clear();
			modal.close();
		"
		:z_index="10000"
	/>
</template>

<script setup lang="ts">
import { User } from "~/models/User";
import { useMainStore } from "~/stores/main";

const props = defineProps({
	assignedList: {
		type: Array as PropType<User[]>,
		required: true,
		default: [],
	},

	disableAdd: {
		type: Boolean,
		required: false,
		default: false,
	},

	submit: {
		type: Function,
		required: false,
		default: undefined,
	},
});

const emit = defineEmits(["submit"]);

const { t } = useI18n();

const modal = reactive({
	show: false,
	open: () => {
		list.value = [];

		useMainStore().getProjectUsers?.forEach((user) => {
			let checked = false;
			if (props.assignedList.some((x) => x.id === user?.id))
				checked = true;

			list.value.push({
				user: user!,
				original: checked, // compare checked with this to know what operation to execute (add/remove)
				checked: checked,
			});
		});

		modal.show = true;
	},
	close: () => {
		modal.show = false;
	},
});

const list = ref<{ user: User; original: boolean; checked: boolean }[]>([]);

const changeUser = (user: User, checked: boolean, index: number) => {
	list.value[index].checked = !checked;
};

const submit = async () => {
	if (!props.submit) {
		emit("submit", list.value);
		return modal.close();
	}

	try {
		loadingModal.show = true;

		await props.submit(list.value);

		loadingModal.state = 1;
		loadingModal.message = t("members_updated");
	} catch (error) {
		loadingModal.state = 2;
		loadingModal.message = "";

		console.log(error);
	}
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
.options {
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	width: calc(100% + 2em);
	margin-left: -1em;
	margin-right: -1em;
}

.item {
	display: flex;
	justify-content: space-between;
	position: relative;
	align-items: center;
	width: 100%;

	&.checked {
		background: hsl(158, 79%, 87%);
	}

	input[type="checkbox"] {
		display: none;

		&:checked {
			& ~ .check-state {
				opacity: 1;
			}

			& ~ label {
				padding-left: 0.5em;
				padding-right: 0;
			}
		}
	}

	label {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 0.5em;
		padding: 0.25em 0.5em 0.25em 0;
		transition: 0.25s;
		cursor: pointer;
	}

	.check-state {
		width: 1.5em;
		height: 1.5em;
		opacity: 0;
		margin-left: -0.65em;
		border-radius: 0.375em;
		transition: 0.25s;
		border-right: 0.875em solid hsl(158, 80%, 47%);
	}

	&:hover {
		background: hsl(158, 79%, 87%);

		label {
			padding-left: 0.5em;
			padding-right: 0;
		}
	}
}
</style>
