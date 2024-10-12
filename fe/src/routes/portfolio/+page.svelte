<script lang="ts">
	import Card from './Card.svelte';
	import Pill from './Pill.svelte';
	export let data;

	let tagList = data.tags;
	let tagsSelected: boolean | null = false;
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

	function clearTags() {
		console.log(tagsSelected);
		tagsSelected = null;
		tagsSelected = false;
		selectedTags = [];
		console.log(selectedTags);
		// getProjectList()
	}
</script>

<div class="mx-2 sm:mx-4 md:mx-8 lg:mx-16">
	<div class="">
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
					><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14zM17 8.4L13.4 12l3.6 3.6l-1.4 1.4l-3.6-3.6L8.4 17L7 15.6l3.6-3.6L7 8.4L8.4 7l3.6 3.6L15.6 7z"
						/>
					</svg>
				</button>
			</div>
		</div>

		<ul
			class=" grid grid-cols-3 gap-2 border bg-slate-100 shadow-inner shadow-slate-200 sm:grid-cols-5 lg:grid-cols-8"
		>
			{#each tagList as tag}
				<Pill {tag} selected={tagsSelected} on:toggle={handleTagToggle} />
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
