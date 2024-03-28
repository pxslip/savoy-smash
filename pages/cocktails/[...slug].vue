<template>
	<NuxtLayout>
		<main>
			<section>
				<!-- This is the md body content -->
				<ContentDoc />
			</section>
			<section>
				<h2>Versions</h2>
				<!-- Versions of the cocktail -->
				<ul v-for="{ title } in versions">
					<li>
						<h3>{{ title }}</h3>
					</li>
				</ul>
			</section>
		</main>
	</NuxtLayout>
</template>

<script lang="ts" setup>
	const { path } = useRoute();

	const { data: versions } = await useAsyncData(path, () => {
		return queryContent(`${path}/versions`).find();
	});
</script>

<style></style>
