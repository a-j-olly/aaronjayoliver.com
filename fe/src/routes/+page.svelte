<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import {
		allTags,
		selectedTags,
		displayedProjects,
		toggleSort,
		clearTags,
		sortMethod
	} from '$lib/services/projectStore';
	import Card from '../lib/components/ui/Card.svelte';
	import Pill from '../lib/components/ui/Pill.svelte';
	import ClearIcon from '../lib/components/ui/icons/ClearIcon.svelte';
	import MinimiseIcon from '../lib/components/ui/icons/MinimiseIcon.svelte';
	import MaximiseIcon from '../lib/components/ui/icons/MaximiseIcon.svelte';
	import SortIcon from '$lib/components/ui/icons/SortIcon.svelte';
	import { cubicInOut } from 'svelte/easing';
	import { showSkills } from '$lib/services/uiStore';

	// Animation configuration for consistency
	const ANIMATION_CONFIG = {
		duration: 200,
		easing: cubicInOut
	} as const;

	function toggleShowTags() {
		$showSkills = !$showSkills;
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
		{#if $showSkills}
			<div class="animate-slide hardware-accelerated relative" transition:slide={ANIMATION_CONFIG}>
				<h1 class="rounded-t bg-orange-400 text-center font-serif text-2xl text-white">Skills</h1>
				<div class="absolute bottom-0 right-0">
					<button
						type="button"
						title="Clear Skills"
						disabled={$selectedTags.length === 0}
						class="flex size-8 items-center justify-center rounded-tr text-white {$selectedTags.length ===
						0
							? 'bg-slate-400 text-white'
							: 'bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700'}"
						onclick={clearTags}
					>
						<ClearIcon />
					</button>
				</div>
				<div class="absolute bottom-0 left-0">
					<button
						type="button"
						title="Hide Skills"
						disabled={!$showSkills}
						class="flex size-8 items-center justify-center rounded-tl bg-orange-400 bg-red-700 text-white hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700"
						onclick={toggleShowTags}
					>
						<MinimiseIcon height="24px" width="24px" />
					</button>
				</div>
			</div>

			<ul
				transition:slide={ANIMATION_CONFIG}
				class="animate-slide hardware-accelerated grid grid-cols-[repeat(auto-fit,_minmax(96px,_max-content))] justify-center gap-1 p-1 xl:grid-cols-[repeat(auto-fit,_minmax(112px,_max-content))]"
			>
				{#each $allTags as tag (tag.id)}
					<li>
						<Pill {tag} />
					</li>
				{/each}
			</ul>
		{/if}

		<div class="relative">
			<h1
				class="mb-2 bg-orange-400 text-center font-serif text-2xl text-white"
				class:rounded-t={!$showSkills}
			>
				Projects
			</h1>
			{#if !$showSkills}
				<div class="absolute bottom-0 left-0">
					<button
						type="button"
						title="Show Skills"
						disabled={$showSkills}
						class="animate-fade hardware-accelerated flex size-8 items-center justify-center rounded-tl bg-orange-400 bg-red-700 text-white hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700"
						onclick={toggleShowTags}
						transition:fade={ANIMATION_CONFIG}
					>
						<MaximiseIcon height="24px" width="24px" />
					</button>
				</div>
			{/if}

			<div class="absolute bottom-0 right-0">
				<button
					type="button"
					title="Sort Projects ({$sortMethod})"
					class="flex size-8 items-center justify-center rounded-tr bg-orange-400 bg-red-700 text-white hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700"
					onclick={toggleSort}
				>
					<SortIcon height="24px" width="24px" />
				</button>
			</div>
		</div>

		{#if $displayedProjects.length}
			<ul
				class="animate-fade hardware-accelerated grid grid-cols-1 gap-4 px-2 sm:grid-cols-2"
				transition:fade={ANIMATION_CONFIG}
			>
				{#each $displayedProjects as project (project.id)}
					<li
						animate:flip={ANIMATION_CONFIG}
						transition:fade={ANIMATION_CONFIG}
						class="animate-flip hardware-accelerated min-h-32 min-w-64 overflow-hidden rounded border-4 border-orange-400 bg-orange-400 shadow-lg hover:border-orange-500 hover:bg-orange-500"
					>
						<Card name={project.name} image={project.image} slug={project.slug} />
					</li>
				{/each}
			</ul>
		{:else}
			<div
				class="animate-fade hardware-accelerated m-2 flex min-w-80 items-center justify-center"
				transition:fade={ANIMATION_CONFIG}
			>
				<p class="text-slate-800">
					There are no projects matching the skills you have selected. Clear all skills to view all
					projects.
				</p>
			</div>
		{/if}
	</div>
</div>
