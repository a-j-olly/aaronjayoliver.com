<script lang="ts">
	interface Props {
		name: string;
		imageURL: string;
		navURL: string;
	}

	let { name, imageURL, navURL }: Props = $props();
</script>

<a
	class="min-h-32 min-w-64 overflow-hidden rounded border-4 border-orange-400 bg-orange-400 shadow-lg hover:border-orange-500 hover:bg-orange-500"
	href={navURL}
>
	<img src={`/images/projects/${imageURL}`} alt={name} class="w-full object-cover" />

	<h2 class="text-center font-serif text-xl text-white">{name}</h2>
</a>
