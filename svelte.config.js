import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// Static adapter options
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // For SPA mode
			precompress: false,
			strict: true
		})
	}
};

export default config;
