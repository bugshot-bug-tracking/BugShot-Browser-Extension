<template>
	<div class="wrapper" flex>
		<div class="people">
			<div class="item" v-for="item in list" :key="item.id">
				<Avatar
					:size="'S'"
					:first_name="item.attributes.first_name"
					:last_name="item.attributes.last_name"
					style="font-size: 0.75rem"
				/>
			</div>

			<a class="add" @click="emit('add')">
				<img src="/assets/icons/add.svg" alt="Add button" />
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	list: {
		type: Array,
		required: true,
		default: [],
	},
});

const emit = defineEmits(["add"]);
</script>

<style lang="scss" scoped>
.people {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.375em;
	flex-wrap: wrap;
}

.item {
	display: flex;
	align-items: center;
	gap: 0.5em;
}

.add {
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: 0.2s;

	img {
		width: 2em;
		height: 2em;

		// color: #18d992;
		filter: brightness(0) saturate(1) invert(63%) sepia(74%) saturate(493%)
			hue-rotate(104deg) brightness(96%) contrast(88%);
	}

	&:hover {
		img {
			// color: #7a2ee6;
			filter: brightness(0) saturate(1) invert(18%) sepia(72%)
				saturate(5384%) hue-rotate(263deg) brightness(94%) contrast(92%);
		}
	}
}
</style>
