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
		width: 2rem;
		height: 2rem;
		font-size: 0.75rem;
	}

	&.S {
		width: 2.5rem;
		height: 2.5rem;
		font-size: 1rem;
	}

	//WIP no use found yet
	&.M {
		width: 3.5rem;
		height: 3.5rem;
		font-size: 1.25rem;
	}

	//WIP no use found yet
	&.L {
		width: 4.5rem;
		height: 4.5rem;
		font-size: 2rem;
	}

	&.XL {
		width: 9rem;
		height: 9rem;
		font-size: 4rem;
	}
}

.initials {
	text-transform: uppercase;
	color: white;
	padding: 0.5rem;
}
</style>
