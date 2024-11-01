// src/lib/stores.js
import type { ProjectItem, TagItem } from 'shared_types';
import { writable, type Writable, readable, type Readable } from 'svelte/store';
import projects from '$lib/data/projects.json';
import tags from '$lib/data/tags.json';

export const projectStore: Readable<ProjectItem[]> = readable(projects);
export const tagStore: Readable<TagItem[]> = readable(tags);
export const selectedTagStore: Writable<TagItem[]> = writable([]);
export const displayedProjectStore: Writable<ProjectItem[]> = writable(projects);
