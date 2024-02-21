<template>
	<Spinner v-if="loading" overlay />

	<header>
		<p my-2>{{ t("welcome_to") }}</p>

		<img src="/assets/images/bugshot_extension_banner.svg" alt="banner" />
	</header>

	<main pt-4>
		<div flex flex-1 gap-4 items-center justify-center my-4>
			<n-button
				text
				:style="
					mode === 'email'
						? {
								color: 'var(--bs-purple)',
								'text-decoration': 'underline',
								'text-underline-offset': '4px',
						  }
						: {
								color: 'var(--bs-gray)',
						  }
				"
				class="text-6 font-bold!"
				@click="mode = 'email'"
			>
				{{ t("email") }}
			</n-button>

			<n-text strong style="color: var(--bs-gray)">|</n-text>

			<n-button
				text
				:style="
					mode === 'token'
						? {
								color: 'var(--bs-purple)',
								'text-decoration': 'underline',
								'text-underline-offset': '4px',
						  }
						: {
								color: 'var(--bs-gray)',
						  }
				"
				class="text-6 font-bold!"
				@click="mode = 'token'"
			>
				{{ t("login_page.guest.guest_access") }}
			</n-button>
		</div>

		<form class="bs-form" @submit.prevent="submit" v-if="mode === 'email'">
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
				style="font-size: 0.875em"
				v-if="password.error"
			>
				{{ password.errorMessage }}
			</span>

			<div class="form-buttons justify-between!">
				<label select-none cursor-pointer>
					<input type="checkbox" style="filter: hue-rotate(40deg)" />
					{{ t("remember_me") }}
				</label>

				<button class="bs-btn green" type="submit">
					{{ t("log_in") }}
				</button>
			</div>
		</form>

		<form v-else class="bs-form" @submit.prevent="submit">
			<div class="bs-input">
				<label flex justify-between>
					{{ t("token") }}
				</label>

				<input
					id="token"
					type="text"
					name="token"
					class="!pr-12"
					required
					v-model="token"
					@focus="tokenErrorMessage = undefined"
				/>

				<img
					src="/assets/icons/token.svg"
					alt="email"
					class="input-image"
				/>
			</div>

			<div class="bs-input">
				<label class="flex justify-start! gap-4">
					{{ `${t("login_page.guest.display_name")} (Optional)` }}
					<InfoPopover :message="t('login_page.guest.name_info')" />
				</label>

				<input
					id="token-name"
					type="text"
					name="token-name"
					class="!pr-12"
					v-model="token_name"
				/>

				<img
					src="/assets/icons/user.svg"
					alt="name"
					class="input-image"
				/>
			</div>

			<div class="bs-input">
				<label class="flex justify-start! gap-4">
					{{ `${t("email")} (Optional)` }}
					<InfoPopover :message="t('login_page.guest.email_info')" />
				</label>

				<input
					id="token-email"
					type="text"
					name="token-email"
					class="!pr-12"
					v-model="token_email"
				/>

				<img
					src="/assets/icons/mail.svg"
					alt="name"
					class="input-image"
				/>
			</div>

			<span
				text-red
				text-end
				mt--3
				style="font-size: 0.875em"
				v-if="tokenErrorMessage"
			>
				{{ tokenErrorMessage }}
			</span>

			<div class="form-buttons">
				<button class="bs-btn green" type="submit">
					{{ t("log_in") }}
				</button>
			</div>
		</form>
	</main>

	<footer class="bs-bt" mt-2>
		<div
			class="bs-bb"
			p-5
			text-center
			style="font-size: 0.875em"
			v-if="mode === 'email'"
		>
			{{ t("forgot_password") }}?
			<a
				href="https://dev.bugshot.de/auth/forgot"
				target="_blank"
				style="color: var(--bs-purple)"
				cursor-pointer
			>
				{{ t("recover") }}
			</a>
		</div>

		<LanguageSwitch p-2 />
	</footer>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";
import { useMainPopupStore } from "~/stores/mainPopup";

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

		if (mode.value === "token") {
			await store.useToken({
				token: token.value,
			});

			await store.saveGuestUser({
				name: token_name.value,
				email: token_email.value,
			});
		} else {
			await store.login({
				email: email.value,
				password: password.value,
			});
		}

		let tab = await useMainPopupStore().getActiveTab();
		if (tab?.id != undefined)
			await browser.tabs.sendMessage(tab.id, "login").catch((e) => {
				console.log(e);
				return false;
			});
	} catch (error: any) {
		console.log(error);

		if (mode.value === "token")
			return (tokenErrorMessage.value = error.response.data.message);

		password.error = true;

		if (error?.response?.status === 503)
			password.errorMessage = t("down_for_maintenance");
		else password.errorMessage = error.response.data.message;
	} finally {
		loading.value = false;
	}
};

const loading = ref(false);

const mode = ref<"email" | "token">("email");

const token = ref("");
const token_name = ref("");
const token_email = ref("");
const tokenErrorMessage = ref<string | undefined>(undefined);
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
</style>
