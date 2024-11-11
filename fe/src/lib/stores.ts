// src/lib/stores.js
import type { ProjectDetail, ProjectItem, TagItem } from 'shared_types';
import { writable, type Writable, readable, type Readable } from 'svelte/store';
import { projects } from '$lib/data/projects';
import { tagDetails } from '$lib/data/tags';

export const projectStore: Readable<ProjectDetail[]> = readable(projects);
export const tagStore: Readable<TagItem[]> = readable(tagDetails);
export const selectedTagStore: Writable<TagItem[]> = writable([]);
export const displayedProjectStore: Writable<ProjectItem[]> = writable(projects);
