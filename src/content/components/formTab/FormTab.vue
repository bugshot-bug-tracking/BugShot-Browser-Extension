<template>
	<Tab>
		<State :show="state !== null" :state="state" />

		<Container>
			<ProjectShow />
		</Container>

		<Container v-if="state === null">
			<form id="bug-form" @submit.prevent="submit">
				<h5 style="text-align: center">New Bug Report</h5>

				<div class="form-group">
					<input
						type="text"
						class="form-control"
						id="bug-name"
						placeholder="Enter bug name."
						required
						v-model="bug.name"
						minlength="5"
						maxlength="250"
					/>
				</div>

				<div class="form-group">
					<textarea
						class="form-control"
						id="bug-description"
						rows="3"
						placeholder="Describe the bug."
						v-model="bug.description"
						maxlength="250"
					></textarea>
				</div>

				<div
					class="form-group d-flex justify-content-evenly mb-lg-2 flex-wrap"
				>
					<div class="form-check form-check-inline">
						<input
							class="form-check-input option critical"
							type="radio"
							name="inlineRadioOptions"
							value="4"
							v-model="bug.priority"
						/>
					</div>

					<div class="form-check form-check-inline">
						<input
							class="form-check-input option important"
							type="radio"
							name="inlineRadioOptions"
							value="3"
							v-model="bug.priority"
						/>
					</div>

					<div class="form-check form-check-inline">
						<input
							class="form-check-input option normal"
							type="radio"
							name="inlineRadioOptions"
							value="2"
							v-model="bug.priority"
							checked
						/>
					</div>

					<div class="form-check form-check-inline">
						<input
							class="form-check-input option minoir"
							type="radio"
							name="inlineRadioOptions"
							value="1"
							v-model="bug.priority"
						/>
					</div>
				</div>
				<div class="d-inline-flex justify-content-evenly my-2">
					<button
						id="form-submit"
						type="submit"
						class="btn btn-primary"
					>
						<span>Report Bug!</span>
					</button>

					<button
						id="form-reset"
						type="reset"
						class="btn"
						@click="$emit('default')"
					>
						<span>Cancel</span>
					</button>
				</div>
			</form>
		</Container>

		<Container v-if="state === null">
			<Attachments :bug="bug" :isRemote="false" @getLocal="localFiles" />
		</Container>
	</Tab>
</template>

<script>
import { ref } from "vue";

import Tab from "../global/tab/Tab.vue";
import Container from "../global/container/Container.vue";
import State from "../global/state/State.vue";
import Attachments from "../global/attachment/Attachments.vue";
import ProjectShow from "../global/project/ProjectShow.vue";

export default {
	components: { State, Tab, Container, Attachments, ProjectShow },
	name: "FormTab",
	props: { bug: Object },
	emits: ["default"],
	setup(props, context) {
		// good for form reset, debatable if really needed
		const state = ref(null);
		const files64 = ref([]);

		const submit = () => {
			props.bug.priority = Number(props.bug.priority);

			state.value = "loading";

			chrome.runtime.sendMessage(
				{
					message: "sendBug",
					payload: props.bug,
				},
				(response) => {
					if (response.message === "error") {
						state.value = "error";

						setTimeout(function () {
							context.emit("default");
						}, 3800);

						console.error(response.error);
						return;
					}

					if (response.message !== "ok") {
						context.emit("default");
						console.error(
							"Something went wrong with the the bug report!"
						);
						return;
					}

					console.log(response.payload);
					console.log("Bug report sent!");

					submitAttachments(response.payload.id).then(() => {
						console.log("Bug attachments sent!");

						state.value = "success";

						setTimeout(function () {
							context.emit("default");
						}, 3800);
					});
				}
			);
		};

		const submitAttachments = (bug_id) => {
			let filesPromises = files64.value.map((file) => {
				return new Promise((resolve, reject) => {
					chrome.runtime.sendMessage(
						{
							message: "saveAttachment",
							payload: {
								data: file.attributes,
								bug_id: bug_id,
							},
						},
						(response) => {
							console.log(response);

							switch (response.message) {
								case "error":
									reject(response.error);

								case "ok":
									console.info("Attachments Uploaded.");
									resolve(response.payload);
									break;
							}
						}
					);
				});
			});

			return Promise.all(filesPromises);
		};

		// get a reference to the file uploaded via attachments component
		const localFiles = (files) => {
			files64.value = files.value;
		};

		return { state, submit, localFiles };
	},
};
</script>
