<template>
    <img
        class="thumbnail"
        :src="thumbnail"
        alt="Screenshots"
        @click="modal = !modal"
    />

    <Modal :show="modal" @close="modal = !modal">
        <img :src="shownImage.image" alt="Screenshots" />
        <template v-slot:extra>
            <div class="controls-bottom">
                <div class="controls">
                    <div class="btn btn-hide-mark">Hide mark</div>
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

        const counter = ref(0);

        const shownImage = computed(() => {
            return {
                image: images.value[counter.value].data,
                number: counter.value + 1,
            };
        });

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

        onMounted(() => {
            update();
        });

        watch(props, update);

        return {
            images,
            modal,
            thumbnail,
            shownImage,
            previous,
            next,
        };
    },
};
</script>