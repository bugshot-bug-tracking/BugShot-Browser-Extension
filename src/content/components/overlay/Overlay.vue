<template>
    <div
        id="overlay"
        :class="{ marked: mark.on }"
        v-show="showOverlay"
        @click.once="marked"
    >
        <div
            id="mark"
            v-if="mark.on"
            :style="
                'top: ' + (mark.y - 56) + 'px; left: ' + (mark.x - 16) + 'px;'
            "
            :class="priority"
        ></div>
    </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
    name: "Overlay",
    props: ["details"],
    setup(props, context) {
        const lock = ref(false);
        const showOverlay = ref(true);

        const mark = ref({
            on: false,
            x: 0,
            y: 0,
        });
        const priority = computed(() => {
            props.details.priority;
            switch (Number(props.details.priority)) {
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

                        // Change the overlay style as marked state

                        // NEXT add a marker to the overlay just for show

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

                        // NEXT oppen bug form
                        props.details.mark_coords = { x: clientX, y: clientY };

                        props.details.selector = "/";
                        context.emit("formOpen");
                    }
                );
            }, 100);
        };

        return {
            showOverlay,
            mark,
            priority,
            marked,
        };
    },
};
</script>