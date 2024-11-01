<script lang="ts">
	import { get } from 'svelte/store';
	import type { PageData } from '../$types';
	import { projectStore } from '$lib/stores';
	import type { ProjectItem } from 'shared_types';
	import Pill from '../Pill.svelte';
	let { data }: { data: PageData } = $props();

	const projectList = get(projectStore);
	const projectData = projectList.find((p) => p.name === data.pageTitle) as ProjectItem;
</script>

<h1 class="rounded-t bg-orange-400 text-center font-serif text-2xl text-white">
	{projectData.name}
</h1>

<div class="flex flex-wrap justify-center border-x-4 border-b-4 border-orange-400 bg-orange-200/50">
	<div class="border-orange-400 max-lg:border-b-4 lg:w-1/2 lg:border-r-4">
		<img
			src={`/images/projects/${projectData.imageURL}`}
			alt={projectData.name}
			class="object-cover"
		/>
	</div>

	<div class="flex flex-col justify-between p-2 lg:w-1/2">
		<p>{projectData.description}</p>

		<div class="border-dark-blue m-auto justify-center rounded-t border-x-4 border-b-4">
			<h2 class="bg-dark-blue text-center font-serif text-lg text-white">Tech Stack</h2>
			<ul class="flex flex-wrap justify-center">
				{#each projectData.tags as tag}
					<li><Pill {tag} /></li>
				{/each}
			</ul>
		</div>

		<ul class="flex items-center justify-evenly">
			<li class="underline">
				<a href={projectData.repositoryURL}>Code</a>
			</li>
			{#if projectData.presentationURL}
				<li class="underline">
					<a href={projectData.presentationURL}>Site</a>
				</li>
			{/if}
		</ul>
	</div>
</div>
