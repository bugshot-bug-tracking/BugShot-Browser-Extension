<template>
	<div
		id="overlay"
		:class="{ marked: mark.on }"
		v-show="showOverlay"
		@click.once="marked"
	>
		<div
			class="marker"
			v-if="mark.on"
			:style="`left: ${mark.x - 16}px; top: ${mark.y - 56}px;`"
			:class="priority"
		></div>
	</div>
</template>

<script>
import { ref, computed } from "vue";

export default {
	name: "Overlay",
	props: ["details", "default", "sidebar"],
	setup(props, context) {
		const lock = ref(false);
		const showOverlay = ref(true);

		const mark = ref({
			on: false,
			x: 0,
			y: 0,
		});

		const marked = (event) => {
			event.stopImmediatePropagation();

			// Prevent more than 1 click event while registering a bug report
			if (lock.value) return;
			lock.value = true;

			// hide overlay for screenshot
			showOverlay.value = false;

			setTimeout(() => {
				// Take screenshot
				chrome.runtime.sendMessage(
					{
						message: "takeScreenshot",
					},
					(response) => {
						const generateQuerySelector = (el) => {
							if (el.tagName.toLowerCase() == "html")
								return "html";
							let str = el.tagName.toLowerCase();

							str += el.id != "" ? "#" + el.id : "";

							if (
								(typeof el.className === "string" ||
									el.className instanceof String) &&
								el.className !== ""
							) {
								let classes = el.className.split(/\s/);
								for (let i = 0; i < classes.length; i++)
									str += "." + classes[i];
							}
							return (
								generateQuerySelector(el.parentNode) +
								" > " +
								str
							);
						};

						props.details.selector = generateQuerySelector(
							document.elementFromPoint(
								event.clientX,
								event.clientY
							)
						);

						// Show overlay again
						showOverlay.value = true;

						if (response.message === "error") {
							context.emit("default");
							console.error(response.error);
							return;
						}

						if (response.message !== "ok") {
							context.emit("default");
							console.error(
								"Something went wrong with the screenshot!"
							);
							return;
						}

						console.log("Screenshot taken!");

						// Save screenshot in memory
						props.details.screenshot = response.payload;
						props.details.priority = 2;

						// Show sidebar again
						context.emit("sidebar");

						// coordinates relative to what user sees on screen
						let clientX = event.clientX;
						let clientY = event.clientY;

						// coordinates relative to the top of the page(it considers scroll)
						// ? this will be usefull when adding a mark of bug later and well need absolute coordonates to page position
						let pageX = event.pageX;
						let pageY = event.pageY;

						mark.value = {
							on: true,
							x: clientX,
							y: clientY,
						};

						// NEXT open bug form
						props.details.mark_coords = {
							x: clientX,
							y: clientY,
							wx: pageX,
							wy: pageY,
						};

						context.emit("formOpen");
					}
				);
			}, 100);
		};

		const priority = computed(() => {
			switch (Number(props.details.priority)) {
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

		return {
			showOverlay,
			mark,
			priority,
			marked,
		};
	},
};
</script>
