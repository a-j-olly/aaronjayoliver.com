// Tag Images
import typescript from '$lib/images/icons/typescript.svg';
import angular from '$lib/images/icons/angular.svg';
import aws from '$lib/images/icons/aws-light.svg';
import cloudflare from '$lib/images/icons/cloudflare-light.svg';
import javascript from '$lib/images/icons/javascript.svg';
import nodejs from '$lib/images/icons/nodejs-light.svg';
import svelte from '$lib/images/icons/svelte.svg';
import serverless from '$lib/images/icons/serverless.svg';
import ionic from '$lib/images/icons/ionic.svg';

// Project Images
import aaronjayoliver from '$lib/images/projects/aaronjayoliver.webp';
import neutrify from '$lib/images/projects/neutrify.webp';
import type { ProjectDetail } from 'shared_types';

export const projects: ProjectDetail[] = [
	{
		id: 1,
		name: 'aaronjayoliver.com',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		releaseDate: '2024-11-04T00:00:0.000Z',
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
			{ id: 7, name: 'Cloudflare', url: 'https://www.cloudflare.com/', image: cloudflare }
		]
	},
	{
		id: 2,
		name: 'Neutrify',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		releaseDate: '2022-03-00T00:00:0.000Z',
		image: neutrify,
		repositoryURL: 'https://github.com/a-j-olly/aaronjayoliver.com',
		presentationURL: 'https://aaronjayoliver.com',
		tags: [
			{ id: 2, name: 'Angular', url: 'https://angular.dev/', image: angular },
			{ id: 8, name: 'NodeJS', url: 'https://nodejs.org/', image: nodejs },
			{ id: 1, name: 'TypeScript', url: 'https://www.typescriptlang.org/', image: typescript },
			{ id: 4, name: 'AWS', url: 'https://aws.amazon.com/', image: aws },
			{ id: 6, name: 'Serverless', url: 'https://www.serverless.com/', image: serverless },
			{
				id: 3,
				name: 'JavaScript',
				url: 'https://www.w3schools.com/js/DEFAULT.asp',
				image: javascript
			},
			{ id: 9, name: 'Ionic', url: 'https://ionicframework.com/', image: ionic }
		]
	}
];
