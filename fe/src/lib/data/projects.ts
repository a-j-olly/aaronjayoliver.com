// Tag Icons
import typescript from '$lib/images/icons/typescript.svg';
import angular from '$lib/images/icons/angular.svg';
import aws from '$lib/images/icons/aws-light.svg';
import cloudflare from '$lib/images/icons/cloudflare-light.svg';
import javascript from '$lib/images/icons/javascript.svg';
import nodejs from '$lib/images/icons/nodejs-light.svg';
import svelte from '$lib/images/icons/svelte.svg';
import serverless from '$lib/images/icons/serverless.svg';
import ionic from '$lib/images/icons/ionic.svg';
import tailwindcss from '$lib/images/icons/tailwindcss.svg';
import cordova from '$lib/images/icons/cordova.svg';
import lambda from '$lib/images/icons/lambda.svg';
import dynamodb from '$lib/images/icons/dynamodb.svg';
import jest from '$lib/images/icons/jest.svg';
import postgresql from '$lib/images/icons/postgresql-dark.svg';
import terraform from '$lib/images/icons/terraform-dark.svg';
import vitest from '$lib/images/icons/vitest-dark.svg';

// Project Images
import aaronjayoliver from '$lib/images/projects/aaronjayoliver.webp';
import neutrify from '$lib/images/projects/neutrify.webp';
import asyncRestAPI from '$lib/images/projects/async-rest-api.webp';
import serverlessGQLAPI from '$lib/images/projects/serverless-gql-api.webp';

import type { ProjectDetail } from 'shared_types';

export const projects: ProjectDetail[] = [
	{
		id: 1,
		name: 'Neutrify',
		description: `I founded Neutrify to provide a tool to help control the news articles we see. 
			It is a news aggregator that presents the news tagged with AI derived metrics to improve transparency and filterability. 
			The application is distributed via the web and the Google Play store.<br><br>
			It is a full stack application built with AWS Amplify, AppSync, DynamoDB, and TypeScript ETL jobs running on Lambda. 
			OAuth2.0 user account authentication is implemented using Amazon Cognito, and CI/CD is handled in AWS CodePipeline.`,
		releaseDate: '2019-11-01T00:00:00.000Z',
		updatedDate: '2021-08-14T00:00:00.000Z',
		image: neutrify,
		repositoryURL: 'https://github.com/Neutrify/neutrify',
		tags: [
			{ id: 2, name: 'Angular', url: 'https://angular.dev/', image: angular },
			{ id: 8, name: 'NodeJS', url: 'https://nodejs.org/', image: nodejs },
			{
				id: 1,
				name: 'TypeScript',
				url: 'https://www.typescriptlang.org/',
				image: typescript
			},
			{ id: 4, name: 'AWS', url: 'https://aws.amazon.com/', image: aws },
			{
				id: 6,
				name: 'Serverless',
				url: 'https://www.serverless.com/',
				image: serverless
			},
			{
				id: 3,
				name: 'JavaScript',
				url: 'https://www.w3schools.com/js/DEFAULT.asp',
				image: javascript
			},
			{
				id: 9,
				name: 'Ionic',
				url: 'https://ionicframework.com/',
				image: ionic
			},
			{ id: 13, name: 'Cordova', url: 'https://cordova.apache.org/', image: cordova },
			{ id: 14, name: 'Lambda', url: 'https://aws.amazon.com/lambda/', image: lambda },
			{ id: 15, name: 'DynamoDB', url: 'https://aws.amazon.com/dynamodb/', image: dynamodb }
		]
	},
	{
		id: 2,
		name: 'aaronjayoliver.com',
		description: `A portfolio website developed using SvelteKit that serves as an advertisement of my professional web development skills.
			The UI design philosophy was to be bold but not garish; simple, yet feature complete.<br><br>
			The site has lightning fast load times due to it being fully pre-rendered. 
			There is no supporting backend infrastructure, with the exception of hosting the application on Cloudflare. 
			This results in a site that is free to maintain (within parameters), but with the drawback of needing to commit a code change whenever data must be updated.`,
		releaseDate: '2024-11-04T00:00:00.000Z',
		updatedDate: '2024-11-08T00:00:00.000Z',
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
			{
				id: 1,
				name: 'TypeScript',
				url: 'https://www.typescriptlang.org/',
				image: typescript
			},
			{
				id: 7,
				name: 'Cloudflare',
				url: 'https://www.cloudflare.com/',
				image: cloudflare
			},
			{
				id: 10,
				name: 'TailwindCSS',
				url: 'https://tailwindcss.com/',
				image: tailwindcss
			}
		]
	},

	{
		id: 3,
		name: 'Asynchronous Rest API',
		description: `This project demonstrates an asynchronous payment API built with AWS and Terraform, using serverless infrastructure. 
			It was designed to be resilient, scalable and secure, as per the requirements of a payment gateway.<br><br> 
			One of the most interesting features of this project is that the Terraform script that creates the serverless infrastructure takes its configuration from the OpenAPI schema.`,
		releaseDate: '2024-03-21T00:00:00.000Z',
		updatedDate: '2024-03-21T00:00:00.000Z',
		image: asyncRestAPI,
		repositoryURL: 'https://github.com/a-j-olly/async-payment-api',
		tags: [
			{ id: 4, name: 'AWS', url: 'https://aws.amazon.com/', image: aws },
			{ id: 8, name: 'NodeJS', url: 'https://nodejs.org/', image: nodejs },
			{
				id: 1,
				name: 'TypeScript',
				url: 'https://www.typescriptlang.org/',
				image: typescript
			},
			{
				id: 3,
				name: 'JavaScript',
				url: 'https://www.w3schools.com/js/DEFAULT.asp',
				image: javascript
			},
			{ id: 11, name: 'Jest', url: 'https://jestjs.io/', image: jest },
			{ id: 12, name: 'Terraform', url: 'https://www.terraform.io/', image: terraform },
			{ id: 14, name: 'Lambda', url: 'https://aws.amazon.com/lambda/', image: lambda },
			{ id: 15, name: 'DynamoDB', url: 'https://aws.amazon.com/dynamodb/', image: dynamodb }
		]
	},
	{
		id: 4,
		name: 'Serverless GraphQL API',
		description: `This API was initally built to supply the project and tag information found on aaronjayoliver.com. 
			It is now a tech demo for a serverless graphql api, integrated with a AWS Aurora Serverless V2 PostgreSQL DB.`,
		releaseDate: '2024-11-08T00:00:00.000Z',
		updatedDate: '2024-11-08T00:00:00.000Z',
		image: serverlessGQLAPI,
		repositoryURL: 'https://github.com/a-j-olly/serverless-gql-api',
		tags: [
			{ id: 4, name: 'AWS', url: 'https://aws.amazon.com/', image: aws },
			{ id: 8, name: 'NodeJS', url: 'https://nodejs.org/', image: nodejs },
			{
				id: 1,
				name: 'TypeScript',
				url: 'https://www.typescriptlang.org/',
				image: typescript
			},
			{
				id: 3,
				name: 'JavaScript',
				url: 'https://www.w3schools.com/js/DEFAULT.asp',
				image: javascript
			},
			{ id: 12, name: 'Terraform', url: 'https://www.terraform.io/', image: terraform },
			{ id: 14, name: 'Lambda', url: 'https://aws.amazon.com/lambda/', image: lambda },
			{ id: 16, name: 'PostgreSQL', url: 'https://www.postgresql.org/', image: postgresql },
			{ id: 17, name: 'Vitest', url: 'https://vitest.dev/', image: vitest }
		]
	}
];
