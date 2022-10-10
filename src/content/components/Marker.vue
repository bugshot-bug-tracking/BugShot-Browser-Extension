<template>
	<div class="marker" :style="{ ...coordonates }">
		<slot name="mark">
			<img :src="priorityIcon(bug.priority)" alt="marker" />
		</slot>

		<div class="wrapper">
			<div class="container">
				<span>
					<p>{{ bug.designation }}</p>
				</span>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onUnmounted, reactive, ref } from "vue";
import calcMarkerCoords from "../util/calcMarkerCoords";

const props = defineProps({
	marker: {
		type: Object,
	},
	bug: {
		type: Object,
		required: true,
	},
});

const coordonates = reactive({
	left: "0px",
	top: "0px",
});

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

	coordonates.left = `${coords.x}px`;
	coordonates.top = `${coords.y}px`;
};

setCoords();

window.addEventListener("resize", setCoords);

onUnmounted(() => {
	window.removeEventListener("resize", setCoords);
});

const priorityIcon = (value) => {
	switch (value) {
		case 1:
			return chrome.runtime.getURL("/assets/marks/mark_min.svg");

		case 2:
			return chrome.runtime.getURL("/assets/marks/mark_normal.svg");

		case 3:
			return chrome.runtime.getURL("/assets/marks/mark_imp.svg");

		case 4:
			return chrome.runtime.getURL("/assets/marks/mark_crit.svg");

		default:
			return chrome.runtime.getURL("/assets/marks/mark_normal.svg");
	}
};
</script>
