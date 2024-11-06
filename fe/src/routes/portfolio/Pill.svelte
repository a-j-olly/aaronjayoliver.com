<script lang="ts">
	// Event dispatcher
	import { createEventDispatcher } from 'svelte';
	import { selectedTagStore } from '$lib/stores';
	import type { TagItem } from '../../../../pkgs/shared_types';
	interface Props {
		tag: TagItem;
	}

	let { tag }: Props = $props();

	let selected = $state(false);

	selectedTagStore.subscribe((selectedTags) => {
		selected = selectedTags.some((selectedTag) => selectedTag.name === tag.name);
	});

	const dispatch = createEventDispatcher<{
		toggle: { tag: TagItem; selected: boolean };
	}>();

	// Emit an event to the parent to add/remove the value from the list
	function toggle() {
		selected = !selected;
		const eventDetail = {
			tag,
			selected
		};

		dispatch('toggle', eventDetail);
	}
</script>

<!-- Button Style: Changing color based on selected state -->
<button
	class="m-2 min-w-24 xl:min-w-28 truncate rounded-full text-lg text-white
           {selected ? 'bg-dark-blue hover:bg-blue-600' : 'bg-slate-400 hover:bg-slate-500'}"
	onclick={toggle}
	title={tag.name}
>
	{tag.name}
</button>
