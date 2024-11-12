<script lang="ts">
	import type { TagItem } from 'shared_types';
	import { projectStore, tagStore, selectedTagStore, displayedProjectStore } from '$lib/stores';
	import { filterProjectListByTags } from '$lib';

	import Card from './Card.svelte';
	import Pill from './Pill.svelte';

	import ClearIcon from './ClearIcon.svelte';
	import MinimiseIcon from './MinimiseIcon.svelte';
	import MaximiseIcon from './MaximiseIcon.svelte';

	let showTags = $state(true);

	function toggleShowTags() {
		showTags = !showTags;
	}

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

<svelte:head>
	<title>Portfolio | aaronjayoliver.com</title>
	<meta
		name="description"
		content="This is the portfolio page for aaronjayoliver.com. It lists software development projects that I have developed."
	/>
</svelte:head>

<div class="flex justify-center">
	<div class="mx-2 max-w-screen-xl rounded bg-orange-200/50 pb-2 sm:mx-4 md:mx-8">
		<div class="relative" class:hidden={!showTags}>
			<h1 class="rounded-t bg-orange-400 text-center font-serif text-2xl text-white">Tags</h1>
			<div class="absolute bottom-0 right-0">
				<button
					type="button"
					disabled={$selectedTagStore.length === 0}
					class="flex h-8 w-8 items-center justify-center rounded-tr text-white {$selectedTagStore.length ===
					0
						? 'bg-slate-400 text-white'
						: 'bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700'}"
					onclick={clearTagsHandler}
				>
					<ClearIcon />
				</button>
			</div>
			<div class="absolute bottom-0 left-0">
				<button
					type="button"
					disabled={!showTags}
					class="flex h-8 w-8 items-center justify-center bg-orange-400 bg-red-700 text-white hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700"
					onclick={toggleShowTags}
				>
					<MinimiseIcon height="24px" width="24px" />
				</button>
			</div>
		</div>

		<ul
			class="grid grid-cols-[repeat(auto-fit,_minmax(96px,_max-content))] justify-center gap-1 p-1 xl:grid-cols-[repeat(auto-fit,_minmax(112px,_max-content))]"
			class:hidden={!showTags}
		>
			{#each $tagStore as tag}
				<li>
					<Pill {tag} on:toggle={tagToggleHandler} />
				</li>
			{/each}
		</ul>

		<div class="relative">
			<h1
				class="mb-2 bg-orange-400 text-center font-serif text-2xl text-white"
				class:rounded-t={!showTags}
			>
				Projects
			</h1>
			<div class="absolute bottom-0 left-0" class:hidden={showTags}>
				<button
					type="button"
					disabled={showTags}
					class="flex h-8 w-8 items-center justify-center rounded-tr bg-orange-400 bg-red-700 text-white hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700"
					onclick={toggleShowTags}
				>
					<MaximiseIcon height="24px" width="24px" />
				</button>
			</div>
		</div>

		{#if $displayedProjectStore.length}
			<ul class="m-auto grid grid-cols-1 gap-4 px-2 sm:grid-cols-2">
				{#each $displayedProjectStore as project}
					<Card name={project.name} image={project.image} />
				{/each}
			</ul>
		{:else}
			<div class="m-2 flex min-w-80 items-center justify-center">
				<p class="text-slate-800">
					There are no projects matching the tags you have selected. Reduce the number of tags you
					have selected, or clear them to view all projects.
				</p>
			</div>
		{/if}
	</div>
</div>
