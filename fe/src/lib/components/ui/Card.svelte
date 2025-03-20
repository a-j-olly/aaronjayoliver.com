<script lang="ts">
	import type { Picture } from 'shared_types';

	interface Props {
		name: string;
		slug: string
		image: string | Picture;
	}

	let { name, image, slug }: Props = $props();
	const navURL = `/${encodeURI(slug)}`;
</script>

<a href={navURL}>
	<enhanced:img src={image} alt="" class="w-full object-cover" />

	<h2 class="text-center font-serif text-xl text-white">{name}</h2>
</a>
