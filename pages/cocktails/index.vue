<template>
	<ContentList
		path="/cocktails"
		v-slot="{ list }"
	>
		<ul>
			<li v-for="drink in list">
				<NuxtLink :to="drink._path">{{ drink.title }}</NuxtLink>
			</li>
		</ul>
	</ContentList>
</template>
