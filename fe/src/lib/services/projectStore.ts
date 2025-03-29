import { writable, derived, type Readable } from 'svelte/store';
import { getAllProjectDetails, getAllTags } from './projectService';
import type { ProjectDetail, TagDetail, TagItem } from 'shared_types';

// Cache all projects and tags to avoid recalculation
const allProjectsData = getAllProjectDetails();
const allTagsData = getAllTags();

// The only writable stores - single source of truth
export const selectedTagIds = writable<string[]>([]);
export const sortMethod = writable<SortMethod>('release');

// Create a store for selected tag objects (derived from IDs)
export const selectedTags: Readable<TagItem[]> = derived(selectedTagIds, ($selectedTagIds) => {
	return $selectedTagIds.map((id) => {
		const tag = allTagsData.find((t) => t.id === id);
		return tag ? { id: tag.id, name: tag.name } : { id, name: 'Unknown' };
	});
});

// Create a store for displayed projects based on tag filter
export const displayedProjects: Readable<ProjectDetail[]> = derived(
	[selectedTagIds, sortMethod],
	([$selectedTagIds, $sortMethod]) => {
		let filtered = $selectedTagIds.length === 0 
			? allProjectsData 
			: allProjectsData.filter(project =>
				$selectedTagIds.every(tagId => project.tags.some(t => t.id === tagId))
			);

		return filtered.sort((a, b) => {
			const key = $sortMethod === 'updated' ? 'updatedDate' : 'releaseDate';
			return new Date(b[key]).getTime() - new Date(a[key]).getTime();
		});
	}
);

// All available tags
export const allTags: Readable<TagDetail[]> = derived(
	[], // No dependencies, just a static value
	() => allTagsData
);

// Store actions

/**
 * Toggle selection of a tag
 */
export function toggleTag(tagId: string): void {
	selectedTagIds.update(($ids) => {
		if ($ids.includes(tagId)) {
			return $ids.filter((id) => id !== tagId);
		} else {
			return [...$ids, tagId];
		}
	});
}

/**
 * Clear all selected tags
 */
export function clearTags(): void {
	selectedTagIds.set([]);
}

/**
 * Check if a tag is currently selected
 */
export function isTagSelected(tagId: string): boolean {
	let result = false;
	selectedTagIds.subscribe(($ids) => {
		result = $ids.includes(tagId);
	})();
	return result;
}

/**
 * Get a project by slug
 */
export function getProjectBySlug(slug: string): ProjectDetail | undefined {
	return allProjectsData.find((project) => project.slug === slug);
}

export function toggleSort(): void {
	sortMethod.update(current => current === 'release' ? 'updated' : 'release');
}
