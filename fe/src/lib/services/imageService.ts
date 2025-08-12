import type { Picture } from 'shared_types';

// Image imports for projects
import neutrify from '$lib/images/projects/neutrify.webp?enhanced';
import aaronjayoliver from '$lib/images/projects/aaronjayoliver.webp?enhanced';
import asyncRestAPI from '$lib/images/projects/async-payment-api.webp?enhanced';
import serverlessGQLAPI from '$lib/images/projects/serverless-gql-api.webp?enhanced';
import paymentGateway from '$lib/images/projects/payment-gateway.webp?enhanced';
import diceRollerMCP from '$lib/images/projects/dice-roller-mcp.webp?enhanced';

// Tag icon imports
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
import python from '$lib/images/icons/tags/python-dark.svg';

// Maps for project and tag images
const projectImageMap: Record<string, Picture | string> = {
	neutrify,
	aaronjayoliver,
	asyncRestAPI,
	serverlessGQLAPI,
	paymentGateway,
	diceRollerMCP
};

const tagImageMap: Record<string, string> = {
	typescript: typescript,
	angular: angular,
	aws: aws,
	cloudflare: cloudflare,
	javascript: javascript,
	nodejs: nodejs,
	svelte: svelte,
	serverless: serverless,
	ionic: ionic,
	tailwindcss: tailwindcss,
	cordova: cordova,
	lambda: lambda,
	dynamodb: dynamodb,
	jest: jest,
	postgresql: postgresql,
	terraform: terraform,
	vitest: vitest,
	prisma: prisma,
	python: python
};

/**
 * Get the resolved image for a project
 */
export function getProjectImage(key: string): Picture | string {
	const image = projectImageMap[key];
	if (!image) {
		console.warn(`Project image not found: ${key}`);
		return '/placeholder-project.webp';
	}
	return image;
}

/**
 * Get the resolved image for a tag
 */
export function getTagImage(key: string): string {
	const image = tagImageMap[key];
	if (!image) {
		console.warn(`Tag image not found: ${key}`);
		return '/placeholder-tag.svg';
	}
	return image;
}
