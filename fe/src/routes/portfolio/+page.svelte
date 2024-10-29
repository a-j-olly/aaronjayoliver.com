<script lang="ts">
	import type { TagItem } from 'shared_types';
	import { projectStore, tagStore, selectedTagStore, displayedProjectStore } from '$lib/stores';
	import Card from './Card.svelte';
	import Pill from './Pill.svelte';
	import CloseIcon from './CloseIcon.svelte';
	import { filterProjectListByTags } from '$lib';
	let tagController: boolean | undefined = false;

	async function tagToggleHandler(event: CustomEvent<{ tag: TagItem; selected: boolean }>) {
		const { tag, selected } = event.detail;
		if (selected) {
			selectedTagStore.set([...$selectedTagStore, tag]);
		} else {
			selectedTagStore.set($selectedTagStore.filter((v) => v !== tag));
		}

		if (!$selectedTagStore.length) {
			displayedProjectStore.set($projectStore);
		} else {
			displayedProjectStore.set(filterProjectListByTags($projectStore, $selectedTagStore));
		}
	}

	function clearTagsHandler() {
		tagController = undefined;
		tagController = false;
		selectedTagStore.set([]);
		displayedProjectStore.set($projectStore);
	}
</script>

<div class="mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24 2xl:mx-32">
	<div class="relative">
		<h1 class="text-center font-serif text-2xl font-bold text-slate-800">Skills</h1>
		<div
			class="md-right-5 absolute bottom-0 right-0 flex h-8 w-10 items-center justify-center rounded-t-sm bg-slate-200 sm:right-10"
		>
			<button
				type="button"
				disabled={$selectedTagStore.length === 0}
				class="text-center text-sm font-medium text-white {$selectedTagStore.length === 0
					? 'bg-grey-600'
					: 'bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700'}"
				on:click={clearTagsHandler}
				><CloseIcon />
			</button>
		</div>
	</div>

	<ul
		class="grid grid-cols-3 gap-2 rounded-sm border-2 bg-slate-100 px-2 shadow-inner shadow-slate-200 sm:grid-cols-5 sm:rounded-full lg:grid-cols-8 2xl:grid-cols-11"
	>
		{#each $tagStore as tag}
			<Pill {tag} on:toggle={tagToggleHandler} />
		{/each}
	</ul>

	<h1 class="text-center font-serif text-2xl font-bold text-slate-800">Projects</h1>

	<div class="m-auto grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
		{#each $displayedProjectStore as project}
			<Card
				name={project.name}
				imageURL={project.imageURL}
				navURL={project.presentationURL ?? project.repositoryURL}
			/>
		{/each}
	</div>
</div>
