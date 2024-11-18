<script lang="ts">
	import type { TagItem } from 'shared_types';
	import { tagStore, selectedTagStore, displayedProjectStore } from '$lib/stores';

	import Card from './Card.svelte';
	import Pill from './Pill.svelte';

	import ClearIcon from './ClearIcon.svelte';
	import MinimiseIcon from './MinimiseIcon.svelte';
	import MaximiseIcon from './MaximiseIcon.svelte';

	let showTags = $state(true);

	function toggleShowTags() {
		showTags = !showTags;
	}

	function toggleTagHandler(tag: TagItem) {
		selectedTagStore.update((selectedTags) => {
			if (selectedTags.some((t) => t.name === tag.name)) {
				return selectedTags.filter((t) => t.name !== tag.name);
			} else {
				return [...selectedTags, tag];
			}
		});
	}

	function clearTagsHandler() {
		selectedTagStore.set([]);
	}
</script>

<svelte:head>
	<title>Portfolio | aaronjayoliver.com</title>
	<meta
		name="description"
		content="Here you can find the projects Aaron Jay Oliver has been working on."
	/>
</svelte:head>

<div class="flex justify-center">
	<div class="mx-2 w-full max-w-screen-xl rounded bg-orange-200/50 pb-2 sm:mx-4 md:mx-8">
		<div class="relative" class:hidden={!showTags}>
			<h1 class="rounded-t bg-orange-400 text-center font-serif text-2xl text-white">Skills</h1>
			<div class="absolute bottom-0 right-0">
				<button
					type="button"
					disabled={$selectedTagStore.length === 0}
					class="flex size-8 items-center justify-center rounded-tr text-white {$selectedTagStore.length ===
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
					class="flex size-8 items-center justify-center rounded-tl bg-orange-400 bg-red-700 text-white hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700"
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
			{#each $tagStore as tag (tag.id)}
				<li>
					<Pill
						{tag}
						selected={$selectedTagStore.some((selectedTag) => selectedTag.name === tag.name)}
						toggleTag={toggleTagHandler}
					/>
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
					class="flex size-8 items-center justify-center rounded-tl bg-orange-400 bg-red-700 text-white hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700"
					onclick={toggleShowTags}
				>
					<MaximiseIcon height="24px" width="24px" />
				</button>
			</div>
		</div>

		{#if $displayedProjectStore.length}
			<ul class="grid grid-cols-1 gap-4 px-2 sm:grid-cols-2">
				{#each $displayedProjectStore as project (project.id)}
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
