<template>
	<MyModal v-model="show" z-101 :close="close">
		<ModalTemplate @close="close" v-if="bug">
			<template #header-text>
				{{ $t("assign_team_member") }}
			</template>

			<div flex flex-col>
				<div class="options" v-if="list.length > 0">
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
									:size="'S'"
									:first_name="user.attributes.first_name"
									:last_name="user.attributes.last_name"
								/>

								<div>
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
							class="remove-user black-to-gray"
							alt=""
							v-if="checked"
							@click="changeUser(user, true, index)"
						/>
					</div>
				</div>

				<a class="bs-btn green add" @click="submit">
					{{ $t("add.member", 2) }}
				</a>
			</div>
		</ModalTemplate>
	</MyModal>

	<LoadingModal2
		:show="loadingModal.show"
		:state="loadingModal.state"
		:message="loadingModal.message"
		@close="
			loadingModal.clear();
			close();
		"
	/>
</template>

<script setup lang="ts">
import axios from "axios";
import { User } from "~/models/User";
import { useMainStore } from "~/stores/main";
import { useI18n } from "vue-i18n";

const emit = defineEmits(["close"]);

const props = defineProps({
	show: {
		required: true,
		type: Boolean,
		description: "Determine if the modal is visible or not",
	},

	id: {
		required: true,
		type: String,
		desc: "The bug ID",
	},
});

const close = () => {
	emit("close");
};

const store = useMainStore();

const { t } = useI18n();

const list = ref(Array<{ user: User; original: boolean; checked: boolean }>());

const bug = computed(() => {
	let bug = store.getBugById(props.id);

	if (!bug?.id) list.value = [];
	else {
		let project_users = [
			store.getProject.attributes.creator,
			...store.getProjectUsers,
		].filter((x) => x);

		list.value = [];

		project_users.forEach((user) => {
			let checked = false;
			if (bug?.users?.find((x) => x.user.id === user.id)) checked = true;

			list.value.push({
				user: user,
				original: checked, // compare checked with this to know what operation to execute (add/remove)
				checked: checked,
			});
		});
	}

	return bug;
});

const changeUser = (user: User, checked: boolean, index: number) => {
	list.value[index].checked = !checked;
};

const submit = async () => {
	if (!bug.value) return;

	try {
		loadingModal.show = true;

		for (const item of list.value) {
			// if no change was made skip over the item
			if (item.original === item.checked) continue;

			if (item.checked === true)
				await axios.post(`bugs/${bug.value.id}/assign-user`, {
					user_id: item.user.id,
				});
			else
				await axios.delete(
					`bugs/${bug.value.id}/users/${item.user.id}`
				);
		}

		await store.fetchBugUsers(props.id);

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
.add {
	align-self: end;
	margin-top: 1rem;
}

.options {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 19rem;
	margin-left: -1rem;
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
				padding-left: 0.5rem;
				padding-right: 0;
			}
		}
	}

	label {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 0.5rem;
		padding: 0.25rem 0.5rem 0.25rem 0;
		transition: 0.25s;
		cursor: pointer;
	}

	.check-state {
		width: 1.5rem;
		height: 1.5rem;
		opacity: 0;
		margin-left: -0.65rem;
		border-radius: 0.375rem;
		transition: 0.25s;
		border-right: 0.875rem solid hsl(158, 80%, 47%);
	}

	.avatar {
		color: hsl(0, 0%, 100%);
		background-color: hsl(265, 80%, 50%);
		font-size: 0.75rem;
		padding: 0.5rem;
		border-radius: 1.5rem;
		height: 2rem;
		width: 2rem;

		text-align: center;
		text-transform: uppercase;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	&:hover {
		background: hsl(158, 79%, 87%);

		label {
			padding-left: 0.5rem;
			padding-right: 0;
		}
	}
}

.remove-user {
	height: 1rem;
	width: 1rem;
	margin-right: 1rem;
	cursor: pointer;

	&:hover {
		filter: none;
	}
}
</style>
