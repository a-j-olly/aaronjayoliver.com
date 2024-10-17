<script lang="ts">
	import type { ProjectItem, TagItem } from 'shared_types';
	import { projectStore, tagStore, selectedTagStore } from '$lib/stores';
	import Card from './Card.svelte';
	import Pill from './Pill.svelte';
	import CloseIcon from './CloseIcon.svelte';
	import { getProjectListByAllTags } from '$lib';

	export let data;
	const { projectData, tagData } = data;
	projectStore.set(projectData);
	tagStore.set(tagData);

	let selectedTags: TagItem[] = [];
	selectedTagStore.subscribe((value) => {
		selectedTags = value;
	});

	let displayedProjects: Partial<ProjectItem>[] = $projectStore;

	let tagController: boolean | undefined = false;

	async function tagToggleHandler(event: CustomEvent<{ tag: TagItem; selected: boolean }>) {
		const { tag, selected } = event.detail;
		if (selected) {
			selectedTagStore.set([...selectedTags, tag]);
		} else {
			selectedTagStore.set(selectedTags.filter((v) => v !== tag));
		}
		
		if (!selectedTags.length) {
			displayedProjects = $projectStore;
		} else {
			displayedProjects = await getProjectListByAllTags(selectedTags);
		}
	}

	function clearTagsHandler() {
		tagController = undefined;
		tagController = false;
		selectedTagStore.set([]);
		displayedProjects = $projectStore;
	}
</script>

<div class="mx-2 sm:mx-4 md:mx-8 lg:mx-16">
	<div class="relative">
		<h1 class="text-center text-2xl font-bold text-slate-600">Skills</h1>
		<div
			class="absolute bottom-0 right-0 flex h-8 w-10 items-center justify-center rounded-t bg-slate-200"
		>
			<button
				type="button"
				disabled={selectedTags.length === 0}
				class="rounded text-center text-sm font-medium text-white {selectedTags.length === 0
					? 'bg-grey-600'
					: 'bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700'}"
				on:click={clearTagsHandler}
				><CloseIcon />
			</button>
		</div>
	</div>

	<ul
		class="grid grid-cols-3 gap-2 border bg-slate-100 shadow-inner shadow-slate-200 sm:grid-cols-5 lg:grid-cols-8"
	>
		{#each $tagStore as tag}
			<Pill {tag} selected={tagController} on:toggle={tagToggleHandler} />
		{/each}
	</ul>

	<h1 class="text-center text-2xl font-bold text-slate-600">Projects</h1>

	<div class="m-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each displayedProjects as { name, imageURL }}
			<Card {name} {imageURL} />
		{/each}
	</div>
</div>
