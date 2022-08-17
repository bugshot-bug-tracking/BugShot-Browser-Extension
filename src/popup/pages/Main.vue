<template>
	<main>
		<div class="bs-container">
			<h5>Companies on this link</h5>

			<div class="selector">
				<v-select
					:options="themes"
					:placeholder="'Please choose....'"
					:get-option-label="(option) => option.displayName"
					:reduce="(option) => option.value"
					v-model="theme"
					:clearable="false"
				>
					<template #open-indicator="{ attributes }">
						<img
							class="black-to-purple"
							style="background-color: unset; cursor: pointer"
							v-bind="attributes"
							src="/assets/icons/caret_down.svg"
						/>
					</template>

					<template v-slot:option="option">
						{{ option.displayName }}
					</template>

					<template v-slot:selected-option="option">
						{{ option.displayName }}
					</template>
				</v-select>
			</div>

			<h5>Projects</h5>

			<div class="selector">
				<v-select
					:options="themes"
					:placeholder="'Please choose....'"
					:get-option-label="(option) => option.displayName"
					:reduce="(option) => option.value"
					v-model="theme"
					:clearable="false"
				>
					<template #open-indicator="{ attributes }">
						<img
							class="black-to-purple"
							style="background-color: unset; cursor: pointer"
							v-bind="attributes"
							src="/assets/icons/caret_down.svg"
						/>
					</template>

					<template v-slot:option="option">
						{{ option.displayName }}
					</template>

					<template v-slot:selected-option="option">
						{{ option.displayName }}
					</template>
				</v-select>
			</div>
		</div>

		<div class="bs-container">
			<h5>Settings</h5>

			<div class="visible" :class="{ off: !sidebar.active }">
				<p>
					Sidebar:
					<span>{{ sidebar.active ? $t("on") : $t("off") }}</span>
				</p>

				<label class="switch">
					<input
						type="checkbox"
						v-model="sidebar.active"
						@change=""
					/>

					<span class="slider round"></span>
				</label>
			</div>

			<h5 v-show="sidebar.active">Sidebar position</h5>

			<div class="position" v-show="sidebar.active">
				<div>
					<div
						class="left"
						:class="{ active: sidebar.position === 'left' }"
						@click="sidebar.changePosition('left')"
					/>

					<p>Bottom right corner</p>
				</div>

				<div>
					<div
						class="right"
						:class="{ active: sidebar.position === 'right' }"
						@click="sidebar.changePosition('right')"
					/>

					<p>Top right corner</p>
				</div>
			</div>

			<hr />

			<div class="themes">
				<p>Themes</p>

				<div class="selector">
					<v-select
						:options="themes"
						:placeholder="'Please choose....'"
						:get-option-label="(option) => option.displayName"
						:reduce="(option) => option.value"
						v-model="theme"
						:clearable="false"
						:searchable="false"
					>
						<template #open-indicator="{ attributes }">
							<img
								class="black-to-purple"
								style="background-color: unset; cursor: pointer"
								v-bind="attributes"
								src="/assets/icons/caret_down.svg"
							/>
						</template>

						<template v-slot:option="option">
							{{ option.displayName }}
						</template>

						<template v-slot:selected-option="option">
							{{ option.displayName }}
						</template>
					</v-select>
				</div>
			</div>

			<hr />

			<div class="lang">
				<LanguageSwitch />
			</div>

			<hr />

			<div
				flex
				items-center
				gap-2
				cursor-pointer
				@click="sidebar.refresh"
			>
				<img src="/assets/icons/refresh.svg" alt="refresh" />
				Refresh extension
			</div>
		</div>

		<a class="log-out" @click="logout">
			<img src="/assets/icons/logout.svg" alt="logout" />
			Log out
		</a>
	</main>

	<footer class="bs-bt" pt-2 mt-2>
		BugShot WebExtension v{{ pkg.version }}
	</footer>
</template>

<script setup lang="ts">
import pkg from "~/../package.json";
import { useAuthStore } from "~/stores/auth";

const sidebar = reactive({
	active: true,
	position: "left",
	changePosition: (value: "left" | "right") => {
		sidebar.position = value;
	},
	refresh: () => {},
});

const theme = ref(0);
const themes = [
	{
		value: 0,
		displayName: "Light mode",
	},
	{
		value: 1,
		displayName: "Dark mode",
	},
	{
		value: 2,
		displayName: "System",
	},
];
const auth = useAuthStore();

const logout = auth.logout;
</script>

<style lang="scss" scoped>
main {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

footer {
	color: #9ba5d7;
	text-align: center;
}

h5 {
	margin: 0.5rem 0;
	font-size: 0.875rem;

	&:first-of-type {
		margin-top: 0;
	}
}

p {
	font-size: 0.875rem;
}

hr {
	margin: 1rem 0;
}

div.position {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 0;

	> div {
		width: 45%;
	}

	p {
		font-size: 0.75rem;

		margin: 0.5rem 0 0 0;
	}

	.left,
	.right {
		height: 4rem;
		background: #f8f8fc;
		position: relative;
		border: 2px solid #eee5fc;
		cursor: pointer;

		&::after {
			position: absolute;
			content: "";
			width: 0;
			height: 0;
			border: 1rem solid transparent;
			border-bottom: 1rem solid black;
			bottom: -1rem;
			right: -1rem;
			transform: rotateZ(135deg);
		}

		&.active {
			border: 2px solid #18d992;
		}
	}

	.right::after {
		transform: rotateZ(45deg);
		top: -1rem;
	}
}

.visible {
	display: flex;
	align-items: center;
	justify-content: space-between;

	span {
		color: #18d992;
		font-weight: bold;
		text-transform: uppercase;
	}

	&.off {
		span {
			color: #9ba5d7;
		}
	}
}

/* The switch - the box around the slider */
.switch {
	position: relative;
	display: inline-block;
	width: 3rem;
	height: 1.5rem;

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
			height: 1.125rem;
			width: 1.125rem;
			left: 0.2rem;
			bottom: 0.2rem;
			background-color: hsl(0deg, 0%, 100%);
			transition: 0.2s;
		}

		&.round {
			border-radius: 1rem;

			&:before {
				border-radius: 100%;
			}
		}
	}

	input:checked {
		+ .slider {
			background-color: hsl(158, 80%, 47%);

			&:before {
				transform: translateX(1.5rem);
			}
		}
	}

	input:focus + .slider {
		// box-shadow: 0 0 0.125rem hsl(158, 80%, 47%);
	}
}

.log-out {
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 1.125rem;
	gap: 0.5rem;
	cursor: pointer;
	margin-bottom: 0.5rem;
}
.themes {
	display: flex;
	align-items: center;
	justify-content: space-between;

	.v-select {
		width: 10rem;
	}
}
</style>
