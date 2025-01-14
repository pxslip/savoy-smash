<template>
	<label>
		Ingredient
		<input
			type="text"
			name="ingredient"
			placeholder="Ingredient"
			v-model="ingredient"
			ref="ingredientInput"
			:list="ingredientListId"
		/>
		<datalist :id="ingredientListId">
			<option
				v-for="ingredient in ingredientList"
				:value="ingredient._path"
				:label="ingredient.title"
			></option>
		</datalist>
	</label>
	<label>
		Amount
		<input
			type="number"
			name="amount"
			placeholder="Amount"
			v-model="amount"
		/>
	</label>
	<label>
		Unit
		<input
			type="text"
			name="unit"
			placeholder="Unit"
			v-model="unit"
			:list="unitListId"
		/>
	</label>
	<datalist :id="unitListId">
		<option
			v-for="unit in measurementList"
			:value="unit._path"
			:label="unit.title"
		></option>
	</datalist>
</template>

<script lang="ts" setup>
	import { useId } from 'vue';
	const ingredient = defineModel('ingredient');
	const amount = defineModel('amount');
	const unit = defineModel('unit');
	const ingredientInput = ref<HTMLInputElement | null>(null);

	onMounted(() => {
		// at first mount, focus the ingredient entry box
		ingredientInput.value?.focus();
	});

	const ingredientListId = useId();
	const { data: ingredientList } = useAsyncData('ingredients', () =>
		queryContent('/ingredients').find(),
	);
	const unitListId = useId();
	const { data: measurementList } = useAsyncData('measurements', () =>
		queryContent('/measurements').find(),
	);
</script>

<style></style>
