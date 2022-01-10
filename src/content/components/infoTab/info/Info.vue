<template>
	<div id="info" class="d-flex flex-column no-wrap">
		<div class="justify-content-between mb-2">
			<div class="title">
				<div class="content">{{ bug.attributes.designation }}</div>
			</div>

			<div class="btn close-button" @click="$emit('close')" />
		</div>

		<div class="id">
			<label> ID: </label>
			<div class="content">{{ bug.id }}</div>
		</div>

		<div class="justify-content-between">
			<div class="creator">
				<label>Creator:</label>
				<div class="content">
					{{
						`${bug.attributes.creator.attributes.first_name} ${bug.attributes.creator.attributes.last_name}`
					}}
				</div>
			</div>
			<div class="date">
				<div class="content">{{ date(bug.attributes.created_at) }}</div>
			</div>
		</div>

		<div class="screenshot">
			<Screenshot :bug="bug" @loading="emitLoading" />
		</div>

		<div class="url">
			<label>URL:</label>
			<div class="content">
				<a :href="bug.url">{{ bug.attributes.url }}</a>
			</div>
		</div>

		<div class="description">
			<label>Description:</label>
			<div class="content">{{ bug.attributes.description }}</div>
		</div>

		<div id="technical" :class="{ open: open }">
			<div
				class="technical-label d-inline-flex justify-content-between"
				@click="open = !open"
			>
				<span>Technical information:</span>
				<img />
			</div>
			<div class="technical-info">
				<div class="os">
					<label>Operating System:</label>
					<div class="content">
						{{ bug.attributes.operating_system }}
					</div>
				</div>

				<div class="browser">
					<label>Browser:</label>
					<div class="content">{{ bug.attributes.browser }}</div>
				</div>

				<div class="selector">
					<label>Selector:</label>
					<div class="content">{{ bug.attributes.selector }}</div>
				</div>

				<div class="resolution">
					<label>Resolution:</label>
					<div class="content">
						{{ bug.attributes.resolution }}
					</div>
				</div>
			</div>
		</div>

		<div class="grid1x2 my-3">
			<div class="deadline grid1x2">
				<label>Priority:</label>
				<div
					class="content priority"
					:class="'p' + bug.attributes.priority.id"
				/>
			</div>

			<div class="grid1x2 status">
				<label>Status:</label>
				<div class="content status">
					{{ bug.attributes.status_name }}
				</div>
			</div>
		</div>

		<div class="deadline">
			<label>Deadline:</label>
			<div class="content">
				{{
					bug.attributes.deadline
						? date(bug.attributes.deadline)
						: "No deadline"
				}}
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import Screenshot from "../screenshot/Screenshot.vue";

export default {
	components: { Screenshot },
	name: "Info",
	props: { bug: Object },
	emits: ["close", "loading"],
	setup(props, context) {
		const open = ref(false);

		const emitLoading = (value) => {
			context.emit("loading", value);
		};

		const date = (dateString) => {
			if (dateString === "" || dateString === null) return "";
			if (dateString.slice(-1).toUpperCase() !== "Z") dateString += "Z";

			return new Date(dateString).toLocaleString();
		};

		return {
			open,
			date,
			emitLoading,
		};
	},
};
</script>
