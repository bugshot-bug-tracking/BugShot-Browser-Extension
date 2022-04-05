<template>
	<div v-if="markers.length > 0">
		<div v-for="(item, index) in markers" :key="index">
			<div
				v-for="(marker, index2) in item.attributes?.markers"
				:key="index2"
			>
				<Marker
					:data="marker"
					:priority="item.attributes.priority_id"
					@click="openInfo"
				/>
			</div>
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
				console.log(response);

				switch (response.message) {
					case "ok":
						markers.value = response.payload;
						break;

					case "error":
						throw response.error;
						break;
				}
			}
		);
	} catch (error) {
		console.error(error);
	}
};

getMarkers();

const openInfo = (value) => {
	console.log(value);
};
</script>

<style lang="scss">
.marker {
	position: absolute;
	margin-left: -9px;
	margin-top: -32px;
	padding: 0px;

	transform: none;
	cursor: pointer;
	z-index: 20220401;

	img {
		width: 18px;
	}
}
</style>
