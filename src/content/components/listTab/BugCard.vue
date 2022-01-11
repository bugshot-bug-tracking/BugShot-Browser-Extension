<template>
	<div class="bug-card">
		<div class="card">
			<div class="card-header bug-title" @click="info">
				{{ bug.attributes.designation }}
			</div>

			<div class="card-body">
				<div class="card-text d-flex justify-content-between">
					<div class="bug-deadline">
						{{
							bug.attributes.deadline
								? date(bug.attributes.deadline)
								: "No deadline"
						}}
					</div>
					<div
						class="bug priority"
						:class="'p' + bug.attributes.priority.id"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "BugCard",
	props: {
		bug: Object,
		status_name: String,
	},
	emits: ["info"],
	setup(props, context) {
		const date = (dateString) => {
			if (dateString === "" || dateString === null) return "";
			if (dateString.slice(-1).toUpperCase() !== "Z") dateString += "Z";

			return new Date(dateString).toLocaleString();
		};

		const info = () => {
			props.bug.attributes.status_name = props.status_name;
			context.emit("info", props.bug);
		};

		return {
			date,
			info,
		};
	},
};
</script>
