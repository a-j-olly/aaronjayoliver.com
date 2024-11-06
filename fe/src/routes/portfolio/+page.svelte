<script lang="ts">
	import type { TagItem } from 'shared_types';
	import { projectStore, tagStore, selectedTagStore, displayedProjectStore } from '$lib/stores';
	import Card from './Card.svelte';
	import Pill from './Pill.svelte';
	import CloseIcon from './CloseIcon.svelte';
	import { filterProjectListByTags } from '$lib';

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
		selectedTagStore.set([]);
		displayedProjectStore.set($projectStore);
	}
</script>

<div class="mx-2 sm:mx-4 md:mx-8 max-w-screen-xl rounded bg-orange-200/50 pb-2">
	<div class="relative">
		<h1 class="rounded-t bg-orange-400 text-center font-serif text-2xl text-white">Tags</h1>
		<div class="absolute bottom-0 right-0 flex h-8 w-10 items-center justify-center">
			<button
				type="button"
				disabled={$selectedTagStore.length === 0}
				class="rounded text-center text-sm font-medium text-white {$selectedTagStore.length === 0
					? 'bg-orange-400'
					: 'bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700'}"
				onclick={clearTagsHandler}
				><CloseIcon />
			</button>
		</div>
	</div>

	<ul class="grid grid-cols-[repeat(auto-fit,_minmax(96px,_max-content))] justify-center gap-1 p-1">
		{#each $tagStore as tag}
			<li>
				<Pill {tag} on:toggle={tagToggleHandler} />
			</li>
		{/each}
	</ul>

	<ul class="m-auto grid grid-cols-1 gap-4 px-2 sm:grid-cols-2">
		{#each $displayedProjectStore as project}
			<Card name={project.name} image={project.image} />
		{/each}
	</ul>
</div>
