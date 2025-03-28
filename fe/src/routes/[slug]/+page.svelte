<script lang="ts">
	import dayjs from 'dayjs';
	import www from '$lib/images/icons/www.svg';
	import github from '$lib/images/icons/github-dark.svg';
	import { getProjectBySlug } from '$lib/services/projectStore';
	import type { PageData } from '../$types';

	let { data }: { data: PageData } = $props();

	// Get the project data
	const projectData = getProjectBySlug(data.slugName);

	// This shouldn't happen due to our page loader, but added for type safety
	if (!projectData) {
		throw new Error(`Project with slug "${data.slugName}" not found`);
	}
</script>

<svelte:head>
	<title>{projectData.name} | aaronjayoliver.com</title>
	<meta name="description" content={`This is the ${projectData.name} project page.`} />
</svelte:head>

<div class="flex justify-center">
	<div class="mx-2 mb-2 flex max-w-screen-lg flex-col sm:mx-8 md:mx-16">
		<h1 class="rounded-t bg-orange-400 text-center font-serif text-2xl text-white">
			{projectData.name}
		</h1>

		<div class="flex flex-wrap border-x-4 border-b-4 border-orange-400 bg-orange-200/50">
			<div class="border-b-4 border-orange-400">
				<enhanced:img src={projectData.image} alt={projectData.name} class="object-cover" />
			</div>

			<div
				class="mb-1 flex w-full items-center justify-between font-serif text-sm text-slate-800 sm:text-base"
			>
				<div class="flex items-center gap-1 px-1">
					<h3 class="font-bold">Updated:</h3>
					<p>
						{dayjs(projectData.updatedDate).format('DD/MM/YYYY')}
					</p>
				</div>
				<div class="flex items-center justify-end gap-1 px-1">
					<h3 class="font-bold">Released:</h3>
					<p>
						{dayjs(projectData.releaseDate).format('DD/MM/YYYY')}
					</p>
				</div>
			</div>

			<p class="mb-2 px-2 leading-5 text-slate-800">
				{@html projectData.description}
			</p>

			<div class="border-dark-blue m-auto mb-2 justify-center rounded-t border-x-4 border-b-4">
				<h2 class="bg-dark-blue text-center font-serif text-lg text-white">Tech Stack</h2>
				<ul class="flex flex-wrap justify-center px-2">
					{#each projectData.tags as tag}
						<li>
							<a href={tag.url}>
								<img
									class="mx-2 my-1 size-10 lg:mx-3 lg:my-2 lg:size-12"
									src={tag.image as string}
									alt={tag.name}
									title={tag.name}
								/>
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<ul
				class="grid w-full {projectData.presentationURL && projectData.repositoryURL
					? 'grid-cols-2'
					: 'grid-cols-1'}"
			>
				{#if projectData.presentationURL}
					<li
						class="font-serif text-slate-800 underline underline hover:text-blue-600 hover:decoration-blue-600"
					>
						<a class="flex flex-col items-center justify-center" href={projectData.presentationURL}>
							<img class="size-8 lg:size-10" src={www} alt="Website" />
							<p class="mt-1">Visit Website</p>
						</a>
					</li>
				{/if}
				{#if projectData.repositoryURL}
					<li
						class="font-serif text-slate-800 underline decoration-slate-800 hover:text-blue-600 hover:decoration-blue-600"
					>
						<a class="flex flex-col items-center justify-center" href={projectData.repositoryURL}>
							<img class="size-8 lg:size-10" src={github} alt="Code Repository" />
							<p class="mt-1">View Code</p>
						</a>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</div>
