<template>
    <Tab style="width: 17vw">
        <State v-if="state !== null" :state="state" />

        <BugGroup
            v-for="status in bugs.status"
            :key="status.id"
            :name="status.name"
        >
            <BugCard
                v-for="bug in bugs.info[status.id]"
                :key="bug.id"
                :bug="bug"
                @info="info"
            />
        </BugGroup>
    </Tab>
</template>

<script>
import { ref } from "vue";

import State from "../global/State.vue";
import BugGroup from "./BugGroup.vue";
import BugCard from "./BugCard.vue";
import Tab from "../global/Tab.vue";

export default {
    name: "Buglist",
    components: {
        Tab,
        State,
        BugGroup,
        BugCard,
    },
    emits: ["info"],
    setup(props, context) {
        const bugs = ref({ status: [], info: [] });
        const state = ref("loading");

        const info = (bug) => {
            context.emit("info", bug);
        };

        state.value = "loading";

        chrome.runtime.sendMessage(
            {
                message: "getBugs",
            },
            (response) => {
                state.value = null;

                if (response.message === "error") {
                    state.value = "error";
                    console.error(response.error);
                    return;
                }

                if (response.message === "empty") {
                    console.log("No project buggs");
                    return;
                }

                if (response.message !== "ok") {
                    console.error("What was the message?");
                    return;
                }

                bugs.value.status = [];
                bugs.value.info = [];

                response.payload.forEach((stage) => {
                    bugs.value.status.push({
                        id: stage.id,
                        name: stage.designation,
                    });

                    bugs.value.info[stage.id] = stage.bugs;

                    stage.bugs.forEach((bug) => {
                        if (bug.deadline === null) bug.deadline = "no deadline";
                    });
                });
            }
        );

        return {
            bugs,
            state,
            info,
        };
    },
};
</script>

