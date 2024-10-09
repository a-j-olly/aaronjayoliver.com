<script lang="tsc">
	export let data;
</script>

<div class="md:mx-48 mx-12 flex items-center justify-center gap-2">
	<h2 class="text-lg font-semibold text-dark-blue">Tags:</h2>
	<div class="flex flex-col">
		<ul class="flex flex-wrap justify-evenly">
			{#each data.tags as { id, name }}
				<button class="bg-orange-600 hover:bg-orange-400 text-white font-bold my-1 py-1 px-2 rounded-full">{name}</button>
			{/each}
		</ul>
		<div class="flex flex-wrap items-center justify-center">
			<input
				id="new-tag-input"
				class="mt-1 w-full rounded-md p-1"
				type="text"
				placeholder="Add tags (press Enter to add)"
			/>
		</div>
	</div>
</div>
