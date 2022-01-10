<template>
	<div class="message-wrapper" :class="msg.sender === 0 ? `self` : `other`">
		<div class="content">
			<div class="message">{{ msg.content }}</div>
			<div class="timestamp">{{ date(msg.timestamp) }}</div>
		</div>

		<div class="creator">
			<div class="avatar">
				{{ msg.creator.first_name[0] + msg.creator.last_name[0] }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Message",
	props: {
		msg: Object,
	},
	setup() {
		const date = (dateString) => {
			if (dateString === "" || dateString === null) return "";
			if (dateString.slice(-1).toUpperCase() !== "Z") dateString += "Z";

			return new Date(dateString).toLocaleString();
		};

		return {
			date,
		};
	},
};
</script>
