<script lang="ts">
	import type { TagItem } from 'shared_types';
	interface Props {
		tag: TagItem;
		selected: boolean;
		toggleTag: Function
	}

	let { tag, selected, toggleTag }: Props = $props();

</script>

<button
	class="my-1 px-1 min-w-24 max-w-28 truncate rounded-full text-lg text-white xl:min-w-28 xl:max-w-32
           {selected ? 'bg-dark-blue hover:bg-blue-600' : 'bg-slate-400 hover:bg-slate-500'}"
	onclick={() => toggleTag(tag)}
	title={tag.name}
>
	{tag.name}
</button>
