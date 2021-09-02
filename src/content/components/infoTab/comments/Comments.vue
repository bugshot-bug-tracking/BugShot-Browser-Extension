<template>
    <div class="comments-component">
        <div class="comments-top">
            <div class="header">
                <span>Comments</span>
                <div class="btn refresh-button" @click="update" />
            </div>
        </div>

        <div class="comments-center">
            <div class="content" ref="msgs" v-if="messages.length > 0">
                <Message v-for="msg in messages" :key="msg.id" :msg="msg" />
                <div />
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
            <div class="btn comment-send-button" @click="postComment">
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
    emits: ["loading"],
    setup(props, context) {
        const chars = ref("");
        const messages = ref([]);
        const msgs = ref(null);
        const bottom = ref(null);

        const emitLoading = (value) => {
            context.emit("loading", value);
        };

        const update = () => {
            try {
                emitLoading(true);

                chrome.runtime.sendMessage(
                    {
                        message: "getComments",
                        payload: {
                            bug_id: props.bug.id,
                        },
                    },
                    (response) => {
                        emitLoading(false);
                        messages.value = [];

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
                emitLoading(false);

                console.error(error);
            }
        };

        const postComment = () => {
            try {
                emitLoading(true);

                chrome.runtime.sendMessage(
                    {
                        message: "postComment",
                        payload: {
                            bug_id: props.bug.id,
                            data: {
                                content: chars.value,
                            },
                        },
                    },
                    (response) => {
                        emitLoading(false);

                        switch (response.message) {
                            case "error":
                                throw response.error;

                            case "ok":
                                console.info("Comment post request: ok!");
                                chars.value = "";
                                update();
                                break;
                        }
                    }
                );
            } catch (error) {
                emitLoading(false);

                console.error(error);
            }
        };

        onMounted(update);

        watch(props, update);

        watch(
            messages,
            () => {
                nextTick(() => {
                    msgs.value?.parentNode.scrollBy({
                        top: msgs.value?.scrollHeight,
                        behavior: "smooth",
                    });
                });
            },
            { deep: true }
        );

        return {
            messages,
            chars,
            bottom,
            msgs,
            postComment,
            update,
        };
    },
};
</script>