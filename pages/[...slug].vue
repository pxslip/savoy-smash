<template>
	<NuxtLayout>
		<main>
			<ContentDoc />
		</main>
		<aside>
			<h2>Ingredients</h2>
			<ContentList path="/ingredients"></ContentList>
		</aside>
	</NuxtLayout>
</template>

<script lang="ts" setup></script>

<style></style>
