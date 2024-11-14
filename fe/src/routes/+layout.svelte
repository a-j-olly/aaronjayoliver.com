<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import portrait from '$lib/images/ajo-portrait.png';
	import github from '$lib/images/icons/github-dark.svg';
	import linkedin from '$lib/images/icons/linkedin.svg';
	interface Props {
		children?: import('svelte').Snippet;
	}
	let { children }: Props = $props();
</script>

<header>
	<nav class="m-2 mb-4 grid grid-cols-3">
		<div
			class="flex h-min flex-row items-center justify-start divide-x-2 divide-slate-600 font-serif"
		>
			<ul class="text-dark-blue pr-2 text-right text-lg font-bold leading-5">
				<li>
					<h1>Aaron</h1>
				</li>
				<li>
					<h1>Jay</h1>
				</li>
				<li>
					<h1>Oliver</h1>
				</li>
			</ul>
		</div>
		<div
			class="text-dark-blue flex items-center justify-center text-center font-serif text-2xl font-bold sm:text-4xl"
		>
			{#if $page.data.pageTitle !== 'Portfolio'}
				<a href="/">
					<h1 class="hover:text-blue-700">Portfolio</h1>
				</a>
			{:else}
				<h1>Portfolio</h1>
			{/if}
		</div>

		<div class="flex items-center justify-end">
			<div class="flex items-center gap-2">
				<a href="https://linkedin.com/in/aaron-j-oliver/">
					<img class="h-16 w-16 rounded-full border" src={portrait} alt="Aaron Jay Oliver" />
				</a>
				<ul class="flex flex-col gap-2 font-serif text-slate-800">
					<li class="underline decoration-slate-600 hover:text-blue-600 hover:decoration-blue-600">
						<a href="https://linkedin.com/in/aaron-j-oliver/" class="flex items-center gap-2">
							<img src={linkedin} alt="linkedIn" />
							<p class="max-sm:hidden">linkedin.com</p>
						</a>
					</li>
					<li class="underline decoration-slate-600 hover:text-blue-600 hover:decoration-blue-600">
						<a href="https://github.com/a-j-olly" class="flex items-center gap-2">
							<img src={github} alt="github" />
							<p class="max-sm:hidden">github.com</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>
<main>
	{@render children?.()}
</main>
