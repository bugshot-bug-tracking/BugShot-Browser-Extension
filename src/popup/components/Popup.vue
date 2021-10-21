<template>
	<State :state="'loading'" :show="isLoading" style="z-index: 1000" />

	<div class="header" :class="logged ? `logged` : ``">
		<div v-if="logged" class="text">
			Welcome back,
			{{ user.attributes.first_name }}
			{{ user.attributes.last_name }}
			!
		</div>

		<img v-if="!logged" src="/assets/popup/bugshot_extension_banner.svg" />
	</div>

	<div class="body">
		<div class="err" v-if="error">{{ error }}</div>

		<LogIn
			v-if="!logged"
			@login="login"
			@loading="isLoading = true"
			@error="setError"
		/>

		<Main
			v-if="logged"
			:context="context"
			:user="user"
			@logout="logout"
			@loading="setLoading"
		/>
	</div>

	<div class="footer">
		<div class="text">BugShot WebExtension v1.0</div>
	</div>
</template>

<script>
import { onMounted, ref } from "vue";
import LogIn from "./login/LogIn.vue";
import Main from "./main/Main.vue";
import State from "../../content/components/global/state/State.vue";

export default {
	components: { LogIn, Main, State },
	name: "Popup",
	setup() {
		const isLoading = ref(true);
		const logged = ref(false);
		const user = ref({});
		// remember what tab you were when openig popup window
		const context = ref(null);
		const error = ref("");

		const setLoading = (value) => {
			isLoading.value = value;
		};

		const login = async () => {
			error.value = "";
			await setUser();
		};

		const logout = () => {
			logged.value = false;
			isLoading.value = false;
		};

		const setError = (value) => {
			isLoading.value = false;
			error.value = value.response.message;
		};

		const setUser = async () => {
			isLoading.value = true;
			logged.value = false;

			let response = await new Promise((resolve) => {
				chrome.runtime.sendMessage(
					{
						message: "user",
					},
					resolve
				);
			});

			isLoading.value = false;

			if (response.message === "ok") {
				logged.value = true;
				user.value = response.payload;

				return true;
			}

			return false;
		};

		onMounted(async () => {
			context.value = (
				await chrome.tabs.query({
					active: true,
					currentWindow: true,
				})
			)[0];

			await setUser();
		});

		return {
			login,
			logged,
			user,
			isLoading,
			context,
			logout,
			error,
			setError,
			setLoading,
		};
	},
};
</script>

<style lang="scss">
@import "../../content/components/global/state/Style.scss";

body {
	background-color: #f8f8fc;
	width: 335px;
	height: fit-content;
	max-height: 490px;
}

.header {
	top: 0;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100px;
	justify-content: center;
	border-bottom: 3px solid hsl(240, 100%, 95%);

	&.logged {
		height: 50px;
	}
}

.body {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 10px;

	> div {
		margin: 10px 0px;

		&:first-child {
			margin: 0 0 10px 0;
		}

		&:last-child {
			margin: 10px 0 0 0;
		}
	}
}

.footer {
	bottom: 0;
	position: relative;
	display: inline-flex;
	width: 100%;
	height: 40px;
	align-items: center;
	justify-content: center;
	border-top: 3px solid hsl(240, 100%, 95%);
}
</style>
