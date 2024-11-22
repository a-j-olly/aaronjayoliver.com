// Tag Icons
import typescript from '$lib/images/icons/tags/typescript.svg';
import angular from '$lib/images/icons/tags/angular.svg';
import aws from '$lib/images/icons/tags/aws-light.svg';
import cloudflare from '$lib/images/icons/tags/cloudflare-light.svg';
import javascript from '$lib/images/icons/tags/javascript.svg';
import nodejs from '$lib/images/icons/tags/nodejs-light.svg';
import svelte from '$lib/images/icons/tags/svelte.svg';
import serverless from '$lib/images/icons/tags/serverless.svg';
import ionic from '$lib/images/icons/tags/ionic.svg';
import tailwindcss from '$lib/images/icons/tags/tailwindcss.svg';
import cordova from '$lib/images/icons/tags/cordova.svg';
import lambda from '$lib/images/icons/tags/lambda.svg';
import dynamodb from '$lib/images/icons/tags/dynamodb.svg';
import jest from '$lib/images/icons/tags/jest.svg';
import postgresql from '$lib/images/icons/tags/postgresql-dark.svg';
import terraform from '$lib/images/icons/tags/terraform-dark.svg';
import vitest from '$lib/images/icons/tags/vitest-dark.svg';
import prisma from '$lib/images/icons/tags/prisma.svg';

// Project Images
import aaronjayoliver from '$lib/images/projects/aaronjayoliver.webp?enhanced';
import neutrify from '$lib/images/projects/neutrify.webp?enhanced';
import asyncRestAPI from '$lib/images/projects/async-payment-api.webp?enhanced';
import serverlessGQLAPI from '$lib/images/projects/serverless-gql-api.webp?enhanced';
import paymentGateway from '$lib/images/projects/payment-gateway.webp?enhanced';

import type { ProjectDetail } from 'shared_types';

export const projects: ProjectDetail[] = [
	{
		id: 1,
		name: 'Neutrify',
		description: `I founded Neutrify to provide a tool to help control the news articles we see. 
			It is a news aggregator that presents the news tagged with AI derived metrics to improve transparency and filterability. 
			The application is distributed via the web and the Google Play store.<br><br>
			It is a full stack application built with AWS Amplify, AppSync, DynamoDB, and TypeScript ETL jobs running on Lambda. 
			OAuth2.0 user account authentication is implemented using Amazon Cognito, and CI/CD is handled with AWS CodePipeline.<br><br>
			<b>Note:</b> The Neutrify app was decommissioned at the end of 2021, however I am working to bring a limited version of it back online.
		`,
		slug: 'neutrify',
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
		slug: 'aaronjayoliver.com',
		releaseDate: '2024-11-13T00:00:00.000Z',
		updatedDate: '2024-11-20T00:00:00.000Z',
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
			},
			{ id: 17, name: 'Vitest', url: 'https://vitest.dev/', image: vitest }
		]
	},
	{
		id: 3,
		name: 'Asynchronous Rest API',
		description: `This project demonstrates an asynchronous payment API built with AWS and Terraform, using serverless infrastructure. 
			It was designed to be resilient, scalable and secure, as per the requirements of a payment gateway.<br><br> 
			One of the most interesting features of this project is that the Terraform script that creates the API infrastructure takes its configuration from the OpenAPI schema.
			A justification for all the design decisions made for this architecture can be found in the README documentation found in this project's repository.`,
		slug: 'asynchronous-rest-api',
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
			It is now a tech demo for a serverless graphql api, integrated with a AWS Aurora Serverless V2 PostgreSQL DB.<br><br>
			One of the major drawbacks of serverless architecture is that your infrastructure can be 'cold', which means it needs to be initialised before it can respond to any requests.
			This is the cold start time, and it is exacerbated by the size of the package being intialised. 
			GraphQL servers often contain middleware that bloats the package size, so choosing a lightweight one like GraphQL Yoga is vital for performance.`,
		slug: 'serverless-graphql-api',
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
	},
	{
		id: 5,
		name: 'Payment Gateway Library',
		description: `This project was created as part of a coding challenge to develop a payment gateway library. 
			The result is a library that makes idempotent transactions to a PostgreSQL database using Prisma ORM. 
			It also provides basic logging, documentation and input validation to ensure robustness, and 95% test coverage using Vitest to ensure code reliability.`,
		slug: 'payment-gateway-library',
		releaseDate: '2024-06-13T00:00:00.000Z',
		updatedDate: '2024-06-13T00:00:00.000Z',
		image: paymentGateway,
		repositoryURL: 'https://github.com/a-j-olly/payment-gateway-library',
		tags: [
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
			{ id: 16, name: 'PostgreSQL', url: 'https://www.postgresql.org/', image: postgresql },
			{ id: 17, name: 'Vitest', url: 'https://vitest.dev/', image: vitest },
			{ id: 18, name: 'Prisma', url: 'https://www.prisma.io/', image: prisma }
		]
	}
];
