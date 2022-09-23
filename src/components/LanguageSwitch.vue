<template>
	<div>
		<p>{{ t("language") }}:</p>

		<ul>
			<li
				v-for="loc of availableLocales"
				:key="loc"
				:class="{ active: locale === loc }"
				@click="change(loc)"
			>
				{{ loc }}
			</li>

			<li
				style="text-transform: lowercase"
				:class="{ active: locale === 'auto' }"
				@click="change('auto')"
			>
				[auto]
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { useI18nStore } from "~/stores/i18n";

const store = useI18nStore();

const { t } = useI18n();

const locale = computed(() => store.getLocale);
const availableLocales = computed(() => store.getSupportedLocales);

const change = (value: string) => {
	store.setLocale(value);
};
</script>

<style lang="scss" scoped>
div {
	display: flex;
	justify-content: space-between;
}

ul {
	list-style: none;
	margin: unset;
	padding: unset;
	display: flex;
	gap: 1rem;
}

li {
	color: #9ba5d7;
	text-transform: uppercase;
	font-weight: bold;
	cursor: pointer;

	&.active {
		color: #18d992;
	}
}
</style>
