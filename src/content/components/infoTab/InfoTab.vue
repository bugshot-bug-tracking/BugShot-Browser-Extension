<template>
    <Tab>
        <Container>
            <State :state="'mini-loading'" :show="isLoading.info" />
            <Info
                :bug="bug"
                @close="$emit('close')"
                @loading="setLoading($event, 'info')"
            />
        </Container>

        <Container>
            <State
                :state="'mini-loading'"
                :show="isLoading.attachments"
                style="z-index: 0"
            />
            <Attachments
                :bug="bug"
                :isRemote="true"
                @loading="setLoading($event, 'attachments')"
            />
        </Container>

        <Container>
            <State :state="'mini-loading'" :show="isLoading.comments" />
            <Comments :bug="bug" @loading="setLoading($event, 'comments')" />
        </Container>
        <div class="delete-btn-wrapper">
            <div class="btn delete-bug-btn" @click="deleteBug">
                <div class="delete-icon" />
                <span> Delete Bug </span>
            </div>
        </div>
    </Tab>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";

import Tab from "../global/tab/Tab.vue";
import Container from "../global/container/Container.vue";
import Info from "./info/Info.vue";
import Attachments from "../global/attachment/Attachments.vue";
import State from "../global/state/State.vue";
import Comments from "./comments/Comments.vue";

export default {
    components: { Tab, Container, Info, Attachments, State, Comments },
    name: "InfoTab",
    props: { bug: Object },
    emits: ["close", "deleted"],
    setup(props, context) {
        const isLoading = reactive({
            info: true,
            attachments: true,
            comments: true,
        });

        const setLoading = (value, place) => {
            switch (place) {
                case "info":
                    isLoading.info = value;
                    break;

                case "attachments":
                    isLoading.attachments = value;
                    break;

                case "comments":
                    isLoading.comments = value;
                    break;
            }
        };

        const deleteBug = () => {
            try {
                chrome.runtime.sendMessage(
                    {
                        message: "deleteBug",
                        payload: {
                            bug_id: props.bug.id,
                        },
                    },
                    (response) => {
                        switch (response.message) {
                            case "ok":
                                console.info("Request delete bug: ok!");
                                context.emit("close");

                                // send an event to the list component to update the list
                                emitter.emit("deleted");
                                break;

                            case "error":
                                throw response.error;
                                break;
                        }
                    }
                );
            } catch (error) {
                console.error(error);
            }
        };

        return {
            isLoading,
            setLoading,
            deleteBug,
        };
    },
};
</script>