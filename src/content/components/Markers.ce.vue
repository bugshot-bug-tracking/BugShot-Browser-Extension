<template>
	<div v-if="markers.length > 0">
		<div v-for="(item, index) in markers" :key="index">
			<Marker
				v-for="(marker, index2) in item.attributes?.markers"
				:key="index2"
				:bug="{
					id: item.id,
					status_id: item.attributes.status.id,
					designation: item.attributes.designation,
					priority: item.attributes.priority_id,
				}"
				:marker="marker"
				@click.capture="
					openInfo({
						id: item.id,
						status_id: item.attributes.status.id,
					})
				"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import Marker from "./Marker.vue";

const markers = ref([]);

const getMarkers = () => {
	try {
		chrome.runtime.sendMessage(
			{
				message: "getMarkers",
			},
			(response) => {
				switch (response.message) {
					case "ok":
						markers.value = response.payload.filter(
							(x) => x.attributes.markers.length > 0
						);

						break;

					case "error":
						throw response.error;
						break;
				}
			}
		);
	} catch (error) {
		console.log(error);
	}
};

getMarkers();

const openInfo = (bug) => {
	emitter.emit("openInfoTab", bug);
};
</script>

<style lang="scss">
.marker {
	position: absolute;
	margin-left: -12px;
	margin-top: -42px;
	padding: 0px;

	transform: none;
	cursor: pointer;
	z-index: 20220401;

	img {
		width: 24px;
	}

	&:hover .wrapper {
		display: block;
	}
}

.wrapper {
	position: relative;
	display: none;

	.container {
		position: absolute;
		background-color: #f8f8fc;
		top: -46px;
		left: 18px;
		border-radius: 8px;
		min-height: 2rem;
		padding: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #e6e6ff;

		p {
			margin: unset;
			border-bottom: 2px solid #e6e6ff;
			width: max-content;
		}

		&::before {
			content: "";
			position: absolute;
			top: 9px;
			left: -20px;
			z-index: 0;
			width: 0;
			height: 0;
			border-top: 10px solid transparent;
			border-left: 10px solid transparent;
			border-bottom: 10px solid transparent;
			border-right: 10px solid #f8f8fc;
		}

		&::after {
			content: "";
			position: absolute;
			top: 8px;
			left: -22px;
			z-index: -1;
			width: 0;
			height: 0;
			border-top: 11px solid transparent;
			border-left: 11px solid transparent;
			border-bottom: 11px solid transparent;
			border-right: 11px solid #e6e6ff;
		}
	}
}
</style>
