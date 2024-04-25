<template>
	<cite>
		Harry Craddock, <em>The Savoy Cocktail Book</em>, Page {{ page }}
	</cite>
</template>

<script lang="ts" setup>
	interface Props {
		page: number;
	}

	defineProps<Props>();
</script>

<style></style>
