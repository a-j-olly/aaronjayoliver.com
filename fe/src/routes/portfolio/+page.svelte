<script lang="ts">
	import type { ProjectItem, TagItem } from 'shared_types';
	import { projectStore, tagStore, selectedTagStore } from '$lib/stores';
	import Card from './Card.svelte';
	import Pill from './Pill.svelte';
	import CloseIcon from './CloseIcon.svelte';

	export let data;
	const { projectData, tagData } = data;
	projectStore.set(projectData);
	tagStore.set(tagData);

	let projectList: Partial<ProjectItem>[] = [];
	let tagList: TagItem[] = [];
	let selectedTags: TagItem[] = [];
	let tagsSelected: boolean | undefined = false;

	projectStore.subscribe((value) => {
		projectList = value;
	});
	tagStore.subscribe((value) => {
		tagList = value;
	});
	selectedTagStore.subscribe((value) => {
		selectedTags = value;
	});

	function handleTagToggle(event: CustomEvent<{ tag: TagItem; selected: boolean }>) {
		const { tag, selected } = event.detail;
		if (selected) {
			selectedTagStore.set([...selectedTags, tag]);
		} else {
			selectedTagStore.set(selectedTags.filter((v) => v !== tag));
		}
		// getProjectsByAllTags(selectedTags)
		console.log(selectedTags);
	}

	function clearTags() {
		console.log(tagsSelected);
		tagsSelected = undefined;
		tagsSelected = false;
		selectedTagStore.set([]);
		console.log(selectedTags);
		// getProjectList()
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
				on:click={clearTags}
				><CloseIcon />
			</button>
		</div>
	</div>

	<ul
		class="grid grid-cols-3 gap-2 border bg-slate-100 shadow-inner shadow-slate-200 sm:grid-cols-5 lg:grid-cols-8"
	>
		{#each tagList as tag}
			<Pill {tag} selected={tagsSelected} on:toggle={handleTagToggle} />
		{/each}
	</ul>

	<h1 class="text-center text-2xl font-bold text-slate-600">Projects</h1>

	<div class="m-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each projectList as { name, presentationURL }}
			<Card {name} {presentationURL} />
		{/each}
	</div>
</div>
