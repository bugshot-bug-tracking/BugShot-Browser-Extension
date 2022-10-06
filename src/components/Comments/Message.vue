<template>
	<div class="message-wrapper" :class="{ owner: owner }">
		<div class="content">
			<div class="message" ref="node">{{ content }}</div>
			<div class="timestamp">{{ d(dateFix(timestamp), "short") }}</div>
		</div>

		<Avatar
			:first_name="creator.first_name"
			:last_name="creator.last_name"
			size="S"
			class="mt-0"
			:color="owner ? colors[3] : colors[4]"
		/>
	</div>
</template>

<script setup lang="ts">
import dateFix from "~/util/dateFixISO";
import colors from "~/util/colors";
import { useI18n } from "vue-i18n";

const props = defineProps({
	content: {
		required: true,
		type: String,
	},
	creator: {
		required: true,
		type: Object,
	},
	owner: {
		required: true,
		type: Boolean,
		default: false,
	},
	timestamp: {
		required: true,
		type: String,
	},
});

const { d } = useI18n();

const node = ref(null);

onMounted(() => {
	// single instance as 1 group
	let regex1 = /(\<[0-9]+\$\@.+?\>)/i;
	// grouped by data type (id,tag)
	let regex2 = /\<([0-9]+)\$\@(.+?)\>/i;

	let parts = props.content.split(regex1);
	node.value.innerText = "";

	for (const part of parts) {
		let match = part.match(regex2);

		if (!match) node.value.append(part);
		else {
			let tag = document.createElement("span");
			tag.className = "tagged";
			tag.textContent = "@" + match[2];
			tag.style.color = "#7A2EE6";

			node.value.append(tag);
		}
	}
});
</script>

<style lang="scss" scoped>
.message-wrapper {
	display: inline-flex;
	width: 100%;
	margin: 0.5rem 0;
	flex-direction: row-reverse;

	.content {
		display: flex;
		flex-direction: column;
		width: 100%;
		text-align: start;
		align-items: flex-start;

		.message {
			font-size: 0.875rem;
			background: hsl(230, 43%, 95%);
			border-radius: 1.25rem;
			position: relative;
			padding: 0.5rem 1rem;
			margin: 0 0.5rem;
			max-width: 75%;
			overflow-wrap: anywhere;

			&::before {
				border-width: 0.6rem;
				border-style: solid;
				border-color: hsl(230, 43%, 95%) transparent transparent
					transparent;
				content: "";
				position: absolute;
				top: 0;
				left: -0.25rem;
				right: unset;
			}
		}

		.timestamp {
			font-size: 0.75rem;
			margin: 0 1rem;
		}
	}

	&.owner {
		flex-direction: row;

		.content {
			align-items: flex-end;

			.message::before {
				right: -0.25rem;
				left: unset;
			}
		}
	}
}
</style>
