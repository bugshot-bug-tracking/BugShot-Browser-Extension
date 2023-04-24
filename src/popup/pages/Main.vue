<template>
	<Spinner v-if="!loaded" style="height: 30em" />

	<div v-else>
		<main>
			<div class="bs-container">
				<h5>{{ t("company", 2) }}</h5>

				<div class="selector" v-if="companies.length > 0">
					<n-select
						v-model:value="main.company"
						:options="companyOptions"
						:show-checkmark="false"
						:placeholder="t('please_choose') + '....'"
						@update:value="main.changeCompany"
					/>
				</div>

				<h5>{{ t("project", 2) }}</h5>

				<div class="selector">
					<n-select
						v-model:value="main.project"
						:options="projectOptions"
						:show-checkmark="false"
						:placeholder="t('please_choose') + '....'"
						@update:value="main.changeProject"
					/>
				</div>
			</div>

			<div class="bs-container">
				<h5>{{ t("setting", 2) }}</h5>

				<div class="visible" :class="{ off: !store.sidebar }">
					<p>
						{{ t("sidebar") }}:
						<span>{{ store.sidebar ? t("on") : t("off") }}</span>
					</p>

					<label class="switch">
						<input
							type="checkbox"
							v-model="store.sidebar"
							@change="store.setSidebar"
						/>

						<span class="slider round"></span>
					</label>
				</div>

				<div class="visible" :class="{ off: !store.markers }" mt-2>
					<p>
						{{ t("markers") }}:
						<span>{{ store.markers ? t("on") : t("off") }}</span>
					</p>

					<label class="switch">
						<input
							type="checkbox"
							v-model="store.markers"
							@change="store.setMarkers"
						/>

						<span class="slider round"></span>
					</label>
				</div>

				<h5 v-show="store.sidebar">{{ t("sidebar_position") }}</h5>

				<div class="position" v-show="store.sidebar">
					<div>
						<div
							class="position"
							:class="{
								active: store.position === Position.BottomRight,
							}"
							@click="store.setPosition(Position.BottomRight)"
						/>

						<p>{{ t("bottom_right_corner") }}</p>
					</div>

					<div>
						<div
							class="position top-right"
							:class="{
								active: store.position === Position.TopRight,
							}"
							@click="store.setPosition(Position.TopRight)"
						/>

						<p>{{ t("top_right_corner") }}</p>
					</div>
				</div>

				<hr v-if="false" />

				<div class="themes" v-if="false">
					<p>{{ t("theme", 2) }}</p>

					<div class="selector">
						<!-- <v-select
							:options="themes"
							:placeholder="t('please_choose') + '....'"
							:get-option-label="(option:any) => option.name"
							:reduce="(option:any) => option.value"
							v-model="store.theme"
							:clearable="false"
							:searchable="false"
							@option:selected="store.setTheme"
						>
							<template #open-indicator="{ attributes }">
								<img
									class="black-to-purple"
									style="
										background-color: unset;
										cursor: pointer;
									"
									v-bind="attributes"
									src="/assets/icons/caret_down.svg"
								/>
							</template>

							<template v-slot:option="option">
								{{ option.name }}
							</template>

							<template v-slot:selected-option="option">
								{{ option.name }}
							</template>
						</v-select> -->
					</div>
				</div>

				<hr />

				<div class="lang">
					<LanguageSwitch @change="store.setLocale" />
				</div>
			</div>

			<a class="log-out" @click="logout">
				<img src="/assets/icons/logout.svg" alt="logout" />
				{{ t("log_out") }}
			</a>
		</main>

		<footer class="bs-bt" pt-2 mt-2>
			{{ t("bugshot_extension") }} v{{ pkg.version }}
		</footer>
	</div>
</template>

<script setup lang="ts">
import pkg from "~/../package.json";
import { useAuthStore } from "~/stores/auth";
import { useSettingsPopupStore } from "~/stores/settings-popup";
import { Position, Theme } from "~/models/settings-store";
import { useMainPopupStore } from "~/stores/mainPopup";
import { Company } from "~/models/Company";
import { SelectOption } from "naive-ui";

const emit = defineEmits(["noProjects", "error"]);

const { t } = useI18n();

let store = useSettingsPopupStore();
let main = useMainPopupStore();

const loaded = ref(false);

onMounted(async () => {
	loaded.value = false;

	try {
		await main.init();
		if (main.projects.length < 1) emit("noProjects");

		await store.init();
	} catch (error) {
		emit("error", error);
	} finally {
		loaded.value = true;
	}
});

const companies = computed(() => {
	return Array.from(main.getCompanies.values());
});

const themes = Object.keys(Theme)
	.filter((v) => isNaN(Number(v)))
	.map((x) => ({
		name: x,
		value: Theme[x as keyof typeof Theme],
	}));

const logout = async () => {
	if (store.tab?.id)
		await browser.tabs.sendMessage(store.tab.id, "logout").catch((e) => {
			console.log(e);
			return false;
		});

	await useAuthStore().logout();
};

const companyOptions = computed(
	() =>
		companies.value?.map((c) => ({
			label: c.attributes.designation,
			value: c.id,
		})) as SelectOption[]
);

const projectOptions = computed(() => {
	let v = main.getCompanyProjects(main.company)?.map((p) => ({
		label: p.attributes.designation,
		value: p.id,
	})) as SelectOption[];

	console.log(v);
	console.log(main.getCompanyProjects(main.company));

	console.log(main);

	return v;
});
</script>

<style lang="scss" scoped>
main {
	display: flex;
	flex-direction: column;
	gap: 1em;
}

footer {
	color: #9ba5d7;
	text-align: center;
}

h5 {
	margin: 0.5em 0;
	font-size: 0.875em;

	&:first-of-type {
		margin-top: 0;
	}
}

p {
	font-size: 0.875em;
}

hr {
	margin: 1em 0;
}

div.position {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5em 0;

	> div {
		width: 45%;
	}

	p {
		font-size: 0.75em;

		margin: 0.5em 0 0 0;
	}

	.position {
		height: 4em;
		background: #f8f8fc;
		position: relative;
		border: 2px solid #eee5fc;
		cursor: pointer;

		&::after {
			position: absolute;
			content: "";
			width: 0;
			height: 0;
			border: 1em solid transparent;
			border-bottom: 1em solid black;
			bottom: -1em;
			right: -1em;
			transform: rotateZ(135deg);
		}

		&.active {
			border: 2px solid #18d992;
		}
	}

	.position.top-right::after {
		transform: rotateZ(45deg);
		top: -1em;
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
	width: 3em;
	height: 1.5em;

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
			height: 1.125em;
			width: 1.125em;
			left: 0.2em;
			bottom: 0.2em;
			background-color: hsl(0deg, 0%, 100%);
			transition: 0.2s;
		}

		&.round {
			border-radius: 1em;

			&:before {
				border-radius: 100%;
			}
		}
	}

	input:checked {
		+ .slider {
			background-color: hsl(158, 80%, 47%);

			&:before {
				transform: translateX(1.5em);
			}
		}
	}

	input:focus + .slider {
		// box-shadow: 0 0 0.125em hsl(158, 80%, 47%);
	}
}

.log-out {
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 1.125em;
	gap: 0.5em;
	cursor: pointer;
	margin-bottom: 0.5em;
}
.themes {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
