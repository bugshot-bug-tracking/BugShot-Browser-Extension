<template>
	<div class="thumbnail-wraper" @click="toggleModal">
		<img class="thumbnail" :src="thumbnail" alt="Screenshots" />
		<div class="enlarge" />
	</div>

	<Modal :show="modal" @close="modal = !modal" class="big-screenshot">
		<img :src="showImage" alt="Screenshots" ref="bigScreen" />

		<div
			v-show="mark.show"
			class="marker"
			:class="priority"
			:style="{
				left: mark.x + '%',
				top: mark.y + '%',
			}"
		/>

		<template v-slot:extra>
			<div class="controls-bottom">
				<div class="controls">
					<div
						class="btn btn-hide-mark"
						@click="mark.show = !mark.show"
					>
						{{ mark.show ? "Hide" : "Show" }} mark
					</div>

					<div class="images-counter" v-if="screenshots.length > 1">
						{{ counter + 1 }} of {{ screenshots.length }}
					</div>
				</div>
			</div>

			<div class="controls-side" v-if="screenshots.length > 1">
				<div
					class="btn btn-side-arrow arrow-left"
					v-if="counter > 0"
					@click="previous"
				/>
				<div v-else />

				<div
					class="btn btn-side-arrow arrow-right"
					v-if="counter < screenshots.length - 1"
					@click="next"
				/>
			</div>
		</template>
	</Modal>
</template>

<script>
import { computed, nextTick, onMounted, reactive, ref, watch } from "vue";
import Modal from "../../global/modal/Modal.vue";

export default {
	components: { Modal },
	name: "Screenshot",
	props: {
		bug: {
			required: true,
			type: Object,
		},
	},
	emits: ["loading"],
	setup(props, context) {
		const screenshots = ref([]);
		const modal = ref(false);
		const counter = ref(0);
		const bigScreen = ref(null);
		const mark = reactive({
			show: true,
			x: 0,
			y: 0,
		});

		// fixes the problem of renedering a null object
		const toggleModal = () => {
			if (screenshots.value[0] == null) {
				modal.value = false;
				return;
			}
			modal.value = !modal.value;
		};

		const setLoading = (value) => {
			context.emit("loading", value);
		};

		const previous = () => {
			if (counter.value > 0) counter.value--;
		};

		const next = () => {
			if (counter.value < screenshots.value.length - 1) counter.value++;
		};

		const update = () => {
			setLoading(true);

			chrome.runtime.sendMessage(
				{
					message: "getScreenshots",
					payload: {
						bug_id: props.bug.id,
					},
				},
				(response) => {
					setLoading(false);

					switch (response.message) {
						case "error":
							throw response.error;

						case "ok":
							screenshots.value = response.payload;
							console.info("Request get screenshots: ok!");
							break;
					}
				}
			);
		};

		let thumbnail = computed(() => {
			if (screenshots.value.length > 0)
				return atob(screenshots.value[0].attributes.base64);
			return "/";
		});

		const showImage = computed(() => {
			if (counter.value >= screenshots.value.length) counter.value = 0;

			let img = screenshots.value[counter.value];

			// wait untill rendered to get image sizes
			nextTick(() => {
				// get points relative to the original image to put the marker

				mark.x =
					img.attributes.position_x <= 0 &&
					bigScreen.value.naturalWidth <= 0
						? 0
						: (img.attributes.position_x /
								bigScreen.value.naturalWidth) *
						  100;

				mark.y =
					img.attributes.position_y <= 0 &&
					bigScreen.value.naturalHeight <= 0
						? 0
						: (img.attributes.position_y /
								bigScreen.value.naturalHeight) *
						  100;
			});

			return atob(img.attributes.base64);
		});

		const priority = computed(() => {
			switch (Number(props.bug.attributes.priority.id)) {
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

		onMounted(() => {
			update();
		});

		watch(props, update);

		return {
			screenshots,
			modal,
			thumbnail,
			counter,
			bigScreen,
			mark,
			showImage,
			priority,
			previous,
			next,
			toggleModal,
		};
	},
};
</script>
