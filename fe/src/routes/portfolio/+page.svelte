<script lang="ts">
	import Card from './Card.svelte';
	import Pill from './Pill.svelte';
	export let data;

	let tagList = data.tags;
	let isSelected = false;
	let selectedTags = [];

	function handleTagToggle(
		e: CustomEvent<{ tag: { id: number; name: string }; selected: boolean }>
	) {
		const { tag, selected } = e.detail;
		if (selected) {
			selectedTags = [...selectedTags, tag];
		} else {
			selectedTags = selectedTags.filter((v) => v !== tag);
		}
		// getProjectsByAllTags(selectedTags)
		console.log(selectedTags);
	}

	function toggleAll() {
		isSelected = !isSelected;
	}
</script>

<div class="mx-2 md:mx-32">
	<div class="">
		<div class="relative">
			<h1 class="text-center text-2xl font-bold text-slate-600">Skills</h1>

			<div
				class="absolute bottom-0 right-0 h-7 w-12 rounded-t-lg bg-slate-200 flex items-center justify-center"
			>
				<label class="inline-flex cursor-pointer items-center">
					<input type="checkbox" value="" class="peer sr-only" on:click={toggleAll} />
					<div
						class="peer relative h-5 w-9 rounded-full bg-gray-200
						after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border
						after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600
						peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none
						rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800
						{isSelected
							? 'bg-dark-blue hover:bg-blue-400'
							: 'bg-slate-400 opacity-60 hover:bg-blue-400'} justify-cente flex items-center"
					></div>
				</label>
			</div>
		</div>

		<ul
			class=" grid grid-cols-3 gap-2 rounded-l border bg-slate-100 shadow-inner shadow-slate-200 sm:grid-cols-5 lg:grid-cols-8"
		>
			{#each tagList as tag}
				<Pill {tag} selected={isSelected} on:toggle={handleTagToggle} />
			{/each}
		</ul>
	</div>

	<h1 class="text-center text-2xl font-bold text-slate-600">Projects</h1>

	<div class="m-auto mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each data.projects as { title, presentationURL }}
			<Card {title} {presentationURL} />
		{/each}
	</div>
</div>
