<template>
	<ul>
		<li
			v-for="(item, index) in ingredients"
			:key="index"
		>
			<CocktailsIngredient
				:amount="item.amount"
				:measurement="item.measurement"
				:ingredient="item.ingredient"
			/>
		</li>
	</ul>
	<p>{{ directions }}</p>
</template>

<script lang="ts" setup>
	interface Props {
		ingredients: { ingredient: string; amount: string; measurement: string }[];
		directions: string;
	}
	defineProps<Props>();
</script>

<style></style>
