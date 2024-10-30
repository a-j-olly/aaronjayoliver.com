import type { ProjectItem, TagItem } from 'shared_types';

export function filterProjectListByTags(
	projectList: ProjectItem[],
	tags: TagItem[]
): ProjectItem[] {
	const tagIds = tags.map((tag) => tag.id);
	return projectList.filter((project) =>
		tagIds.every((tagId) => project.tags.some((tag) => tag.id === tagId))
	);
}
