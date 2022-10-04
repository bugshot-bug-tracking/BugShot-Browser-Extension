<template>
	<div
		id="overlay"
		:class="{ marked: overlay.showMarker }"
		v-if="overlay.show"
		@click.prevent.once="createMark"
	>
		<div
			class="marker"
			v-if="overlay.showMarker"
			:style="markerPosition"
			:class="priority"
		/>
	</div>
</template>

<script setup lang="ts">
import { sendMessage } from "webext-bridge";
import { useReportStore } from "~/stores/report";
import unique from "~/util/unique-selector";

const emit = defineEmits(["done", "close"]);

let store = useReportStore();

onMounted(() => {
	document.addEventListener("keydown", closeEvent);
});

onUnmounted(() => {
	document.removeEventListener("keydown", closeEvent);
});

const closeEvent = (event: KeyboardEvent) => {
	if (event.key === "Escape" && !overlay.showMarker) emit("close");
};

const overlay = reactive({
	show: true,
	showMarker: false,
});

const markerPosition = computed(() => ({
	left: store.clientX + "px",
	top: store.clientY + "px",
}));

const createMark = async (event: MouseEvent) => {
	// acts as a lock for preventing more than one take
	if (overlay.showMarker) return;

	overlay.show = false;
	await nextTick(); // wait for the document update so the overlay is not captured

	let response = await sendMessage("takeScreenshot", {});

	store.screenshots.push(response.payload);

	const generateQuerySelector = (el: Element | null): string => {
		if (el === null) return "";
		if (el.tagName.toLowerCase() == "html") return "html";
		let str = el.tagName.toLowerCase();

		str += el.id != "" ? "#" + el.id : "";

		if (el.classList && el.classList.length > 0) {
			el.classList.forEach((item) => {
				str += "." + item;
			});
		}

		return generateQuerySelector(el.parentElement) + " > " + str;
	};

	const element = document.elementFromPoint(event.clientX, event.clientY);
	const coordinates = element?.getBoundingClientRect();

	overlay.show = true;

	store.selector = generateQuerySelector(element);

	// coordinates relative to what user sees on screen
	store.clientX = event.clientX;
	store.clientY = event.clientY;

	// coordinates relative to the top of the page (it considers scroll)
	store.pageX = event.pageX;
	store.pageY = event.pageY;

	overlay.showMarker = true;

	let marker = {
		position_x: store.clientX,
		position_y: store.clientY,
		web_position_x: store.pageX,
		web_position_y: store.pageY,

		target_x: coordinates?.x,
		target_y: coordinates?.y,
		target_height: coordinates?.height,
		target_width: coordinates?.width,

		scroll_x: window.scrollX,
		scroll_y: window.scrollY,

		screenshot_height: window.innerHeight,
		screenshot_width: window.innerWidth,

		target_full_selector: unique(element, {
			fromRoot: true,
		}),
		target_short_selector: unique(element),
		target_html:
			element.outerHTML.length < 2 << 15
				? element.outerHTML
				: element.outerHTML.substring(0, (2 << 15) - 10),
	};

	store.markers.push(marker);

	console.log(store);

	emit("done");
};

const priority = computed(() => {
	switch (Number(store.priority)) {
		case 1:
			return "minor";
		case 2:
			return "normal";
		case 3:
			return "important";
		case 4:
			return "critical";

		default:
			return "normal";
	}
});
</script>

<style scoped lang="scss">
#overlay {
	background-color: hsla(0, 0%, 100%, 0.5);
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	cursor: url("/assets/marks/mark_normal.svg") 16 56, auto;

	&.marked {
		background-color: hsla(0, 0%, 100%, 0.3) !important;
		z-index: -1 !important;
		cursor: not-allowed !important;
	}
}

.marker {
	z-index: 1;
	position: absolute;
	display: block;
	width: 32px;
	height: 56px;
	background-position: center center;
	background-repeat: no-repeat;
	margin-left: -16px;
	margin-top: -56px;

	&.critical {
		background-image: url("/assets/marks/mark_crit.svg");
	}

	&.important {
		background-image: url("/assets/marks/mark_imp.svg");
	}

	&.normal {
		background-image: url("/assets/marks/mark_normal.svg");
	}

	&.minor {
		background-image: url("/assets/marks/mark_min.svg");
	}
}
</style>
