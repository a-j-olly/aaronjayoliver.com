<script lang="ts">
	import www from '$lib/images/icons/www.svg';
	import github from '$lib/images/icons/github-dark.svg';

	import { get } from 'svelte/store';
	import type { PageData } from '../$types';
	import { projectStore } from '$lib/stores';
	import type { ProjectDetail } from 'shared_types';
	let { data }: { data: PageData } = $props();

	const projectList = get(projectStore);
	const projectData = projectList.find((p) => p.name === data.pageTitle) as ProjectDetail;
</script>

<div class="mx-2 flex max-w-screen-lg flex-col sm:mx-8 md:mx-16">
	<h1 class="rounded-t bg-orange-400 text-center font-serif text-2xl text-white">
		{projectData.name}
	</h1>

	<div
		class="flex flex-wrap justify-center border-x-4 border-b-4 border-orange-400 bg-orange-200/50"
	>
		<div class="border-b-4 border-orange-400">
			<img src={projectData.image} alt={projectData.name} class="object-cover" />
		</div>

		<div class="flex flex-col justify-between p-2">
			<p class="mb-2 leading-5 text-slate-800">
				{projectData.description}
			</p>

			<div class="border-dark-blue m-auto justify-center rounded-t border-x-4 border-b-4">
				<h2 class="bg-dark-blue text-center font-serif text-lg text-white">Tech Stack</h2>
				<ul class="flex flex-wrap justify-center px-2">
					{#each projectData.tags as tag}
						<li>
							<a href={tag.url}>
								<img class="mx-3 my-2 w-12 w-12" src={tag.image} alt={tag.name} />
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<ul class="mt-4 flex items-center justify-evenly">
				{#if projectData.repositoryURL}
					<li
						class="font-serif text-slate-800 underline decoration-slate-800 hover:text-blue-600 hover:decoration-blue-600"
					>
						<a class="flex flex-col items-center justify-center" href={projectData.repositoryURL}>
							<img class="h-10 w-10" src={github} alt="Code Repository" />
							<p class="mt-1">View Code</p>
						</a>
					</li>
				{/if}
				{#if projectData.presentationURL}
					<li
						class="font-serif text-slate-800 underline underline hover:text-blue-600 hover:decoration-blue-600"
					>
						<a class="flex flex-col items-center justify-center" href={projectData.presentationURL}>
							<img class="h-10 w-10" src={www} alt="Website" />
							<p class="mt-1">Visit Website</p>
						</a>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</div>
