<script lang="ts">
	import type { TagItem } from '../../../../pkgs/shared_types';
	interface Props {
		tag: TagItem;
		selected: boolean;
		toggleTag: Function
	}

	let { tag, selected, toggleTag }: Props = $props();

</script>

<button
	class="my-1 min-w-24 truncate rounded-full text-lg text-white xl:min-w-28
           {selected ? 'bg-dark-blue hover:bg-blue-600' : 'bg-slate-400 hover:bg-slate-500'}"
	onclick={() => toggleTag(tag)}
	title={tag.name}
>
	{tag.name}
</button>
