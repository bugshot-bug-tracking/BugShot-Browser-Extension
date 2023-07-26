<template>
	<div class="bs-container">
		<div id="info" flex flex-col>
			<div justify-between mb-2 align-start v-if="!bugData.flag1">
				<div class="title" flex>
					<div class="content">{{ bug.attributes.designation }}</div>
					<img
						w-4
						ml-2
						class="black-to-gray"
						src="/assets/icons/edit.svg"
						alt="edit"
						cursor-pointer
						@click="bugData.editDesignation"
					/>
				</div>

				<div
					class="close-button"
					@click="emit('close')"
					cursor-pointer
				/>
			</div>

			<div flex gap-4 items-center v-else>
				<input
					type="text"
					v-model="bugData.designation"
					class="w-100"
				/>

				<div class="flex gap-2 black-to-gray ms-2">
					<img
						src="/assets/icons/check.svg"
						alt="save"
						style="width: 1.5em"
						cursor-pointer
						@click="changeDesignation"
					/>

					<img
						src="/assets/icons/close_2.svg"
						alt="cancel"
						style="width: 1.5em"
						cursor-pointer
						@click="bugData.flag1 = false"
					/>
				</div>
			</div>

			<div class="id">
				<label> {{ t("id") + ":" }} </label>
				<div class="content">{{ bug.attributes.ai_id }}</div>
			</div>

			<div class="creator">
				<label>{{ t("creator") + ":" }}</label>

				<div class="content" v-if="bug.attributes.creator">
					<div class="name">
						{{
							`${bug.attributes.creator.attributes.first_name} ${bug.attributes.creator.attributes.last_name}`
						}}
					</div>

					<div class="date black-to-gray">
						{{
							"@" +
							d(
								new Date(dateFix(bug.attributes.created_at)),
								"short"
							)
						}}
					</div>
				</div>

				<div class="content" v-else>
					<div class="name">
						{{ `${bug.attributes.selector ?? t("anonymous")}` }}
					</div>

					<div class="date">
						{{
							d(
								new Date(dateFix(bug.attributes.created_at)),
								"short"
							)
						}}
					</div>
				</div>
			</div>

			<div>
				<slot name="screenshot">
					<Screenshot
						:screenshots="bug.screenshots ?? []"
						:priority="bug.attributes.priority.id"
					/>
				</slot>
			</div>

			<div class="url" v-if="bug.attributes.url">
				<label>{{ t("url") + ":" }}</label>
				<div class="content">
					<a :href="bug.attributes.url" target="_blank">
						{{ bug.attributes.url }}
					</a>
				</div>
			</div>

			<div class="description">
				<div flex justify-between mb-2>
					<label>
						{{ t("description") + ":" }}
						<img
							w-4
							ml-2
							class="black-to-gray"
							src="/assets/icons/edit.svg"
							alt="edit"
							cursor-pointer
							@click="bugData.editDescription"
							v-if="!bugData.flag2"
						/>
					</label>

					<div
						class="flex gap-2 black-to-gray ms-2"
						v-if="bugData.flag2"
					>
						<img
							src="/assets/icons/check.svg"
							alt="save"
							style="width: 1.5em"
							cursor-pointer
							@click="changeDescription"
						/>
						<img
							src="/assets/icons/close_2.svg"
							alt="cancel"
							style="width: 1.5em"
							cursor-pointer
							@click="bugData.flag2 = false"
						/>
					</div>
				</div>

				<div class="content" v-if="!bugData.flag2">
					{{ bug.attributes.description }}
				</div>

				<textarea
					v-else
					v-model="bugData.description"
					style="width: 100%"
					class="bs-scroll"
				/>
			</div>

			<div
				id="technical"
				:class="{ open: open }"
				v-if="
					bug.attributes.resolution ||
					bug.attributes.selector ||
					bug.attributes.browser ||
					bug.attributes.operating_system
				"
			>
				<div
					class="technical-label d-inline-flex justify-content-between"
					@click="open = !open"
				>
					<span>{{ t("technical_info") + ":" }}</span>
					<img src="/assets/icons/caret_down.svg" />
				</div>

				<div class="technical-info">
					<div class="os" v-if="bug.attributes.operating_system">
						<label>{{ t("os") + ":" }}</label>

						<div class="content">
							{{ bug.attributes.operating_system }}
						</div>
					</div>

					<div class="browser" v-if="bug.attributes.browser">
						<label>{{ t("browser") + ":" }}</label>

						<div class="content">{{ bug.attributes.browser }}</div>
					</div>

					<div class="selector" v-if="bug.attributes.selector">
						<label>{{ t("selector") + ":" }}</label>

						<div class="content">{{ bug.attributes.selector }}</div>
					</div>

					<div class="resolution" v-if="bug.attributes.resolution">
						<label>{{ t("resolution") + ":" }}</label>

						<div class="content">
							{{ bug.attributes.resolution }}
						</div>
					</div>
				</div>
			</div>

			<div class="grid1x2 my-3">
				<div class="grid1x2">
					<label>{{ t("priority") + ":" }}</label>

					<DropdownButton
						@select="changePriority"
						:list="priorities"
						:color="
							priorities[bug.attributes.priority.id - 1].color
						"
					>
						<template #text>
							{{
								priorities[bug.attributes.priority.id - 1].text
							}}
						</template>

						<template #item="{ item }">
							<div flex items-center gap-2>
								<div
									class="dot"
									:style="{
										background: item.color,
									}"
								/>

								{{ item.text }}
							</div>
						</template>
					</DropdownButton>
				</div>

				<div class="grid1x2 status">
					<label>{{ t("status") + ":" }}</label>

					<DropdownButton
						@select="changeStatus"
						:list="statuses"
						:text="status.attributes.designation"
					>
						<template #item="{ item }">
							{{ item.attributes.designation }}
						</template>
					</DropdownButton>
				</div>
			</div>

			<div class="deadline">
				<label>{{ t("deadline") + ":" }}</label>

				<div class="content">
					<Datepicker
						v-model="datePicker"
						:placeholder="t('no_deadline')"
						:locale="locale"
						:format="format"
						:previewFormat="format"
						@cleared="clearDeadline"
						@closed="changeDeadline"
						:selectText="t('select.select')"
						:cancelText="t('cancel')"
						:teleport="datepicker"
						:altPosition="altPosition"
					/>

					<div ref="datepicker" relative></div>
				</div>
			</div>

			<div class="assignes my-3">
				<label>{{ t("assigned_to") + ":" }}</label>

				<div class="content">
					<AssignModal
						:assignedList="store.getAssignees"
						:submit="onSubmit"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import dateFix from "~/util/dateFixISO";
import { useMainStore } from "~/stores/main";
import { useI18nStore } from "~/stores/i18n";
import { Status } from "~/models/Status.js";
import { User } from "~/models/User";
import axios from "axios";

const emit = defineEmits(["close"]);

const props = defineProps({
	bug: {
		required: true,
		type: Object,
	},
	status: {
		required: true,
		type: Object,
	},
});

const datepicker = ref(null);

const altPosition = (el: HTMLElement | undefined) => ({
	top: "1em",
	left: 0,
});

const store = useMainStore();

const { t, d } = useI18n();

const statuses = computed(() => store.getStatuses);

const priorities = computed(() => [
	{
		id: 1,
		text: t("minor"),
		color: "#18bed8",
	},
	{
		id: 2,
		text: t("normal"),
		color: "#185ed8",
	},
	{
		id: 3,
		text: t("important"),
		color: "#ffb057",
	},
	{
		id: 4,
		text: t("critical"),
		color: "#f53d3d",
	},
]);

const open = ref(false);

const datePicker = ref(dateFix(props.bug.attributes.deadline));

const bugData = reactive({
	designation: "",
	flag1: false,
	description: "",
	flag2: false,
	editDesignation: () => {
		bugData.designation = props.bug.attributes.designation;
		bugData.flag1 = true;
	},
	editDescription: () => {
		bugData.description = props.bug.attributes.description;
		bugData.flag2 = true;
	},
});

const changeDesignation = () => {
	bugData.flag1 = false;

	props.bug.attributes.designation = bugData.designation;

	store.syncBug({
		id: props.bug.id,
		changes: {
			designation: bugData.designation,
		},
	});
};

const changeDescription = () => {
	bugData.flag2 = false;

	props.bug.attributes.description = bugData.description;

	store.syncBug({
		id: props.bug.id,
		changes: {
			description: bugData.description,
		},
	});
};

const changePriority = (value: { id: number; text: string; color: string }) => {
	store.syncBug({
		id: props.bug.id,
		changes: {
			priority_id: value.id,
		},
	});
};

const changeStatus = (item: Status) => {
	store.syncBug({
		id: props.bug.id,
		changes: {
			status_id: item.id,
			order_number: 0,
		},
	});
};

const clearDeadline = () => {
	store.syncBug({
		id: props.bug.id,
		changes: {
			deadline: null,
		},
	});
};

const changeDeadline = () => {
	let newDate = datePicker.value
		? new Date(datePicker.value).toISOString()
		: null;

	if (props.bug.attributes.deadline != null) {
		let bug_deadline = props.bug.attributes.deadline;

		if (bug_deadline.match(/[z]$/i) == null) bug_deadline += "Z";

		let deadline = new Date(bug_deadline).toISOString();

		if (newDate && newDate === deadline) return;
	}

	store.syncBug({
		id: props.bug.id,
		changes: {
			deadline: newDate,
		},
	});
};

const locale = computed(() => useI18nStore().getCurrentLocale);
const format = (date: Date) => d(new Date(date).toISOString(), "short");

const onSubmit = async (
	list: { user: User; original: boolean; checked: boolean }[]
) => {
	for (const item of list) {
		// if no change was made skip over the item
		if (item.original === item.checked) continue;

		if (item.checked === true)
			await axios.post(`bugs/${store.bug?.id}/assign-user`, {
				user_id: item.user.id,
			});
		else await axios.delete(`bugs/${store.bug?.id}/users/${item.user.id}`);
	}

	await store.fetchBugUsers();
};
</script>

<style lang="scss" scoped>
#info {
	text-align: left;

	label {
		font-weight: bold;
		color: hsl(230, 40%, 20%);
		font-size: 14px;
		margin-right: 5px;
		align-self: start;
	}

	> div {
		display: inline-flex;
		flex-wrap: nowrap;
		align-items: center;
	}

	.close-button {
		background-image: url("/assets/icons/close_2.svg");
		background-repeat: no-repeat;
		background-position: center;
		width: 24px;
		height: 24px;
	}

	.title > .content {
		font-size: 20px;
		font-weight: 500;
		align-self: center;
		word-break: normal;
	}

	.id {
		font-size: 14px;
		line-height: 2em;

		> label {
			font-size: 14px;
		}
	}

	.description {
		display: block;
		text-align: left;
		word-break: normal;
	}

	#technical {
		display: block;
		border-bottom: 1px solid hsl(240, 100%, 95%);
		padding: 0.5em 0;

		img {
			transition: 0.3s;
		}

		&.open {
			img {
				transition: 0.3s;
				transform: rotate(180deg);
			}

			.technical-info {
				max-height: initial;
				transition: max-height 0.3s ease-out;
			}
		}

		.technical-info {
			max-height: 0;
			overflow: hidden;
			line-height: 1.65em;

			.content {
				color: hsl(230, 45%, 75%);
				font-size: 14px;
			}

			> div {
				width: 100%;
				display: inline-flex;
				flex-wrap: nowrap;
				align-items: center;
				justify-content: space-between;
			}

			label {
				font-weight: 500;
			}

			.selector {
				flex-direction: column;
				align-items: flex-start;
			}
		}

		.technical-label {
			display: flex;
			justify-content: space-between;
			width: 100%;
			font-size: 16px;
			font-weight: bold;
			margin-top: 0.5em;
			cursor: pointer;
		}
	}

	.creator {
		display: inline-flex;
		flex-wrap: nowrap;
		align-items: center;
		font-size: 14px;
	}

	.screenshot {
		position: relative;
		width: 100%;
		height: 170px;
		margin: 0.4em 0;
		background-color: hsl(0, 0%, 50%);
		border: 2px solid hsl(240, 100%, 95%);
		overflow: hidden;
	}

	.url {
		line-height: 2em;

		> .content {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: 14px;

			a {
				text-decoration: none;
				color: hsl(230, 45%, 75%);
			}
		}
	}

	.status {
		.content {
			text-align: center;
			padding: 2px 0px;
			color: hsl(0, 0%, 100%);
			background-color: hsl(0, 0%, 50%);
			border-radius: 30px;
			font-size: 12px;
		}
	}

	.deadline {
		> label {
			margin: auto;
			margin-right: 10px;
		}

		.content {
			color: hsl(231, 45%, 75%);
			width: 100%;
		}
	}
	.grid1x2 {
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: 1fr;
	}

	.assignes {
		label {
			min-width: 90px;
			margin-top: 6px;
		}
	}
}

input,
textarea {
	border: 1px solid hsl(264deg, 78%, 77%);
	border-radius: 0.5em;
	padding: 0.5em;
	background: white;
	resize: vertical;
	color: #1a2040;

	&:focus,
	&:focus-visible,
	&:hover {
		border-color: hsl(265, 79%, 41%);
		outline: 1px solid hsl(265, 79%, 41%);
	}

	&.error {
		border-color: red;
	}
}
</style>
