import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getProjectBySlug } from '$lib/services/projectStore';

export const prerender = true;

export const load: PageLoad = ({ params }) => {
	const slugName = decodeURI(params.slug).toLowerCase();

	// Check if project exists
	const project = getProjectBySlug(slugName);

	if (!project) {
		throw error(404, `Project "${slugName}" not found`);
	}

	return { slugName };
};
