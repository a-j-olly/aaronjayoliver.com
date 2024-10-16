import { PUBLIC_GRAPHQL_API_URL } from '$env/static/public';
import { getProjectListQuery, getTagListQuery } from '$lib/graphql/queries.js';
import type { ProjectItem, TagItem } from 'shared_types';

export async function load({ fetch }) {
	// load all tags and projects
	const getProjectListQueryResponse = await (
		await fetch(PUBLIC_GRAPHQL_API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query: getProjectListQuery })
		})
	).json();
	const getTagListQueryResponse = await (
		await fetch(PUBLIC_GRAPHQL_API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query: getTagListQuery })
		})
	).json();

	const projectData: ProjectItem[] = getProjectListQueryResponse.data.getProjectList;
	const tagData: TagItem[] = getTagListQueryResponse.data.getTagList;
	return {
		pageTitle: 'Portfolio',
		tagData,
		projectData
	};
}
