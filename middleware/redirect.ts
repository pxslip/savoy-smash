export default defineNuxtRouteMiddleware((to, from) => {
	const { page } = useContent();
	if (page.redirect && page.redirect !== to.path) {
		return navigateTo(page.redirect, { redirectCode: 301 });
	}
});
