<template>
	<LogIn />

	<Main />
</template>

<script>
import { ref } from "vue";
import LogIn from "./login/LogIn.vue";
import Main from "./main/Main.vue";

export default {
	components: { LogIn, Main },
	name: "Popup",
	setup() {
		const logged = ref(false);
		const username = ref("");
		const password = ref("");

		return {
			username,
			password,
			logged,
		};
	},
};
</script>

<style lang="scss">
body {
	background-color: hsl(230, 43%, 95%);
	width: 335px;
	height: 490px;
}
</style>
