<template>
	<Spinner v-if="loading" overlay />

	<header>
		<p my-2>{{ t("welcome_to") }}</p>

		<img src="/assets/images/bugshot_extension_banner.svg" alt="banner" />
	</header>

	<main pt-4>
		<h2 style="color: #5916b9" text-center>{{ t("please_login") }}</h2>

		<form class="bs-form" @submit.prevent="submit">
			<div class="bs-input">
				<label flex justify-between>
					{{ t("email") }}
				</label>

				<input
					id="email"
					type="email"
					name="email"
					:placeholder="t('email')"
					class="!pr-12"
					required
					autocomplete="email"
					v-model="email"
				/>

				<img
					src="/assets/icons/mail.svg"
					alt="email"
					class="input-image"
				/>
			</div>

			<div class="bs-input">
				<label flex justify-between>
					{{ t("password") }}
				</label>

				<input
					id="password"
					name="password"
					v-model="password.value"
					:placeholder="t('password')"
					:type="password.show ? 'text' : 'password'"
					autocomplete="current-password"
					required
					minlength="8"
					maxlength="255"
					class="!pr-12"
					:class="{ error: password.error }"
					@focus.prevent="password.clear"
				/>

				<img
					v-show="password.show"
					src="/assets/icons/password_view.svg"
					alt="hide"
					class="input-image"
					cursor-pointer
					@click="password.toggle"
				/>

				<img
					v-show="!password.show"
					src="/assets/icons/password_hide.svg"
					alt="show"
					class="input-image"
					cursor-pointer
					@click="password.toggle"
				/>
			</div>

			<span
				text-red
				text-end
				mt--3
				style="font-size: 0.875rem"
				v-if="password.error"
			>
				{{ password.errorMessage }}
			</span>

			<div class="form-buttons" justify-between>
				<label select-none cursor-pointer>
					<input type="checkbox" style="filter: hue-rotate(40deg)" />
					{{ t("remember_me") }}
				</label>

				<button class="bs-btn green" type="submit">
					{{ t("log_in") }}
				</button>
			</div>
		</form>
	</main>

	<footer class="bs-bt">
		<div class="bs-bb" p-5 text-center style="font-size: 0.875rem">
			{{ t("forgot_password") }}?
			<a
				href="https://dev.bugshot.de/auth/forgot"
				target="_blank"
				style="color: #5916b9"
				cursor-pointer
			>
				{{ t("recover") }}
			</a>
		</div>

		<LanguageSwitch p-2 />
	</footer>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useAuthStore } from "~/stores/auth";

const { t } = useI18n();
const store = useAuthStore();

const email = ref("");

const password = reactive({
	value: "",
	show: false,
	error: false,
	errorMessage: "",
	toggle: () => {
		password.show = !password.show;
	},
	clear: () => {
		password.error = false;
		password.errorMessage = "";
	},
});

const submit = async () => {
	try {
		loading.value = true;

		await store.login({
			email: email.value,
			password: password.value,
		});
	} catch (error: Error) {
		console.log(error);
		password.error = true;
		password.errorMessage = error.response.data.message;
	} finally {
		loading.value = false;
	}
};

const loading = ref(false);
</script>

<style lang="scss" scoped>
header {
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 75%;
	}
}

.form-buttons {
	justify-content: space-between !important;
}
</style>
