import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter(),
		alias: {
			src: './src',
			utils: './src/utils',
			components: './src/components',
			styles: './src/styles',
			lib: './lib',
			routes: './src/routes',
			stores: './src/stores',
			modules: './node_modules'
		}
	}
};

export default config;
