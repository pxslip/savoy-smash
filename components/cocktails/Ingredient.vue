<template>
	<li>
		{{ props.amount }} {{ props.measurement }} ({{
			decimalAmount * equivalence
		}}
		oz) of {{ props.ingredient }}
	</li>
</template>

<script lang="ts" setup>
	interface Props {
		ingredient: string;
		amount: string;
		measurement: string;
	}

	const props = defineProps<Props>();

	const ingredientData = await useAsyncData(`${props.ingredient}-data`, () =>
		queryContent(`/ingredients/${props.ingredient}`).findOne(),
	);
	const { equivalence } = await useAsyncData(`${props.measurement}-data`, () =>
		queryContent(`/measurements/${props.measurement}`).findOne(),
	);

	const decimalAmount = fractionToDecimal(props.amount);
</script>

<style></style>
