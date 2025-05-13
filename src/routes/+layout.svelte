<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';

	let { children } = $props();

	// Get the current URL path
	let pathname = $derived(page.url.pathname);
</script>

<div class="flex flex-col min-h-screen">
	<Header {pathname} />

	<main class="flex-grow">
		{@render children()}
	</main>

	<Footer />
</div>
