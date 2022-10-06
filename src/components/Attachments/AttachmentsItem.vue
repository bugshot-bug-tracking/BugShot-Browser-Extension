<template>
	<div class="attachment-item">
		<div class="file-name">{{ name }}</div>

		<div class="controls">
			<img
				src="/assets/icons/download.svg"
				alt="download"
				v-if="download"
				@click="$emit('download', id)"
			/>
			<img
				src="/assets/icons/delete.svg"
				alt="delete"
				@click="$emit('delete', id)"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	name: {
		required: true,
		type: String,
	},
	id: {
		required: true,
		type: Number,
	},
	download: {
		required: false,
		type: Boolean,
		default: true,
	},
});

defineEmits(["download", "delete"]);
</script>

<style lang="scss" scoped>
.attachment-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1rem;
	background: transparent;
	transition: 0.3s;

	&:hover {
		background: hsl(158, 79%, 87%);
		border-radius: 0.5rem;

		.controls {
			transition: 0.3s;
			opacity: 1;
		}
	}
}

.file-name {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.controls {
	opacity: 0;
	display: inline-flex;
	gap: 0.5rem;

	img {
		width: 1.5rem;
		height: 1.5rem;
		cursor: pointer;
	}
}
</style>
