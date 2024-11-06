// Tag Images
import typescript from '$lib/images/icons/typescript.svg';
import cloudflare from '$lib/images/icons/cloudflare-light.svg';
import javascript from '$lib/images/icons/javascript.svg';
import svelte from '$lib/images/icons/svelte.svg';
import tailwindcss from '$lib/images/icons/tailwindcss.svg';

// Project Images
import aaronjayoliver from '$lib/images/projects/aaronjayoliver.webp';
import type { ProjectDetail } from 'shared_types';

export const projects: ProjectDetail[] = [
	{
		id: 1,
		name: 'aaronjayoliver.com',
		description:
			'A portfolio website developed using SvelteKit that serves as an advertisement of my professional web development skills. The UI design philosophy was to be bold but not garish; simple, yet feature complete.<br><br>The site has lightning fast load times due to it being fully pre-rendered. There is no supporting backend infrastructure, with the exception of hosting the application on Cloudflare. This results in a site that is free to maintain (within parameters), but with the drawback of needing to commit a code change whenever data must be updated.',
		releaseDate: '2024-11-04T00:00:00.000Z',
		updatedDate: '2024-11-04T00:00:00.000Z',
		image: aaronjayoliver,
		repositoryURL: 'https://github.com/a-j-olly/aaronjayoliver.com',
		presentationURL: 'https://aaronjayoliver.com',
		tags: [
			{ id: 5, name: 'Svelte', url: 'https://svelte.dev/', image: svelte },
			{
				id: 3,
				name: 'JavaScript',
				url: 'https://www.w3schools.com/js/DEFAULT.asp',
				image: javascript
			},
			{ id: 1, name: 'TypeScript', url: 'https://www.typescriptlang.org/', image: typescript },
			{ id: 7, name: 'Cloudflare', url: 'https://www.cloudflare.com/', image: cloudflare },
			{ id: 10, name: 'TailwindCSS', url: 'https://tailwindcss.com/', image: tailwindcss }
		]
	}
];
