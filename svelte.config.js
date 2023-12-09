import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		alias: {
			src: './src',
			utils: './src/utils',
			components: './src/components',
			styles: './src/styles',
			routes: './src/routes',
			stores: './src/stores',
			modules: './node_modules'
		}
	}
};

export default config;
