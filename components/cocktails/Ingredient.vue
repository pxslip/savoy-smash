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

	const { data: ingredientData } = await useAsyncData(
		`${props.ingredient}-data`,
		() => queryContent(`/ingredients/${props.ingredient}`).findOne(),
	);
	const { data: measurementData } = await useAsyncData(
		`${props.measurement}-data`,
		() => queryContent(`/measurements/${props.measurement}`).findOne(),
	);

	const equivalence = computed(() => measurementData.value?.equivalence ?? 1);

	const decimalAmount = computed(() => fractionToDecimal(props.amount));
</script>

<style></style>
