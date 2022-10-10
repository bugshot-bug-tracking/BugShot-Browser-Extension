<template>
	<div class="title">Please login</div>

	<form id="popup-login-form" @submit.prevent="submit">
		<div class="form-group">
			<input
				id="email"
				type="email"
				name="email"
				class="field"
				placeholder="Email"
				required
				v-model="email"
			/>
			<img class="email-img" src="/assets/icons/at@.svg" />
		</div>

		<div class="form-group">
			<input
				id="password"
				:type="passwordType"
				name="password"
				class="field"
				placeholder="Password"
				minlength="8"
				required
				v-model="password"
			/>
			<img
				class="password-img"
				v-if="showPassword"
				@click="togglePassword"
				src="/assets/icons/hide_password.svg"
			/>
			<img
				class="password-img"
				v-if="!showPassword"
				@click="togglePassword"
				src="/assets/icons/show_password.svg"
			/>
		</div>

		<div class="from-buttons">
			<label>
				<input
					type="checkbox"
					name="remember"
					id="remember"
					v-model="remember"
				/>
				Remember me
			</label>

			<button id="form-submit" type="submit" class="btn btn-primary">
				<span>LOG IN</span>
			</button>
		</div>
	</form>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
	name: "LogIn",
	emits: ["login", "loading", "error"],
	setup(props, context) {
		const email = ref("");
		const password = ref("");
		const remember = ref(false);
		const showPassword = ref(false);
		const passwordType = ref("password");

		const togglePassword = () => {
			showPassword.value = !showPassword.value;
			if (showPassword.value) passwordType.value = "text";
			else passwordType.value = "password";
		};
		const submit = () => {
			context.emit("loading");

			chrome.runtime.sendMessage(
				{
					message: "login",
					payload: {
						email: email.value,
						password: password.value,
						remember: remember.value,
					},
				},
				(response) => {
					console.log(response);

					if (response.message === "error") {
						context.emit("error", response.error);

						return;
					}

					if (response.message !== "ok") {
						return;
					}

					context.emit("login");
				}
			);
		};

		return {
			email,
			password,
			remember,
			showPassword,
			passwordType,
			submit,
			togglePassword,
		};
	},
};
</script>

<style scoped lang="scss">
.title {
	margin: 2% 0 5% 0 !important;
	color: hsl(265, 79%, 41%);
	font-weight: 700;
	font-size: 22px;
}

#popup-login-form {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.from-buttons {
		display: inline-flex;
		align-items: baseline;
		width: 100%;
		justify-content: space-evenly;
		margin-bottom: 10px;

		#form-submit {
			background: hsl(158, 80%, 47%) 0% 0% no-repeat padding-box;
			border-radius: 20px;
			border-color: hsl(158, 80%, 47%);
			padding: 8px 20px;
			font-weight: 500;
		}

		#remember {
			filter: hue-rotate(40deg);
		}
	}

	.form-group {
		width: 95%;
		display: flex;
		position: relative;
		align-items: center;
	}

	.field {
		border: 1px solid hsl(264, 78%, 77%);
		border-radius: 8px;
		margin: 16px 0;
		width: 100%;
		padding: 10px;
		padding-right: 40px;

		&:focus,
		&:focus-visible,
		&:hover {
			border-color: hsl(265, 79%, 41%);
			outline-color: hsl(265, 79%, 41%);
		}
	}

	.email-img {
		width: 20px;
	}

	#password {
		&::-ms-reveal,
		&::-ms-clear {
			display: none;
		}
	}

	.email-img,
	.password-img {
		position: absolute;
		width: 22px;
		right: 12px;
	}
}
</style>
