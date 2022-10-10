<template>
	<main>
		<section>
			<img src="/assets/animations/error_bug_purple.gif" />

			<h1 class="black-to-red" m-2>{{ t("error") + "!" }}</h1>
			<p>{{ t("refresh_the_page") }}</p>
		</section>

		<a class="log-out" @click="logout">
			<img src="/assets/icons/logout.svg" alt="logout" />
			{{ t("log_out") }}
		</a>
	</main>

	<footer class="bs-bt" pt-2 mt-2>
		{{ t("bugshot_extension") }} v{{ pkg.version }}
	</footer>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import pkg from "~/../package.json";
import { useAuthStore } from "~/stores/auth";

const { t } = useI18n();

const logout = useAuthStore().logout;
</script>

<style lang="scss" scoped>
main {
	display: flex;
	flex-direction: column;
	gap: 1em;

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1em;
	}

	img {
		max-width: 75%;
	}
}

footer {
	color: #9ba5d7;
	text-align: center;
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
</style>
