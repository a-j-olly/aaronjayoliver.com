<script lang="ts">
	// Event dispatcher
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher<{
		toggle: { tag: { id: number; name: string }; selected: boolean };
	}>();

	export let tag: { id: number; name: string };
	export let selected = true;

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
	class="m-1 rounded-full rounded-full px-2 py-1 font-bold text-white transition-colors
           duration-200
           {selected ? 'bg-blue-600 hover:bg-blue-400' : 'bg-red-600 hover:bg-red-400'}"
	on:click={toggle}
>
	{tag.name}
</button>
