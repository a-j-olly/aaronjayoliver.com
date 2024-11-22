import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [sveltekit(), enhancedImages()],
	test: {
		include: ['tests/**/*.{test,spec}.{js,ts}']
	},
	resolve: process.env.VITEST
	? {
			conditions: ['browser']
		}
	: undefined
});
