<template>
    <img
        class="thumbnail"
        :src="thumbnail"
        alt="Screenshots"
        @click="modal = !modal"
    />

    <Modal :show="modal" @close="modal = !modal">
        <img :src="shownImage.image" alt="Screenshots" />
        <div
            v-show="showMark"
            id="mark"
            :class="priority"
            :style="` 
			left: calc(${shownImage.mark.x}% - 16px);
			top: calc(${shownImage.mark.y}% - 56px);			
			`"
        />

        <template v-slot:extra>
            <div class="controls-bottom">
                <div class="controls">
                    <div
                        class="btn btn-hide-mark"
                        @click="showMark = !showMark"
                    >
                        Hide mark
                    </div>
                    <div class="images-counter" v-if="images.length > 1">
                        {{ shownImage.number }} of {{ images.length }}
                    </div>
                </div>
            </div>

            <div class="controls-side" v-if="images.length > 1">
                <div class="btn btn-side-arrow arrow-left" @click="previous" />
                <div class="btn btn-side-arrow arrow-right" @click="next" />
            </div>
        </template>
    </Modal>
</template>


<script>
import { computed, onMounted, ref, watch } from "vue";
import Modal from "../modal/Modal.vue";

export default {
    components: { Modal },
    name: "Screenshot",
    props: {
        bug: Object,
    },
    setup(props, context) {
        const images = ref([{}]);
        const modal = ref(false);
        const showMark = ref(true);

        const counter = ref(0);

        const previous = () => {
            if (counter.value > 0) counter.value--;
        };
        const next = () => {
            if (counter.value < images.value.length - 1) counter.value++;
        };

        const update = () => {
            chrome.runtime.sendMessage(
                {
                    message: "getScreenshots",
                    payload: {
                        bug_id: props.bug.id,
                    },
                },
                (response) => {
                    switch (response.message) {
                        case "error":
                            throw response.error;

                        case "ok":
                            images.value = response.payload;
                            console.info("Request get screenshots: ok!");
                            break;
                    }
                }
            );
        };

        let thumbnail = computed(() => {
            if (images.value.length > 0) return images.value[0].data;
            return "/";
        });

        const shownImage = computed(() => {
            let img = images.value[counter.value];

            console.log(img);
            // used for getting the image dimensions from base64 data
            let i = new Image();
            i.src = img.data;

            return {
                image: img.data,
                number: counter.value + 1,
                // needed the position relative to the original image resolution so it can account for different image distorsions while shown via modal
                mark: {
                    x: (img.position.x / i.width) * 100,
                    y: (img.position.y / i.height) * 100,
                },
            };
        });

        const priority = computed(() => {
            switch (Number(props.bug.priority_id)) {
                case 1:
                    return "minor";
                    break;
                case 2:
                    return "normal";
                    break;
                case 3:
                    return "important";
                    break;
                case 4:
                    return "critical";
                    break;

                default:
                    return "normal";
                    break;
            }
        });

        onMounted(() => {
            update();
        });

        watch(props, update);

        return {
            images,
            modal,
            thumbnail,
            shownImage,
            priority,
            showMark,
            previous,
            next,
        };
    },
};
</script>
