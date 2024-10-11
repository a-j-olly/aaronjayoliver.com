<script lang="ts">
	export let title;
	export let presentationURL;
</script>

<div class="min-h-32 min-w-64 overflow-hidden rounded border bg-white shadow-lg">
	<img src={presentationURL} alt={title} class="w-full object-cover" />

	<h2 class="text-center text-lg font-bold text-slate-600">{title}</h2>
</div>
