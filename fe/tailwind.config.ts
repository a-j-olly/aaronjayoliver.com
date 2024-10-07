import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'dark-blue': '#2079c7'
			}
		}
	},

	plugins: []
} as Config;
