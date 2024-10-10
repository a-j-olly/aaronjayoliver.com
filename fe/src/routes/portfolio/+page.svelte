<script lang="ts">
	import Pill from './Pill.svelte';
	export let data;

	let tagList = data.tags;
	let selectedTags = [...tagList];

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
</script>

<div class="mx-12 flex items-center justify-center gap-2 md:mx-48">
	<h2 class="text-lg font-bold text-dark-blue">Tags:</h2>
	<div class="flex flex-col">
		<ul class="flex flex-wrap justify-evenly">
			{#each tagList as tag}
				<Pill {tag} on:toggle={handleTagToggle} />
			{/each}
		</ul>
	</div>
</div>
