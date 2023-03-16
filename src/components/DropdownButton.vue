<template>
	<div class="bs-btn-dropdown" ref="root">
		<div @click="active.toggle">
			<a
				:style="{
					background: color,
					cursor: dumb ? 'unset' : 'pointer',
				}"
				:class="{ open: active.value }"
			>
				<slot name="text">{{ text }}</slot>
			</a>
			<img
				v-if="!dumb"
				w-3
				ml-1
				class="black-to-gray"
				src="/assets/icons/edit.svg"
				alt="edit"
				cursor-pointer
			/>
		</div>

		<div
			v-if="!dumb"
			class="dropdown-container"
			:class="{ open: active.value }"
		>
			<div class="dropdown-wrapper bs-scroll">
				<p p-4 v-if="list.length < 1">{{ t("empty") }}</p>

				<ul v-else>
					<li
						v-for="[index, item] of list.entries()"
						:key="index"
						@click="emitSelect(item)"
					>
						<slot name="item" v-bind="{ item }">
							{{ item }}
						</slot>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	text: {
		type: String,
		required: false,
		default: "[PH]Text",
		description: "Button text",
	},

	list: {
		type: Array,
		required: false,
		default: [],
		description: "List of options",
	},

	color: {
		type: String,
		required: false,
		default: "#9ba5d7",
		description: "The color of the button",
	},

	dumb: {
		type: Boolean,
		required: false,
		default: false,
		desctiption: "Switch for enabling dropdown menu",
	},
});

const emit = defineEmits<{
	(event: "select", item: any): void;
}>();

const { t } = useI18n();

const emitSelect = (item: any) => {
	emit("select", item);
	active.value = false;
};

const active = reactive({
	value: false,
	toggle: () => {
		if (props.dumb) return;

		active.value = !active.value;
	},
});

//#region AutoClose
const root = ref(null);

const autoClose = (event: MouseEvent) => {
	// event.path for chromium but composedPath is the standard method (ex. firefox)
	let path: EventTarget[] = event.composedPath && event.composedPath();

	// if clicking outside of this root close the popup
	if (path.find((element) => element == root.value) == null) {
		active.value = false;
	}
};
//#end

if (!props.dumb) {
	addEventListener("click", autoClose);

	onUnmounted(() => {
		document.removeEventListener("click", autoClose);
	});
}
</script>

<style lang="scss" scoped>
.bs-btn-dropdown {
	position: relative;
	z-index: 1;
	user-select: none;

	a {
		font-size: 0.75em;
		padding: 0.25em 0.5em;
		border-radius: 1em;
		background: #9ba5d7;
		cursor: pointer;
		color: white;

		&:hover {
			color: white;
		}

		&.open::after {
			content: "";
			position: absolute;
			top: 2em;
			left: 1em;
			width: 1.25em;
			height: 1.25em;
			transform: rotate(45deg);
			background-color: #eee5fc;
			border: 1px solid #eee5fc;
		}
	}

	.dropdown-container {
		position: absolute;
		top: 2em;
		right: 0;
		background-color: #eee5fc;
		max-width: 10em;

		border: 1px solid #eee5fc;
		display: none;

		&.open {
			display: block;
		}

		.dropdown-wrapper {
			position: relative;
			background-color: white;
			scrollbar-gutter: auto;
			max-height: 8.5em;

			ul {
				margin: unset;
				list-style: none;
				padding: unset;

				li {
					padding: 0.25em 1.5em 0.25em 1em;
					transition: 0.2s;
					cursor: pointer;

					&.active,
					&:hover {
						background-color: hsl(158, 79%, 87%);
						padding: 00.25em 1em 00.25em 1.5em;
					}
				}
			}
		}
	}
}

.container {
	display: flex;
	flex-direction: column;

	position: absolute;
	z-index: 1;
	background-color: hsl(240, 40%, 98%);
	top: 200%;
	left: -50%;

	width: 100px;
	align-items: center;
	justify-content: space-evenly;

	border-radius: 8px;
	padding: 0;
	text-align: center;
	color: #1a2040;

	box-shadow: 0px 8px 10px hsla(232, 41%, 18%, 0.2);
	border: 1px solid #e6e6ff;
	user-select: none;

	> * {
		border-bottom: 1px solid #e6e6ff;
		width: 100%;
		padding: 8px;
	}

	&::before {
		content: "";
		position: absolute;
		top: -10px;
		z-index: -1;
		width: 20px;
		height: 20px;
		transform: rotate(45deg);

		background-color: hsl(240, 40%, 98%);

		border: 1px solid #e6e6ff;
	}

	.i {
		font-weight: bold;
		background-color: hsl(240, 40%, 98%);

		&:first-child {
			border-radius: 8px 8px 0 0;
		}

		&:last-child {
			border-radius: 0 0 8px 8px;
		}

		&.i4 {
			color: hsl(0, 90%, 60%);

			&:hover {
				background-color: hsl(0, 90%, 60%);
				color: #ffffff;
			}
		}
		&.i3 {
			color: hsl(32, 100%, 67%);

			&:hover {
				background-color: hsl(32, 100%, 67%);
				color: #ffffff;
			}
		}
		&.i2 {
			color: hsl(218, 80%, 47%);

			&:hover {
				background-color: hsl(218, 80%, 47%);
				color: #ffffff;
			}
		}
		&.i1 {
			color: hsl(188, 80%, 47%);

			&:hover {
				background-color: hsl(188, 80%, 47%);
				color: #ffffff;
			}
		}
	}
}
</style>
