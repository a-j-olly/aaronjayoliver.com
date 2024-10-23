<script lang="ts">
	export let name;
	export let imageURL;
	export let navURL;
</script>

<a class="min-h-32 min-w-64 overflow-hidden border bg-slate-100 shadow-lg" href={navURL}>
	<img src={imageURL} alt={name} class="w-full object-cover" />

	<h2 class="text-center font-serif text-lg font-bold text-slate-800">{name}</h2>
</a>
