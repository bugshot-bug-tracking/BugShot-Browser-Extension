<template>
    <div class="comments-component">
        <div class="comments-top">
            <div class="header">Comments</div>
        </div>

        <div class="comments-center">
            <div class="content">
                <div class="messages" ref="msgs" v-if="messages.length > 0">
                    <Message v-for="msg in messages" :key="msg.id" :msg="msg" />
                    <div />
                </div>
            </div>
        </div>

        <div class="comments-bottom">
            <div class="comments-bottom-header">
                <span>Add comment</span>
                <div>{{ chars.length }} / 250</div>
            </div>

            <textarea
                id="comment-input"
                rows="3"
                maxlength="250"
                placeholder="Write comment..."
                v-model="chars"
            />
            <div class="btn comment-send-button" @click="messages.push(msg)">
                Add Comment
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { nextTick, onMounted, watch } from "@vue/runtime-core";

import Message from "./message/Message.vue";

export default {
    components: { Message },
    name: "Comments",
    props: {
        bug: Object,
    },
    setup(props) {
        const messages = ref([]);
        const chars = ref("");
        const msgs = ref(null);
        const bottom = ref(null);

        const update = () => {
            try {
                messages.value = [];

                chrome.runtime.sendMessage(
                    {
                        message: "getComments",
                        payload: {
                            bug_id: props.bug.id,
                        },
                    },
                    (response) => {
                        switch (response.message) {
                            case "error":
                                throw response.error;

                            case "ok":
                                console.info("Request get comments: ok!");

                                response.payload.forEach((comment) => {
                                    messages.value.push({
                                        id: comment.id,
                                        content: comment.content,
                                        timestamp: comment.created_at,
                                        creator: {
                                            first_name: comment.first_name,
                                            last_name: comment.last_name,
                                        },
                                        sender: 1, // ! Here should be a comparasion with the auth user to see if it is the creator
                                    });
                                });
                                break;
                        }
                    }
                );
            } catch (error) {
                console.log(error);
            }
        };

        const msg = ref({
            content: "Test messaage as sender",
            timestamp: "2021-08-27 10:09:38",
            creator: {
                first_name: "Radu",
                last_name: "Memetea",
            },
            sender: 0,
        });

        onMounted(() => {
            update();
        });

        watch(props, update);

        // watch(
        //     messages,
        //     () => {
        //         nextTick(() => {
        //             msgs.value?.lastChild.scrollIntoView({
        //                 behavior: "smooth",
        //             });
        //         });
        //     },
        //     { deep: true }
        // );

        return {
            messages,
            chars,
            msg,
            bottom,
            msgs,
        };
    },
};
</script>