<template>
	<h1>Generate Recipe JSON</h1>
	<div class="flex flex-col gap-2 mt-4">
		<label>
			<span class="inline-block w-1/6">Version:</span>
			<input
				type="text"
				v-model="version"
				class="w-5/6"
			/>
			<datalist></datalist>
		</label>
		<label>
			<span class="inline-block w-1/6">Source:</span>
			<input
				type="text"
				v-model="source"
				:list="sourceListId"
				class="w-5/6"
			/>
			<datalist :id="sourceListId">
				<option
					v-for="source in sourceList"
					:value="source._path"
					:label="`${source.title} by ${source.author}`"
				></option>
			</datalist>
		</label>
		<label class="flex flex-row">
			<span class="self-center inline-block w-1/6">Directions:</span>
			<textarea
				v-model="directions"
				class="w-5/6"
			></textarea>
		</label>
		<h2>Ingredients</h2>
		<ul>
			<li
				v-for="ingredient in ingredients"
				class="flex flex-row justify-between"
			>
				<GeneratorIngredientRow
					v-model:amount="ingredient.amount"
					v-model:ingredient="ingredient.ingredient"
					v-model:unit="ingredient.unit"
				/>
			</li>
		</ul>
		<button
			type="button"
			class="border border-black rounded-sm"
			@click="addIngredient"
		>
			Add Ingredient
		</button>
		<textarea
			v-model="output"
			class="w-full"
		></textarea>
		<button
			type="button"
			class="border border-black rounded-sm"
			@click="reset"
		>
			Reset
		</button>
	</div>
</template>

<script lang="ts" setup>
	import type { Ingredient } from '~/types/cocktail.schema';
	import { useId } from 'vue';

	const version = ref('original');
	const source = ref('/sources/savoy-cocktail-book-harry-craddock');
	const directions = ref('Shake well and strain into a cocktail glass.');

	const ingredients: Ref<Ingredient[]> = ref([]);
	const addIngredient = () => {
		const ingredient = reactive({
			ingredient: '',
			amount: 0,
			unit: '',
		});
		ingredients.value.push(ingredient);
	};

	const reset = () => {
		version.value = 'original';
		source.value = '/sources/savoy-cocktail-book-harry-craddock';
		directions.value = 'Shake well and strain into a cocktail glass.';
		ingredients.value = [];
	};

	const output = computed(() => {
		return JSON.stringify({
			$schema: '../../../../schemas/cocktail.schema.json',
			version: version.value,
			source: source.value,
			directions: directions.value,
			ingredients: ingredients.value,
		});
	});

	const sourceListId = useId();
	const { data: sourceList } = useAsyncData('sources', () =>
		queryContent('/sources').find(),
	);
</script>

<style></style>
