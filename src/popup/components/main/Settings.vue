<template>
	<Container class="settings" v-if="contentLoaded">
		<div class="text">Settings</div>

		<div class="grid-container">
			<div class="sidebar-toggle">
				<label class="switch">
					<input
						type="checkbox"
						v-model="checked"
						@change="toggleSidebar"
					/>
					<span class="slider round"></span>
				</label>
			</div>

			<div class="sidebar-label">
				<span> Sidebar </span>
			</div>

			<div class="btn refresh-btn" @click="refresh">
				<img src="/assets/icons/refresh.svg" />
			</div>

			<div class="refresh-label">
				<span> Refresh extension </span>
			</div>
		</div>
	</Container>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import Container from "../../../content/components/global/container/Container.vue";

export default {
	components: { Container },
	name: "Settings",
	props: {
		context: {
			type: Object,
			required: true,
		},
	},
	setup(props, context) {
		const checked = ref();
		const contentLoaded = ref(false);

		const toggleSidebar = () => {
			chrome.tabs.sendMessage(
				props.context.id,
				{
					message: "setStatus",
					payload: {
						status: checked.value,
					},
				},
				(response) => {
					console.log(response.payload);
				}
			);
		};

		const refresh = () => {
			chrome.tabs.sendMessage(props.context.id, {
				message: "refresh",
			});
		};

		onMounted(() => {
			// set sidebar visibility status
			chrome.tabs.sendMessage(
				props.context.id,
				{
					message: "getStatus",
				},
				(response) => {
					if (chrome.runtime.lastError) {
						contentLoaded.value = false;
						return;
					}

					contentLoaded.value = true;
					checked.value = response.payload.status;
				}
			);
		});

		return {
			checked,
			contentLoaded,
			refresh,
			toggleSidebar,
		};
	},
};
</script>

<style lang="scss">
.content-container.settings {
	width: 95%;
	padding: 15px;

	> .text {
		font-size: 16px;
		font-weight: 500;
	}

	.grid-container {
		display: grid;
		grid-template-columns: 0.5fr 1.5fr;
		grid-template-rows: 1fr 1fr;
		gap: 0px 8px;
		grid-auto-flow: row;
		align-items: center;
		grid-template-areas:
			"sidebar-toggle sidebar-label"
			"refresh-btn refresh-label";

		.sidebar-toggle {
			grid-area: sidebar-toggle;
			justify-self: center;
		}

		.sidebar-label {
			grid-area: sidebar-label;

			> span {
				font-size: 18px;
				font-weight: 500;
			}
		}

		.refresh-btn {
			grid-area: refresh-btn;
			justify-self: center;

			& > img {
				transition: all 0.15s ease-in-out;
			}

			&:hover > img {
				filter: invert(55%) sepia(54%) saturate(630%) hue-rotate(106deg)
					brightness(112%) contrast(90%);
				// color: #18d891;
			}
		}

		.refresh-label {
			grid-area: refresh-label;

			> span {
				font-size: 18px;
				font-weight: 500;
			}
		}
	}
}

/* The switch - the box around the slider */
.switch {
	position: relative;
	display: inline-block;
	width: 48px;
	height: 26px;

	/* Hide default HTML checkbox */
	input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: hsl(230, 43%, 89%);
		transition: 0.2s;

		&:before {
			position: absolute;
			content: "";
			height: 20px;
			width: 20px;
			left: 4px;
			bottom: 3px;
			background-color: hsl(0, 0%, 100%);
			transition: 0.2s;
		}

		&.round {
			border-radius: 20px;

			&:before {
				border-radius: 50%;
			}
		}
	}

	input:checked {
		+ .slider {
			background-color: hsl(158, 80%, 47%);

			&:before {
				transform: translateX(20px);
			}
		}
	}

	input:focus + .slider {
		box-shadow: 0 0 1px hsl(158, 80%, 47%);
	}
}
</style>
