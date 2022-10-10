<template>
	<ul v-if="show">
		<li v-for="bug in filteredList" :key="bug.id">
			<ul v-if="bug.attributes.markers.length > 0">
				<li v-for="marker in bug.attributes.markers" :key="marker.id">
					<Marker
						:text="bug.attributes.designation"
						:priority="bug.attributes.priority_id"
						:marker="marker"
						@click.capture="emit('open', bug.id)"
					/>
				</li>
			</ul>
		</li>
	</ul>
</template>

<script setup lang="ts">
const props = defineProps({
	show: {
		type: Boolean,
		required: false,
		description: "Determines visibility of the markers",
		default: true,
	},
	list: {
		type: Array,
		required: true,
		description: "A list of markers",
	},
});

const emit = defineEmits<{
	(event: "open", bug_id: string): void;
}>();

const filteredList = computed(() =>
	props.list.filter((x) => x.attributes.markers.length > 0)
);
</script>
