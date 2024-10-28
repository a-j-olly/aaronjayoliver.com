<script>
	import { page } from '$app/stores';
</script>

<div class="flex h-screen flex-col items-center justify-center">
	<div class="flex flex-col items-center justify-center">
		<h1 class="text-dark-blue font-serif text-2xl font-bold sm:text-4xl">
			{$page.status} - {$page.error?.message}
		</h1>
		{#if $page.status == 404}
			<p class="mt-2">The page could not be found!</p>
		{:else}
			<p class="mt-2 text-slate-600">Something went wrong! Please try again later.</p>
		{/if}
	</div>
</div>
