<script lang="ts">
	// Event dispatcher
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher<{
		toggle: { tag: { id: number; name: string }; selected: boolean };
	}>();

	export let tag: { id: number; name: string };
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
	class="m-1 rounded-lg p-1 text-lg font-semibold text-white transition-colors
           duration-200
           {selected ? 'bg-dark-blue hover:bg-blue-400' : 'bg-slate-400 hover:bg-blue-400'}"
	on:click={toggle}
>
	{tag.name}
</button>
