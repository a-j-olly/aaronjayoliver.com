<script lang="ts">
	// Event dispatcher
	import { createEventDispatcher } from 'svelte';
	import type { TagItem } from '../../../../pkgs/shared_types';
	const dispatch = createEventDispatcher<{
		toggle: { tag: TagItem; selected: boolean };
	}>();

	export let tag: TagItem;
	export let selected = false;

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
	class="m-1 rounded-lg p-1 text-lg font-semibold text-white
           {selected ? 'bg-dark-blue hover:bg-blue-600' : 'bg-slate-400 hover:bg-slate-500'}"
	on:click={toggle}
>
	{tag.name}
</button>
