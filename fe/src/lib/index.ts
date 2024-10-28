import { PUBLIC_GRAPHQL_API_URL } from '$env/static/public';
import type { ProjectItem, TagItem } from 'shared_types';
import { getProjectListByAllTagIdsQuery } from './graphql/queries';

// place files you want to import through the `$lib` alias in this folder.
export async function getProjectListByAllTags(tags: TagItem[]): Promise<ProjectItem[]> {
	const tagIds = tags.map((tag) => tag.id);

	const getProjectListByAllTagIdsResponse = await (
		await fetch(PUBLIC_GRAPHQL_API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query: getProjectListByAllTagIdsQuery(tagIds) })
		})
	).json();

	return getProjectListByAllTagIdsResponse.data.getProjectListByAllTagIds;
}
