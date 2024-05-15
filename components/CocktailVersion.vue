<template>
	<div></div>
</template>

<script lang="ts" setup>
	interface Props {
		ingredients: { ingredient: string; amount: string; measurement: string };
		version: string;
		directions: string;
	}
	defineProps<Props>();
</script>

<style></style>
