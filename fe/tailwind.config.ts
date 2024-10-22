import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'dark-blue': '#2079c7'
			},
			aria: {
				current: 'current=page'
			},
			fontFamily: {
				sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
				serif: ['"Roboto Serif"', 'ui-serif']
			}
		}
	},

	plugins: []
} as Config;
