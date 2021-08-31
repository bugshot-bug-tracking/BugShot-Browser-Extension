<template>
    <div id="bugshot-container">
        <Sidebar
            v-show="showSidebar"
            @default="setDefault"
            @add="addEvent"
            @list="listEvent"
        />
        <ListTab v-if="showList" @info="infoEvent" />
        <InfoTab v-if="showInfo" :bug="bugInfo" @close="closeInfo" />
        <FormTab v-if="showForm" :bug="bugDetails" @default="setDefault" />
        <Overlay
            v-if="showOverlay"
            :details="bugDetails"
            @sidebar="showSidebar = true"
            @default="setDefault"
            @formOpen="formOpen"
        />
    </div>
</template>

<script>
import { ref } from "vue";

import Sidebar from "./sidebar/Sidebar.vue";
import ListTab from "./listTab/Buglist.vue";
import InfoTab from "./infoTab/InfoTab.vue";
import FormTab from "./formTab/FormTab.vue";
import Overlay from "./overlay/Overlay.vue";

export default {
    components: { Sidebar, ListTab, InfoTab, FormTab, Overlay },
    setup() {
        const showSidebar = ref(true);
        const showList = ref(false);
        const showInfo = ref(false);
        const showForm = ref(false);
        const showOverlay = ref(false);

        const bugInfo = ref({});

        const bugDetails = ref({});

        const setDefault = () => {
            showSidebar.value = true;
            showList.value = false;
            showInfo.value = false;
            showForm.value = false;
            showOverlay.value = false;
            bugInfo.value = {};
            bugDetails.value = {};
        };

        const addEvent = () => {
            setDefault();

            // wait for the values to change to default then execute this
            setTimeout(() => {
                showSidebar.value = false;
                showOverlay.value = true;
            }, 1);
        };

        const listEvent = () => {
            showList.value = !showList.value;
            if (showList.value === false) showInfo.value = false;
        };

        const infoEvent = (bug) => {
            bugInfo.value = bug;
            if (showInfo.value !== true) showInfo.value = !showInfo.value;
            // console.info({ info: bug });
        };

        const closeInfo = () => {
            showInfo.value = false;
        };

        const formOpen = (details) => {
            bugDetails.value.resolution = {
                width: screen.width * window.devicePixelRatio,
                height: screen.height * window.devicePixelRatio,
            };

            console.log(bugDetails.value);

            showForm.value = true;
        };

        return {
            showSidebar,
            showList,
            showInfo,
            showForm,
            bugInfo,
            showOverlay,
            bugDetails,
            setDefault,
            addEvent,
            listEvent,
            infoEvent,
            closeInfo,
            formOpen,
        };
    },
};
</script>

