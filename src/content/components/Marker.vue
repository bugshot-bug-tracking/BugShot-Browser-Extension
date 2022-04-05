<template>
	<div class="marker" :style="{ ...coordonates }">
		<slot name="mark">
			<img :src="priorityIcon(priority)" alt="marker" />
		</slot>
	</div>
</template>

<script setup>
import { onUnmounted, reactive, ref } from "vue";
import calcMarkerCoords from "../util/calcMarkerCoords";

const props = defineProps({
	data: {
		type: Object,
	},
	priority: {
		type: Number,
		required: true,
	},
});
console.log(props.data);
const coordonates = reactive({
	left: "0px",
	top: "0px",
});

const setCoords = () => {
	let element = document.querySelector(
		props.data.attributes.target_full_selector
	);
	if (!element) return;
	const current = element.getBoundingClientRect();

	console.log(element);
	console.log(current);

	let coords = calcMarkerCoords(
		props.data.attributes.web_position_x,
		props.data.attributes.web_position_y,

		props.data.attributes.target_x,
		props.data.attributes.target_y,
		props.data.attributes.target_width,
		props.data.attributes.target_height,
		props.data.attributes.scroll_x,
		props.data.attributes.scroll_y,

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
