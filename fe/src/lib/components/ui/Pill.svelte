<script lang="ts">
	import { selectedTagIds } from '$lib/services/projectStore';
	import { readable } from 'svelte/store';

	export let tagId;
	export let tag: TagItem;

	const isSelected = readable(false);

	$: {
		isSelected.set($selectedTagIds.includes(tagId));
	}

	function toggleTag() {
		selectedTagIds.update(ids =>
			ids.includes(tagId) ? ids.filter(id => id !== tagId) : [...ids, tagId]
		);
	}
</script>

<button
	class="my-1 w-24 rounded-full px-1 text-lg text-white xl:w-28
	 {isSelected ? 'bg-dark-blue hover:bg-blue-600' : 'bg-slate-400 hover:bg-slate-500'}"
	on:click={toggleTag}
	title={tag.name}
>
	{tag.name}
</button>
