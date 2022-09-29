<template>
	<section class="bs-container">
		<div class="header">
			<h1 text-5 m-0>{{ t("comment", 2) }}</h1>

			<div flex items-center gap-2>
				<img
					src="/assets/icons/refresh.svg"
					alt="refresh"
					class="refresh-button"
					@click="update"
				/>
			</div>
		</div>

		<ul class="bs-scroll s-green" mt-2>
			<li class="content" ref="msgs" v-if="comments.length > 0">
				<Message
					v-for="comment of comments"
					:key="comment.id"
					:content="comment.attributes.content"
					:timestamp="comment.attributes.created_at"
					:creator="{
						first_name: comment.attributes.user.first_name,
						last_name: comment.attributes.user.last_name,
					}"
					:owner="user.id === comment.attributes.user.id"
				/>

				<div />
			</li>
		</ul>

		<div class="comments-bottom">
			<div class="comments-bottom-header">
				<span>{{ t("add.comment") }}</span>

				<div :class="{ 'over-limit': messageLength > 250 }">
					{{ messageLength }} / 250
				</div>
			</div>

			<vue-tribute :options="options" style="width: 100%">
				<div
					id="comment-input"
					contenteditable="true"
					ref="message"
					class="bs-scroll"
					data-max-length="250"
					@input="setLength"
					@paste="paste"
				/>
			</vue-tribute>

			<div
				:hidden="messageLength <= 250"
				style="
					font-size: 0.875rem;
					color: red;
					align-self: start;
					margin-top: -0.5rem;
				"
			>
				{{ t("limits.characters_exceeded") }}
			</div>

			<div
				class="bs-btn green"
				:class="{ disabled: messageLength > 250 }"
				@click="postComment"
				self-end
			>
				{{ t("add.comment") }}
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import axios from "axios";
import { VueTribute } from "vue-tribute";
import colors from "~/util/colors";
import { maxlengthContentEditable } from "~/util/maxlength-contenteditable.js";
import { useAuthStore } from "~/stores/auth";
import { useMainStore } from "~/stores/main";
import { useI18n } from "vue-i18n";

const props = defineProps({
	bug_id: {
		required: true,
		type: String,
	},
	comments: {
		required: true,
		type: Array,
	},
});

const { t } = useI18n();

const store = useMainStore();

const message = ref("");
const msgs = ref(null);
const lock = ref(false); // prevent send button spam
const messageLength = ref(0);

const user = computed(() => {
	return useAuthStore().getUser;
});

const projectTeam = computed(() => {
	return [
		store.getProject.attributes.creator,
		...store.getProjectUsers,
	].filter((x) => x);
});

// tributejs options
const options = reactive({
	trigger: "@",

	// the list from where the suggestions ar taken (key and value are mandatory for search)
	values: projectTeam.value?.map((x) => ({
		key: `${x.attributes.first_name} ${x.attributes.last_name}`,
		...x,
		value: x.id,
	})),

	// inserted template in the input div
	selectTemplate: (item) => {
		return `<span class="comment-tag" contenteditable="false" value=${item.original.value}>@${item.original.key} <p hidden>$${item.original.value}$$</p></span>`;
	},

	// template used for the suggest menu items
	menuItemTemplate: (item) => {
		console.log(item);

		return `
			<div class="avatar"
				style="background-color: ${
					colors[
						(item.original.attributes.first_name.charCodeAt(0) +
							item.original.attributes.last_name.charCodeAt(0)) %
							7
					]
				};"
			>
				${
					item.original.attributes.first_name[0] +
					item.original.attributes.last_name[0]
				}
			</div>
			<div class="name">
				${
					item.original.attributes.first_name +
					" " +
					item.original.attributes.last_name
				}
			</div>
		`;
	},

	// class added on the selected item (includes hover action)
	selectClass: "tag-select",

	// overall menu class
	containerClass: "tag-container",
});

const postComment = async () => {
	let content = message.value.innerText;

	if (content.length < 1 || content.length > 250 || lock.value) return;
	lock.value = true;

	try {
		const tagNodes = message.value.querySelectorAll(
			"span[value].comment-tag"
		);

		let taggedUsers = [];
		tagNodes.forEach((node) => {
			taggedUsers.includes(node.attributes.value.value)
				? null
				: taggedUsers.push(node.attributes.value.value);
			node.innerText = `<${node.attributes.value.value}$${node.innerText}>`;
		});

		content = message.value.innerText;
		message.value.innerText = "";
		messageLength.value = 0;

		await axios
			.post(`bugs/${props.bug_id}/comments`, {
				bug_id: props.bug_id,
				content: content,
				tagged: taggedUsers.map((x) => ({ user_id: x })),
			})
			.then(() => {
				update();
				lock.value = false;
			});
	} catch (error) {
		lock.value = false;

		console.log(error);
	}
};

const paste = (event) => {
	event.preventDefault();

	var text = event.clipboardData.getData("text/plain");

	document.execCommand("insertText", false, text);
};

const setLength = (event) => {
	// textContent takes into consideration the hidden characters so that the limit includes the overhead for saving
	messageLength.value = event.target.textContent.length;
};

const update = () => {
	store.fetchComments(props.bug_id);
};

const scrollToBottom = () => {
	nextTick(() => {
		msgs.value?.parentNode.scrollBy({
			top: msgs.value?.scrollHeight,
			behavior: "smooth",
		});
	});
};

scrollToBottom();

watch(props, () => scrollToBottom(), { deep: true });

onMounted(() => {
	maxlengthContentEditable();
});
</script>

<style lang="scss" scoped>
section {
	min-height: 500px;
	position: relative;
}

.header {
	display: inline-flex;
	justify-content: space-between;
	width: 100%;

	.file-label {
		cursor: pointer;
		transition: 0.3s;

		img {
			width: 2rem;
			height: 2rem;
		}

		&:hover {
			color: #7a2ee6;
			filter: brightness(0) saturate(1) invert(18%) sepia(72%)
				saturate(5384%) hue-rotate(263deg) brightness(94%) contrast(92%);
		}
	}

	.refresh-button {
		cursor: pointer;

		&:hover {
			color: #18d992;
			filter: brightness(0) saturate(1) invert(63%) sepia(74%)
				saturate(493%) hue-rotate(104deg) brightness(96%) contrast(88%);
		}
	}
}

img {
	width: 1.5rem;
	height: 1.5rem;
}

ul {
	margin: 10px 0;
	height: 100%;
	overflow: auto;
	scroll-behavior: auto;
	padding-right: 10px;
}

.comments-bottom {
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	.comments-bottom-header {
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin: 0.5rem 0;

		> span {
			font-weight: 500;
		}

		> div {
			font-size: 0.75rem;
		}

		.over-limit {
			color: red;
		}
	}

	#comment-input {
		width: 100%;
		border: 1px solid hsl(265, 80%, 80%);
		border-radius: 0.75rem;
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
		transition: ease-out 0.1s;
		resize: none;
		margin-bottom: 0.5rem;
		line-height: 1.5;
		text-align: left;
		height: 4.5rem;
		max-height: 4.5rem;

		appearance: textarea;

		&::-webkit-scrollbar {
			display: none;
		}

		&:focus-visible {
			outline: unset;
			border: 1px solid hsl(265, 80%, 50%);
			transition: ease-in 0.1s;
		}
	}
}
</style>

<style lang="scss">
.comment-tag {
	background: #9ba5d7;
	border-radius: 4px;
	padding: 1px 2px;
	color: white;
	white-space: nowrap;
	font-size: 13px;
}

.tag-container {
	z-index: 20;

	ul {
		list-style: none;
		margin: unset;
		padding: unset;
		box-shadow: 0px 3px 6px #00000029;
		border: 1px solid #eee5fc;
		background-color: #fff;

		li {
			padding: 8px 20px 8px 8px;
			display: flex;
			align-items: center;
			gap: 8px;
			transition: 0.25s;
			max-width: 300px;
		}
	}

	.avatar {
		color: hsl(0, 0%, 100%);
		background-color: hsl(265, 80%, 50%);
		font-size: 12px;
		padding: 8px;
		border-radius: 25px;
		height: 32px;
		width: 32px;

		text-align: center;
		text-transform: uppercase;

		display: flex;
		align-items: center;
		justify-content: center;
	}
}

.tag-select {
	background-color: #c2f8e4;
	padding: 8px 8px 8px 20px !important;
}

.tribute-container {
	z-index: 20;
}
</style>
