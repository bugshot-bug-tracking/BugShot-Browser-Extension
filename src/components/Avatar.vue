<template>
	<div class="avatar" :class="size">
		<div class="wrapper" :style="{ background: background_color }">
			<div class="initials" v-if="image === ''">
				{{ first_name[0] + last_name[0] }}
			</div>

			<div class="image" v-else></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import colors from "~/util/colors";

const props = defineProps({
	first_name: {
		required: true,
		type: String,
	},

	last_name: {
		required: true,
		type: String,
	},

	image: {
		required: false,
		type: String,
		default: "",
	},

	size: {
		required: false,
		type: String,
		validator: (value: string) =>
			["XS", "S", "M", "L", "XL"].includes(value),
		default: "S",
	},

	color: {
		required: false,
		type: String,
		default: null,
	},
});

const background_color = computed(() => {
	return (
		props.color ??
		colors[
			(props.first_name.toUpperCase().charCodeAt(0) +
				props.last_name.toUpperCase().charCodeAt(0)) %
				7
		]
	);
});
</script>

<style lang="scss" scoped>
.avatar {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;

	.wrapper {
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	&.XS {
		width: 2em;
		height: 2em;
		font-size: 0.75em;
	}

	&.S {
		width: 2.5em;
		height: 2.5em;
		font-size: 1em;
	}

	//WIP no use found yet
	&.M {
		width: 3.5em;
		height: 3.5em;
		font-size: 1.25em;
	}

	//WIP no use found yet
	&.L {
		width: 4.5em;
		height: 4.5em;
		font-size: 2em;
	}

	&.XL {
		width: 9em;
		height: 9em;
		font-size: 4em;
	}
}

.initials {
	text-transform: uppercase;
	color: white;
	padding: 0.5em;
}
</style>
