<template>
    <Tab>
        <State v-if="state !== null" :state="state" />

        <Container>
            <form id="bug-form" v-if="state === null">
                <h5 style="text-align: center">New Bug Report</h5>

                <div class="form-group">
                    <!-- <label for="bug-name">Bug Name</label> -->
                    <input
                        type="text"
                        class="form-control"
                        id="bug-name"
                        placeholder="Enter bug name."
                        required
                        v-model="bug.name"
                    />
                </div>

                <div class="form-group">
                    <!-- <label for="bug-description">Example textarea</label> -->
                    <textarea
                        class="form-control"
                        id="bug-description"
                        rows="3"
                        placeholder="Describe the bug."
                        required
                        v-model="bug.description"
                    ></textarea>
                </div>

                <div class="form-group d-flex justify-content-between mb-lg-2">
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="critical-option"
                            value="4"
                            v-model="bug.priority"
                        />
                        <!-- <label class="form-check-label" for="critical-option">Critical</label> -->
                    </div>

                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="important-option"
                            value="3"
                            v-model="bug.priority"
                        />
                        <!-- <label class="form-check-label" for="important-option">Important</label> -->
                    </div>

                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="normal-option"
                            value="2"
                            v-model="bug.priority"
                            checked
                        />
                        <!-- <label class="form-check-label" for="normal-option">Normal</label> -->
                    </div>

                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="minoir-option"
                            value="1"
                            v-model="bug.priority"
                        />
                        <!-- <label class="form-check-label" for="minoir-option">Minoir</label> -->
                    </div>
                </div>

                <button
                    id="form-submit"
                    type="submit"
                    class="btn btn-primary mb-2"
                    @click="submit"
                >
                    <span>Report Bug!</span>
                </button>
                <button
                    id="form-reset"
                    type="reset"
                    class="btn btn-secondary mb-2"
                    @click="cancel"
                >
                    <span>Cancel</span>
                </button>
            </form>
        </Container>

        <Container>
            <Attachments :bug="bug" :isRemote="false" @getLocal="localFiles" />
        </Container>
    </Tab>
</template>

<script>
import { ref } from "vue";
import Tab from "../global/Tab.vue";
import Container from "../global/Container.vue";
import State from "../global/State.vue";
import Attachments from "../global/attachment/Attachments.vue";

export default {
    components: { State, Tab, Container, Attachments },
    name: "FormTab",
    props: ["bug"],
    emits: ["default", "submit"],
    setup(props, context) {
        const state = ref(null);
        const files64 = ref([]);

        const submit = (event) => {
            props.bug.priority = Number(props.bug.priority);

            // Stop any other possible action outside of this
            event.preventDefault();

            state.value = "loading";

            chrome.runtime.sendMessage(
                {
                    message: "sendBug",
                    payload: props.bug,
                },
                (response) => {
                    state.value = null;

                    if (response.message === "error") {
                        state.value = "error";

                        setTimeout(function () {
                            context.emit("default");
                        }, 3800);

                        console.error(response.error);
                        return;
                    }

                    if (response.message !== "ok") {
                        context.emit("default");
                        console.error(
                            "Something went wrong with the the bug report!"
                        );
                        return;
                    }

                    console.log("Bug report sent!");

                    state.value = "success";

                    setTimeout(function () {
                        context.emit("default");
                    }, 3800);
                }
            );

            context.emit("submit");
        };

        const cancel = () => {
            context.emit("default");
        };
        const localFiles = (files) => {
            files64.value = files.value;
        };
        return { state, submit, cancel, localFiles };
    },
};
</script>