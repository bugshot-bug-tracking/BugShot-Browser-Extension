<template>
	<div class="dropdown" v-if="options">
		<!-- Dropdown Input -->
		<label class="input-label">
			<img src="/assets/icons/caret-down-fill.svg" alt="" />
			<input
				class="dropdown-input"
				@focus="showOptions()"
				@blur="exit()"
				v-model="searchFilter"
				:disabled="disabled"
				:placeholder="placeholder"
			/>
		</label>

		<!-- Dropdown Menu -->
		<div class="dropdown-content" v-if="optionsShow">
			<div
				class="dropdown-item"
				@mousedown="selectOption(option)"
				v-for="(option, index) in filteredOptions"
				:key="index"
			>
				<div class="item-wrap">
					<div class="company">
						{{
							option.project.attributes.company.designation ||
							option.project.attributes.company.id ||
							"-"
						}}
					</div>

					<div class="project">
						{{
							option.project.attributes.designation ||
							option.project.id ||
							"-"
						}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
export default {
	name: "Dropdown",
	props: {
		options: {
			type: Array,
			required: true,
			default: [],
			note: "Options of dropdown. An array of options with id and name",
		},
		placeholder: {
			type: String,
			required: false,
			default: "Please select an option",
			note: "Placeholder of dropdown",
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false,
			note: "Disable the dropdown",
		},
		default: {
			type: Number,
			required: false,
			default: -1,
			note: "The project(id) to show when mounted",
		},
	},
	emits: ["selected"],
	setup(props, context) {
		const selected = ref({});
		const optionsShow = ref(false);
		const searchFilter = ref("");

		const filteredOptions = computed(() => {
			const filtered = [];
			const regOption = new RegExp(searchFilter.value, "ig");

			// if filter is empty return the whole list
			if (searchFilter.value.length < 1) return props.options;

			// if not show only the options that contain the specified characters
			for (const option of props.options) {
				if (
					option.project.attributes.designation.match(regOption) ||
					option.project.attributes.company.designation.match(
						regOption
					)
				)
					filtered.push(option);
			}
			return filtered;
		});

		const showOptions = () => {
			if (!props.disabled) {
				searchFilter.value = "";
				optionsShow.value = true;
			}
		};

		const selectOption = (option) => {
			selected.value = option;
			optionsShow.value = false;
			searchFilter.value = `${
				option.project.attributes.company.designation ||
				option.project.attributes.company.id ||
				"-"
			} | ${
				option.project.attributes.designation ||
				option.project.id ||
				"-"
			}`;

			context.emit("selected", selected.value.project.id);
		};

		const exit = () => {
			if (!selected.value.project.id) {
				selected.value = {};
				searchFilter.value = "";
			} else {
				searchFilter.value = `${
					selected.value.project.attributes.company.designation ||
					selected.value.project.attributes.company.id ||
					"-"
				} | ${
					selected.value.project.attributes.designation ||
					selected.value.project.id ||
					"-"
				}`;
			}

			optionsShow.value = false;
		};

		if (props.default !== -1) {
			for (const option of props.options) {
				if (option.project.id === props.default) {
					selected.value = option;
					searchFilter.value = `${
						selected.value.project.attributes.company.designation ||
						selected.value.project.attributes.company.id ||
						"-"
					} | ${
						selected.value.project.attributes.designation ||
						selected.value.project.id ||
						"-"
					}`;
					break;
				}
			}
		}

		return {
			selected,
			optionsShow,
			searchFilter,
			filteredOptions,
			selectOption,
			showOptions,
			exit,
		};
	},
};
</script>

<style lang="scss" scoped>
.dropdown {
	position: relative;
	display: block;
	margin: auto;

	.input-label {
		width: 100%;
		display: flex;
		align-items: center;

		> img {
			position: absolute;
			right: 10px;
			width: 14px;
		}
	}

	.dropdown-input {
		background: #fff;
		cursor: pointer;
		border: 1px solid #e7ecf5;
		border-radius: 3px;
		color: #333;
		display: block;
		font-size: 0.8em;
		padding: 6px;
		min-width: 250px;
		width: 100%;
		border: 1px solid #eee5fc;
		border-radius: 8px;

		&:hover {
			background: #f8f8fa;
		}
	}

	.dropdown-content {
		position: absolute;
		background-color: #fff;
		min-width: 248px;
		overflow: auto;
		z-index: 1;
		width: 96%;
		left: 2%;
		border: 1px solid #eee5fc;
		border-radius: 8px;
		max-height: 140px;
		padding: 8px 0px 8px 8px;
		box-shadow: hsla(0, 0%, 0%, 0.35) 0px 10px 20px 0px;

		.dropdown-item {
			color: black;
			font-size: 0.8em;
			line-height: 1em;
			padding: 8px;
			text-decoration: none;
			display: block;
			cursor: pointer;
			border-bottom: 1px solid #eee5fc;
			margin-bottom: 6px;
			width: 95%;

			&:hover {
				background-color: #e7ecf5;
			}
		}
	}

	.dropdown:hover .dropdowncontent {
		display: block;
	}
}

.item-wrap {
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 0.6fr 1fr;
	gap: 0 6px;

	.company {
		border-right: 2px solid #eee5fc;
	}
}
</style>
