<template>
	<div :class="{ active: active.value }">
		<h4 class="bs-bb" @click="active.toggle">
			{{ header }}
			<img src="/assets/icons/arrow_down.svg" alt="arrow" />
		</h4>

		<ol>
			<li v-for="(item, index) in list" :key="index">
				<slot name="item" v-bind="{ item, index }">
					<p>{{ item + "" + index }}</p>
				</slot>
			</li>
		</ol>
	</div>
</template>

<script setup lang="ts">
defineProps({
	header: {
		required: true,
		type: String,
	},
	list: {
		required: true,
		type: Array,
	},
});

const active = reactive({
	value: false,
	toggle: () => {
		active.value = !active.value;
	},
});
</script>

<style lang="scss" scoped>
ol {
	display: none;
	flex-direction: column;
	align-items: stretch;
	gap: 1em;
	margin: 1em 0;
}

div.active {
	h4 img {
		transform: rotate(180deg);
	}

	ol {
		display: flex;
	}
}

h4 {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.25em;
	margin: unset;
	cursor: pointer;
	user-select: none;
}
</style>
