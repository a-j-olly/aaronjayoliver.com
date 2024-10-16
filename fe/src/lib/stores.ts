// src/lib/stores.js
import type { ProjectItem, TagItem } from 'shared_types';
import { writable, type Writable } from 'svelte/store';

export const projectStore: Writable<Partial<ProjectItem>[]> = writable([]);
export const tagStore: Writable<TagItem[]> = writable([]);
export const selectedTagStore: Writable<TagItem[]> = writable([]);
