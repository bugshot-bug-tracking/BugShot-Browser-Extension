<template>
    <Tab style="width: 17vw">
        <State :show="state !== null" :state="state" />

        <BugGroup
            v-for="status in bugs.status"
            :key="status.id"
            :name="status.name"
        >
            <BugCard
                v-for="bug in bugs.info[status.id]"
                :key="bug.id"
                :bug="bug"
                @info="$emit('info', $event)"
            />
        </BugGroup>
    </Tab>
</template>

<script>
import { onMounted, reactive, ref } from "vue";

import Tab from "../global/tab/Tab.vue";
import State from "../global/state/State.vue";
import BugGroup from "./BugGroup.vue";
import BugCard from "./BugCard.vue";

export default {
    name: "Buglist",
    components: {
        Tab,
        State,
        BugGroup,
        BugCard,
    },
    emits: ["info"],
    setup() {
        const bugs = reactive({ status: [], info: [] });
        const state = ref("loading");

        const update = () => {
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

                    bugs.status = [];
                    bugs.info = [];

                    response.payload.forEach((stage) => {
                        bugs.status.push({
                            id: stage.id,
                            name: stage.designation,
                        });

                        bugs.info[stage.id] = stage.bugs;

                        stage.bugs.forEach((bug) => {
                            if (bug.deadline === null)
                                bug.deadline = "no deadline";
                            bug.status = {
                                id: stage.id,
                                designation: stage.designation,
                                project_id: stage.project_id,
                            };
                        });
                    });
                }
            );
        };

        onMounted(update);

        emitter.on("deleted", update);

        return {
            bugs,
            state,
        };
    },
};
</script>

