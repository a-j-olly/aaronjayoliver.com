// src/lib/stores.js
import type { ProjectItem, TagItem } from 'shared_types';
import { writable, type Writable } from 'svelte/store';
import projects from '$lib/data/projects.json';
import tags from '$lib/data/tags.json';

export const projectStore: Writable<ProjectItem[]> = writable(projects);
export const tagStore: Writable<TagItem[]> = writable(tags);
export const selectedTagStore: Writable<TagItem[]> = writable([]);
export const displayedProjectStore: Writable<ProjectItem[]> = writable(projects);
