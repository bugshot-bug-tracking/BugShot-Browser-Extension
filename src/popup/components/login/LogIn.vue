<template>
	<div class="login">
		<div class="header">
			<div class="message">Welcome to</div>
			<div class="image">
				<img src="/assets/popup/bugshot_extension_banner.svg" />
			</div>
		</div>

		<div class="body">
			<span>Please login</span>

			<form id="popup-login-form" @submit.prevent="submit">
				<div class="form-group">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						required
						v-model="email"
					/>
				</div>

				<div class="form-group">
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						minlength="8"
						required
						v-model="password"
					/>
				</div>

				<div class="from-buttons">
					<div class="form-group">
						<label>
							<input
								type="checkbox"
								name="remember"
								id="remember"
								v-model="remember"
							/>
							Remenber me
						</label>
					</div>
					<button
						id="form-submit"
						type="submit"
						class="btn btn-primary"
					>
						<span>LOG IN</span>
					</button>
				</div>
			</form>
			<div>
				<div>Email: {{ email }}</div>
				<div>Password: {{ password }}</div>
				<div>Check: {{ remember }}</div>
			</div>
		</div>

		<div class="footer">
			<div class="text">Forgot password?</div>
			<div><a href="#">Recover</a></div>
		</div>
	</div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
	name: "LogIn",
	emits: ["logged"],
	setup() {
		const email = ref("");
		const password = ref("");
		const remember = ref(false);

		const submit = () => {
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
						console.error(response.error);
						return;
					}

					if (response.message !== "ok") {
						return;
					}
				}
			);
		};

		return {
			email,
			password,
			remember,
			submit,
		};
	},
};
</script>

<style scoped lang="scss">
.login {
	width: 100%;
	height: 100%;

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 30%;
		justify-content: center;
	}

	.body {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 60%;

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
			}
		}
	}

	.footer {
		display: inline-flex;
		width: 100%;
		height: 10%;
		align-items: center;
		justify-content: center;
		border-top: 3px solid hsl(240, 100%, 95%);
	}
}
</style>
