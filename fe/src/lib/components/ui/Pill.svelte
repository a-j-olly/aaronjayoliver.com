<script lang="ts">
	import { selectedTagIds, toggleTag } from '$lib/services/projectStore';
	import type { TagItem } from 'shared_types';

	interface Props {
		tag: TagItem;
	}

	let { tag }: Props = $props();

	let isSelected = $state(false);

	selectedTagIds.subscribe((ids) => {
		isSelected = ids.includes(tag.id);
	});
</script>

<button
	class="my-1 w-24 rounded-full px-1 text-lg text-white xl:w-28
	 {isSelected ? 'bg-dark-blue hover:bg-blue-600' : 'bg-slate-400 hover:bg-slate-500'}"
	onclick={() => toggleTag(tag.id)}
	title={tag.name}
>
	{tag.name}
</button>
