<template>
    <div id="sidebar" :class="{ open: open }">
        <div id="logo" @click="logoClick"></div>
        <div
            id="bug-list-button"
            v-show="open"
            @click="bugListButtonClick"
        ></div>
        <div id="admin-button" v-show="open" @click="adminButtonClick"></div>
        <div
            id="project-button"
            v-show="open"
            @click="projectButtonClick"
        ></div>
        <div id="add-button" v-show="open" @click="addButtonClick"></div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "Sidebar",
    setup(props, context) {
        const open = ref(false);

        const logoClick = (event) => {
            open.value = !open.value;
            if (open.value === false)
                //custom event to trigger default state if sidebar is closed
                context.emit("default");
        };

        const bugListButtonClick = (event) => {
            context.emit("list");
        };

        const adminButtonClick = (event) => {
            chrome.runtime.sendMessage(
                { message: "openAdminPannel" },
                (response) => {
                    if (response.message === "ok")
                        console.log("Oppened admin pannel in new tab.");
                }
            );
        };

        const projectButtonClick = (event) => {
            chrome.runtime.sendMessage(
                { message: "openProjectPannel" },
                (response) => {
                    if (response.message === "ok")
                        console.log("Oppened project pannel in new tab.");
                }
            );
        };

        const addButtonClick = (event) => {
            context.emit("add");
        };

        return {
            open,
            logoClick,
            bugListButtonClick,
            adminButtonClick,
            projectButtonClick,
            addButtonClick,
        };
    },
};
</script>

