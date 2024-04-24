<template>
	<header class="flex justify-between border-b border-black">
		<NuxtLink
			to="/"
			class="text-2xl py-4"
		>
			Savoy Smash
		</NuxtLink>
		<nav class="justify-end">
			<menu class="h-full flex">
				<li>Some Nav Item?</li>
				<li>Site Search</li>
			</menu>
		</nav>
	</header>
	<div class="pt-4 max-w-8xl mx-auto">
		<slot />
	</div>
	<footer></footer>
</template>

<script lang="ts" setup></script>

<style lang="css">
	menu li {
		@apply px-4 py-2 text-lg self-center;
	}
</style>
