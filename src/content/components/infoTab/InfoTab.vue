<template>
    <Tab>
        <State :state="'loading'" :show="tabLoading" style="z-index: 1000" />

        <Container v-show="!tabLoading">
            <State :state="'mini-loading'" :show="isLoading.info" />
            <Info
                :bug="bug"
                @close="$emit('close')"
                @loading="setLoading($event, 'info')"
            />
        </Container>

        <Container v-show="!tabLoading">
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

        <Container v-show="!tabLoading">
            <State :state="'mini-loading'" :show="isLoading.comments" />
            <Comments :bug="bug" @loading="setLoading($event, 'comments')" />
        </Container>

        <div class="delete-btn-wrapper" v-show="!tabLoading">
            <div class="btn delete-bug-btn" @click="deleteBug">
                <div class="delete-icon" />
                <span> Delete Bug </span>
            </div>
        </div>
    </Tab>
</template>

<script>
import { computed, reactive, ref } from "@vue/reactivity";

import Tab from "../global/tab/Tab.vue";
import Container from "../global/container/Container.vue";
import Info from "./info/Info.vue";
import Attachments from "../global/attachment/Attachments.vue";
import State from "../global/state/State.vue";
import Comments from "./comments/Comments.vue";
import { watch } from "@vue/runtime-core";

export default {
    components: { Tab, Container, Info, Attachments, State, Comments },
    name: "InfoTab",
    props: {
        bug: Object,
    },
    emits: ["close", "deleted"],
    setup(props, context) {
        const isLoading = reactive({
            info: true,
            attachments: true,
            comments: true,
        });

        const lFlag = ref(true);
        const tabLoading = computed(() => {
            if (
                !isLoading.info &&
                !isLoading.attachments &&
                !isLoading.comments &&
                lFlag
            ) {
                lFlag.value = false;
                return lFlag.value;
            }
            return lFlag.value;
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

        watch(props, () => {
            // if the bug details change set the state to loading on the tab
            isLoading.info = true;
            isLoading.attachments = true;
            isLoading.comments = true;
            lFlag.value = true;
        });

        return {
            isLoading,
            tabLoading,
            setLoading,
            deleteBug,
        };
    },
};
</script>