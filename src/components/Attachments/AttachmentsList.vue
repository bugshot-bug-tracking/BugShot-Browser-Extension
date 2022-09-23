<template>
	<section class="bs-container">
		<div class="header">
			<h1 text-5 m-0>{{ t("attachment", 2) }}</h1>

			<div flex items-center gap-2>
				<img
					src="/assets/icons/refresh.svg"
					alt="refresh"
					class="refresh-button"
					@click="emit('update')"
					v-if="!local"
				/>

				<label class="file-label black-to-green">
					<input type="file" multiple @change="upload" hidden />

					<img src="/assets/icons/attachment.svg" alt="attach" />
				</label>
			</div>
		</div>

		<div class="error" v-if="error != '' || err != ''">
			<span style="white-space: pre-line">{{ error }}</span>
			<span style="white-space: pre-line">{{ err }}</span>
		</div>

		<ul mt-2>
			<li v-for="(item, index) in list" :key="index">
				<slot name="item" v-bind="{ item, index }">
					<p>{{ index + " " + item }}</p>
				</slot>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
const props = defineProps({
	list: {
		required: true,
		type: Array,
	},
	error: {
		required: false,
		type: String,
		default: "",
	},
	local: {
		required: false,
		type: Boolean,
		default: false,
		description: "Hide refresh button when set to true",
	},
});

const emit = defineEmits<{
	(event: "update"): void;
	(event: "upload", files: File[]): void;
}>();

const { t } = useI18n();

let err = ref("");

const upload = (event: Event) => {
	let files = (event.target as HTMLInputElement).files;
	err.value = "";
	console.log(files);

	if (files == null) return;

	if (files.length > 10 || props.list.length + files.length > 10) {
		err.value = t("limits.max_files_limit", { x: 10 });
		return;
	}

	let errFlag = false;

	Array.prototype.forEach.call(files, (file: File) => {
		// if the file is bigger than 5 MiB
		if (file.size > 5 * (1 << 20)) {
			if (errFlag === false) {
				errFlag = true;
				err.value = t("limits.max_file_size_limit", { x: 5 });
			}

			err.value += ` - ${file.name}\n`;
		}
	});

	if (errFlag) return;

	emit("upload", Array.from(files));
};
</script>

<style lang="scss" scoped>
section {
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

.error {
	color: hsl(0, 90%, 60%);
	font-weight: bold;
	padding-bottom: 0.5rem;
	border-bottom: 1px solid hsl(240, 100%, 95%);
}

img {
	width: 1.5rem;
	height: 1.5rem;
}
</style>
