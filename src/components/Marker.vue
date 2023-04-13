<template>
	<div class="marker" :style="markerStyle">
		<slot name="mark">
			<img :src="priorityIcon" alt="marker" />
		</slot>

		<div class="popup-wrapper">
			<div class="container" w-a>
				<span>
					<p>{{ text }}</p>
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import calcMarkerCoords from "~/util/calcMarkerCoords";

const props = defineProps({
	marker: {
		type: Object,
	},
	priority: {
		type: Number,
		required: true,
		description: "Priority id for marker color",
	},
	text: {
		type: String,
		required: true,
		description: "Text shown inside popup buble",
	},
});

const coordonates = reactive({
	left: 0,
	top: 0,
});

const markerStyle = computed(() => ({
	left: coordonates.left + "px",
	top: coordonates.top + "px",
}));

const setCoords = () => {
	if (!props.marker?.attributes?.target_full_selector) return;

	let element = document.querySelector(
		props.marker.attributes.target_full_selector
	);

	if (!element) return;
	const current = element.getBoundingClientRect();

	let coords = calcMarkerCoords(
		props.marker.attributes.web_position_x,
		props.marker.attributes.web_position_y,

		props.marker.attributes.target_x,
		props.marker.attributes.target_y,
		props.marker.attributes.target_width,
		props.marker.attributes.target_height,
		props.marker.attributes.scroll_x,
		props.marker.attributes.scroll_y,

		current.x,
		current.y,
		current.width,
		current.height,

		window.scrollX,
		window.scrollY
	);

	coordonates.left = coords.x;
	coordonates.top = coords.y;
};

setCoords();

window.addEventListener("resize", setCoords);

onUnmounted(() => {
	window.removeEventListener("resize", setCoords);
});

const priorityIcon = computed(() => {
	switch (props.priority) {
		case 1:
			return browser.runtime.getURL("/assets/marks/mark_min.svg");

		case 2:
			return browser.runtime.getURL("/assets/marks/mark_normal.svg");

		case 3:
			return browser.runtime.getURL("/assets/marks/mark_imp.svg");

		case 4:
			return browser.runtime.getURL("/assets/marks/mark_crit.svg");

		default:
			return browser.runtime.getURL("/assets/marks/mark_normal.svg");
	}
});
</script>

<style lang="scss" scoped>
.marker {
	position: absolute;
	margin-left: -9px;
	margin-top: -32px;
	padding: 0px;

	transform: none;
	cursor: pointer;

	img {
		min-width: 18px;
		width: 18px;
		max-width: 18px;

		min-height: 32px;
		height: 32px;
		max-height: 32px;
	}

	&:hover .popup-wrapper {
		display: block;
	}
}

.popup-wrapper {
	position: relative;
	display: none;

	.container {
		position: absolute;
		background-color: #f8f8fc;
		top: -46px;
		left: 18px;
		border-radius: 8px;
		min-height: 2em;
		padding: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #e6e6ff;

		p {
			margin: unset;
			width: max-content;
		}

		&::before {
			content: "";
			position: absolute;
			top: 9px;
			left: -20px;
			z-index: 0;
			width: 0;
			height: 0;
			border-top: 10px solid transparent;
			border-left: 10px solid transparent;
			border-bottom: 10px solid transparent;
			border-right: 10px solid #f8f8fc;
		}

		&::after {
			content: "";
			position: absolute;
			top: 8px;
			left: -22px;
			z-index: -1;
			width: 0;
			height: 0;
			border-top: 11px solid transparent;
			border-left: 11px solid transparent;
			border-bottom: 11px solid transparent;
			border-right: 11px solid #e6e6ff;
		}
	}
}
</style>
