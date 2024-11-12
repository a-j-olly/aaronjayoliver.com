// src/lib/stores.js
import type { ProjectDetail, TagItem } from 'shared_types';
import { writable, type Writable, readable, type Readable, derived } from 'svelte/store';
import { projects } from '$lib/data/projects';
import { tagDetails } from '$lib/data/tags';
import { filterProjectListByTags } from '$lib';

export const projectStore: Readable<ProjectDetail[]> = readable(projects);
export const tagStore: Readable<TagItem[]> = readable(tagDetails);
export const selectedTagStore: Writable<TagItem[]> = writable([]);
export const displayedProjectStore = derived(
	[projectStore, selectedTagStore],
	([$projectStore, $selectedTagStore]) =>
		$selectedTagStore.length
			? filterProjectListByTags($projectStore, $selectedTagStore)
			: $projectStore
);
