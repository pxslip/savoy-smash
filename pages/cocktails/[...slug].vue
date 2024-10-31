<template>
	<NuxtLayout>
		<main>
			<ContentDoc>
				<template v-slot="{ doc }">
					<article>
						<h1>{{ doc.title }}</h1>
						<ContentRenderer :value="doc" />
					</article>
					<aside>
						<h2>Versions</h2>
						<ContentList
							:path="`${doc._path}/versions`"
							v-slot="{ list }"
						>
							<ul>
								<li v-for="version in list">
									<CocktailsVersion
										:ingredients="version.ingredients"
										:directions="version.directions"
									/>
								</li>
							</ul>
						</ContentList>
					</aside>
				</template>
			</ContentDoc>
		</main>
	</NuxtLayout>
</template>

<script lang="ts" setup>
	// const { path } = useRoute();

	// const { data: versions } = await useAsyncData(path, () => {
	// 	return queryContent(`${path}/versions`).find();
	// });
</script>

<style></style>
