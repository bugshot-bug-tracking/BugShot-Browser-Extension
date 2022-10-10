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

		const update = async () => {
			try {
				emitLoading(true);

				let response = await new Promise((resolve) => {
					chrome.runtime.sendMessage(
						{
							message: "getComments",
							payload: {
								bug_id: props.bug.id,
							},
						},
						resolve
					);
				});

				switch (response.message) {
					case "error":
						emitLoading(false);
						throw response.error;

					case "ok":
						console.info("Request get comments: ok!");
						messages.value = [];

						let user = await new Promise((resolve) => {
							chrome.runtime.sendMessage(
								{
									message: "user",
								},
								resolve
							);
						});

						response.payload.forEach((comment) => {
							messages.value.push({
								id: comment.id,
								content: comment.attributes.content,
								timestamp: comment.attributes.created_at,
								creator: {
									first_name:
										comment.attributes.user.first_name,
									last_name:
										comment.attributes.user.last_name,
								},
								sender:
									comment.attributes.user.id ===
									user.payload.id
										? 0
										: 1,
							});
						});
						emitLoading(false);
						break;
				}
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
							content: chars.value,
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
