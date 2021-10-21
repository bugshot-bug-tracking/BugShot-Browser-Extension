<template>
	<div class="bug-card">
		<div class="card">
			<div class="card-header bug-title" @click="$emit('info', bug)">
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
	props: { bug: Object },
	emits: ["info"],
	setup() {
		const date = (dateString) => {
			if (dateString === "" || dateString === null) return "";
			return new Date(dateString).toLocaleString();
		};

		return {
			date,
		};
	},
};
</script>
