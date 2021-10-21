<template>
	<Container class="project">
		<div class="top">{{ project.attributes.designation }}</div>

		<div class="bottom">
			<span>Company: </span>
			{{ project.attributes.company.designation }}
		</div>
	</Container>
</template>

<script>
import Container from "../../../content/components/global/container/Container.vue";
export default {
	components: { Container },
	name: "Project",
	props: {
		project: {
			type: Object,
			required: true,
			note: "Project to show",
		},
	},
};
</script>

<style lang="scss">
.content-container.project {
	width: 95%;
	padding: 0;

	.top {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 22px;
		font-weight: 600;
		color: white;

		background: hsl(265, 80%, 50%);
		height: 70px;
		border-radius: 15px 15px 0 0;
	}

	.bottom {
		height: 37px;
		display: flex;
		align-items: center;
		font-weight: 500;
		width: 90%;
		margin: auto;
		justify-content: space-between;
		font-size: 16px;
		margin-bottom: 6px;
	}
}
</style>
