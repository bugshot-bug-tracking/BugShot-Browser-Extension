<template>
    <div id="info" class="d-flex flex-column no-wrap">
        <div class="justify-content-between mb-2">
            <div class="title">
                <div class="content">{{ bug.designation }}</div>
            </div>

            <img class="close-button btn" @click="close" />
        </div>

        <div class="id">
            <label> ID: </label>
            <div class="content">{{ bug.id }}</div>
        </div>

        <div class="justify-content-between">
            <div class="creator">
                <label>Creator:</label>
                <div class="content">{{ bug.user_id }}</div>
            </div>
            <div class="date">
                <div class="content">{{ bug.created_at }}</div>
            </div>
        </div>

        <div class="screenshot" />

        <div class="url">
            <label>URL:</label>
            <div class="content">
                <a :href="bug.url">{{ bug.url }}</a>
            </div>
        </div>

        <div class="description">
            <label>Description:</label>
            <div class="content">{{ bug.description }}</div>
        </div>

        <div id="technical" :class="{ open: open }">
            <div
                class="technical-label d-inline-flex justify-content-between"
                @click="collapseTechnical"
            >
                <span>Technical information:</span>
                <img />
            </div>
            <div class="technical-info">
                <div class="os">
                    <label>Operating System:</label>
                    <div class="content">{{ bug.operating_system }}</div>
                </div>

                <div class="browser">
                    <label>Browser:</label>
                    <div class="content">{{ bug.browser }}</div>
                </div>

                <div class="selector">
                    <label>Selector:</label>
                    <div class="content">{{ bug.selector }}</div>
                </div>

                <div class="resolution">
                    <label>Resolution:</label>
                    <div class="content">{{ bug.resolution }}</div>
                </div>
            </div>
        </div>

        <div class="grid1x2 my-3">
            <div class="deadline grid1x2">
                <label>Priority:</label>
                <div
                    class="content priority"
                    :class="'p' + bug.priority_id"
                ></div>
            </div>

            <div class="grid1x2 status">
                <label>Status:</label>
                <div class="content status">PH</div>
            </div>
        </div>

        <div class="deadline">
            <label>Deadline:</label>
            <div class="content">{{ bug.deadline }}</div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "Info",
    props: ["bug"],
    emits: ["close"],
    setup(props, context) {
        const open = ref(false);

        const collapseTechnical = () => {
            open.value = !open.value;
        };

        const close = () => {
            context.emit("close");
        };

        return { open, collapseTechnical, close };
    },
};
</script>