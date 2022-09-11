<template>
	<article class="bs-tab" gap-4>
		<section class="bs-container">
			<h3 flex justify-between m-0 mb-6>
				Bug nr. #{{ id }}

				<img
					src="/assets/icons/close_2.svg"
					alt="X"
					@click="emit('close')"
					cursor-pointer
				/>
			</h3>

			<div text-3>
				<div
					grid
					style="grid-template-columns: auto 1fr; gap: 0.5rem 0.5rem"
				>
					<h4>No:</h4>
					<p>{{ "125-nb" }}</p>

					<h4>By:</h4>
					<p>
						{{ "Radu Memetea" }}
						<span class="black-to-gray">
							@
							{{ "25.10.2020 12:00 PM" }}
						</span>
					</p>
				</div>
			</div>

			<div class="screenshot-viewer" my-40 />

			<div flex mb-4 gap-2>
				<h4>URL:</h4>

				<a href="" style="font-size: 0.875rem">
					<p>https://www......</p>
				</a>
			</div>

			<div mb-4>
				<h4 pb-2>Description</h4>

				<p style="font-size: 0.875rem">{{ "a lot of text here" }}</p>
			</div>

			<div class="technical" :class="{ open: open }">
				<h4 pb-2 flex justify-between @click="open = !open">
					Technical Info

					<img
						src="/assets/icons/arrow_down.svg"
						alt="arrow down"
						cursor-pointer
					/>
				</h4>

				<div grid grid-cols-2 style="font-size: 0.875rem">
					<h5>Operating System:</h5>
					<p class="black-to-gray">Windows 10</p>

					<h5>Browser:</h5>
					<p class="black-to-gray">Firefox</p>

					<h5>Selector:</h5>
					<p class="black-to-gray">body > div > p</p>

					<h5>Resolution:</h5>
					<p class="black-to-gray">1920x1080</p>
				</div>
			</div>

			<hr my-4 />

			<div>
				<div class="priority">Priority</div>

				<div class="status">Status</div>

				<div class="deadline">Deadline</div>
			</div>

			<hr my-4 />

			<div>Assigned to: ........</div>
		</section>

		<!-- <section>
			<AttachmentsList
				:list="list"
				:error="attachments.error"
				@update="attachments.update"
				@upload="attachments.upload"
			>
				<template #item="{item}">
					<AttachmentsItem
						:name="item.attributes.designation"
						:id="item.id"
						@download="attachments.download"
						@delete="attachments.delete"
					/>
				</template>
			</AttachmentsList>
		</section> -->
	</article>
</template>

<script setup lang="ts">
import axios from "axios";

const props = defineProps({
	id: {
		required: true,
		type: String,
		description: "Bug ID",
	},
});

const emit = defineEmits(["close"]);

const open = ref(false);

const list = ref([
]);

const attachments = reactive({
	error: "",

	upload: (files: File[]) => {
		files.forEach((f) =>
			list.value.push({ id: 5, attributes: { designation: f.name } })
		);
	},

	download: (id: string) => {
		axios
			.get(`bugs/${props.id}/attachments/${id}`, {
				headers: {
					"include-attachment-base64": "true",
				},
			})
			.then((response) => {
				const link = document.createElement("a");
				link.href = atob(response.data.data.attributes.base64);
				link.setAttribute(
					"download",
					response.data.data.attributes.designation
				); //or any other extension
				link.id = "downloadAttachmentA";
				document.body.appendChild(link);
				link.click();
				link.remove();
			})
			.catch((error) => {
				console.log(error);
			});
	},

	delete: (id: string) => {
		axios
			.delete(`bugs/${props.id}/attachments/${id}`)
			.then(() => {
				attachments.update();
			})
			.catch((error) => {
				console.log(error);
			});
	},

	update: () => {},
});
</script>

<style lang="scss" scoped>
h3 {
	margin: 0 0 0.5rem 0;
	padding-bottom: 0.5rem;
}

h4,
h5 {
	margin: unset;
}

.statuses {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	height: 100%;
	max-height: 100%;
	overflow: auto;
	padding: 0 0.5rem 1rem 0;
	margin: 1rem 0 0 0;
}

.technical {
	div {
		max-height: 0;
		overflow: hidden;
	}

	img {
		transition: 0.3s;
	}

	&.open {
		h4 img {
			transition: 0.3s;
			transform: rotate(180deg);
		}
		div {
			max-height: initial;
			transition: max-height 0.3s ease-out;
		}
	}
}
</style>
