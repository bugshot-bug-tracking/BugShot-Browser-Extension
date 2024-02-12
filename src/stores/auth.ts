import { defineStore } from "pinia";

import axios from "axios";
import { User } from "~/models/User";
import { sendMessage } from "webext-bridge";

export const useAuthStore = defineStore("auth", {
	state: () => ({
		token: "",
		user: undefined as User | undefined,
	}),

	actions: {
		async init() {
			let token = await sendMessage("getToken", {});

			let loginResponse = await this.attempt(token);

			// if a user is logged in using the Bearer token return
			if (loginResponse) return loginResponse;

			// if not try checking for guest token
			token = await sendMessage("getGuestToken", {});

			return await this.useToken({ token });
		},

		async destroy() {
			this.$reset();

			await sendMessage("invalidate", {});

			return true;
		},

		async login(payload: { email: string; password: string }) {
			try {
				let response = await axios.post("auth/login", {
					email: payload.email,
					password: payload.password,
				});

				await sendMessage("setToken", {
					token: response.data.data.token,
				});
				await sendMessage("setUser", {
					user: response.data.data.user.id,
				});

				return await this.attempt(response.data.data.token);
			} catch (error: any) {
				if (error?.response?.status === 503) throw error;

				this.token = "";
				await sendMessage("invalidate", {});

				throw error;
			}
		},

		async useToken(payload: { token: string }) {
			// no point in checking the token if it doesn't exist
			if (payload.token == null || payload.token === "") return false;

			try {
				await axios.post(
					"access-tokens/validate-access-token",
					{},
					{
						headers: {
							"access-token": payload.token,
						},
					}
				);

				axios.defaults.headers.common["access-token"] = payload.token;

				this.token = payload.token;

				await sendMessage("setGuestToken", {
					token: payload.token,
				});

				return true;
			} catch (error: any) {
				if (error?.response?.status === 503) throw error;

				this.token = "";
				await sendMessage("invalidate", {});

				throw error;
			}
		},

		async saveGuestUser(payload: { name?: string; email?: string }) {
			try {
				await sendMessage("setGuestUser", {
					name: payload.name,
					email: payload.email,
				});

				return true;
			} catch (error: any) {
				throw error;
			}
		},

		async getGuestUser() {
			try {
				let response = await sendMessage("getGuestUser", {});

				return response;
			} catch (error: any) {
				throw error;
			}
		},

		async logout() {
			return (
				axios
					.post("auth/logout")
					// 2xx
					.then((response) => {
						this.destroy();
						return true;
					})
					// 4xx, 5xx
					.catch((error) => {
						//? needs a verification why the error happened if it will happen
						//? 5xx may be a possibility of when you arrive in this block
						console.log(error);
						return false;
					})
			);
		},

		// validate token by setting the user
		async attempt(token: string) {
			// no point in checking the token if it doesn't exist
			if (token == null || token === "") return false;

			axios.defaults.headers.common["Authorization"] = "Bearer " + token;

			try {
				// test if the token is still valid
				let response = await axios.get("auth/user");

				//if it is set the user and token
				this.user = response.data.data;
				this.token = token;

				return true;
			} catch (error: any) {
				if (error?.response?.status === 503) throw error;

				//if the token is invalid or it expired set the token from storage to null
				this.destroy();
				axios.defaults.headers.common["Authorization"] = "";

				throw error;
			}
		},
	},

	getters: {
		getUser: (state) => state.user,
		isAuthenticated: (state) => (state.token !== "" ? true : false),
		isGuest: (state) =>
			state.token !== "" && state.user?.id == undefined ? true : false,
	},
});
