<script lang="ts">
	import type { Picture } from 'shared_types';

	interface Props {
		name: string;
		image: string | Picture;
	}

	let { name, image }: Props = $props();
	const navURL = `/${encodeURI(name)}`;
</script>

<a href={navURL}>
	<enhanced:img src={image} alt={name} class="w-full object-cover" />

	<h2 class="text-center font-serif text-xl text-white">{name}</h2>
</a>
