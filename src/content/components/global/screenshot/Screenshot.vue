<template>
    <img
        class="thumbnail"
        :src="thumbnail"
        alt="Screenshots"
        @click="modalTogle"
    />
</template>


<script>
import { computed, onMounted, ref, watch } from "vue";

export default {
    name: "Screenshot",
    props: {
        bug: Object,
    },
    setup(props, context) {
        const images = ref([{}]);
        const modal = ref(null);

        const modalTogle = () => {};

        const update = () => {
            chrome.runtime.sendMessage(
                {
                    message: "getScreenshots",
                    payload: {
                        bug_id: props.bug.id,
                    },
                },
                (response) => {
                    console.log({ screenArray: response });

                    images.value = response.payload;

                    switch (response.message) {
                        case "error":
                            throw response.error;

                        case "ok":
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

        return { images, modal, thumbnail, modalTogle };
    },
};
</script>