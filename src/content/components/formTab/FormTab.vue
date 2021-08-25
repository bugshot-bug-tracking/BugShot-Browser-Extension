<template>
    <Tab>
        <State :show="state !== null" :state="state" />

        <Container v-if="state === null">
            <form id="bug-form">
                <h5 style="text-align: center">New Bug Report</h5>

                <div class="form-group">
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
                            class="form-check-input option critical"
                            type="radio"
                            name="inlineRadioOptions"
                            value="4"
                            v-model="bug.priority"
                        />
                    </div>

                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input option important"
                            type="radio"
                            name="inlineRadioOptions"
                            value="3"
                            v-model="bug.priority"
                        />
                    </div>

                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input option normal"
                            type="radio"
                            name="inlineRadioOptions"
                            value="2"
                            v-model="bug.priority"
                            checked
                        />
                    </div>

                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input option minoir"
                            type="radio"
                            name="inlineRadioOptions"
                            value="1"
                            v-model="bug.priority"
                        />
                    </div>
                </div>

                <button
                    id="form-submit"
                    type="submit"
                    class="btn btn-primary mb-2"
                    @click.prevent="submit"
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

        <Container v-if="state === null">
            <Attachments :bug="bug" :isRemote="false" @getLocal="localFiles" />
        </Container>
    </Tab>
</template>

<script>
import { ref } from "vue";

import Tab from "../global/tab/Tab.vue";
import Container from "../global/container/Container.vue";
import State from "../global/state/State.vue";
import Attachments from "../global/attachment/Attachments.vue";

export default {
    components: { State, Tab, Container, Attachments },
    name: "FormTab",
    props: ["bug"],
    emits: ["default"],
    setup(props, context) {
        const state = ref(null);
        const files64 = ref([]);

        const submit = (event) => {
            props.bug.priority = Number(props.bug.priority);

            state.value = "loading";

            chrome.runtime.sendMessage(
                {
                    message: "sendBug",
                    payload: props.bug,
                },
                (response) => {
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

                    console.log(response.payload);
                    console.log("Bug report sent!");

                    let newBugInfo = response.payload;
                    console.log("here");
                    submitAttachments(newBugInfo.id).then(() => {
                        console.log("Bug attachments sent!");

                        state.value = "success";

                        setTimeout(function () {
                            context.emit("default");
                        }, 3800);
                    });
                }
            );
        };

        const submitAttachments = (bug_id) => {
            let filesPromises = files64.value.map((file) => {
                return new Promise((resolve, reject) => {
                    chrome.runtime.sendMessage(
                        {
                            message: "saveAttachment",
                            payload: {
                                data: {
                                    name: file.designation,
                                    data: file.data,
                                },
                                bug_id: bug_id,
                            },
                        },
                        (response) => {
                            console.log(response);

                            switch (response.message) {
                                case "error":
                                    reject(response.error);

                                case "ok":
                                    console.info("Attachments Uploaded.");
                                    resolve(response.payload);
                                    break;
                            }
                        }
                    );
                });
            });

            return Promise.all(filesPromises);
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