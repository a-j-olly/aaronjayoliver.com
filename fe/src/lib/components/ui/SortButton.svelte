<script lang="ts">
	import type { SortMethod } from 'shared_types';
	
	export let currentSort: SortMethod;
	export let toggle: () => void;
</script>

<button
	on:click={toggle}
	class="my-2 mx-auto flex h-10 items-center justify-center rounded-full bg-dark-blue px-4 font-serif text-lg text-white transition-colors hover:bg-blue-600"
>
	Sort by: {currentSort === 'release' ? 'Release Date' : 'Last Updated'}
</button>
