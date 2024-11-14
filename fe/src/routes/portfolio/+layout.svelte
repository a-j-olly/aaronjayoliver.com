<script lang="ts">
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
			<ul class="text-dark-blue pr-2 text-right text-lg font-bold leading-5 hover:text-blue-700">
				<a href="/">
					<li>
						<h1>Aaron</h1>
					</li>
					<li>
						<h1>Jay</h1>
					</li>
					<li>
						<h1>Oliver</h1>
					</li>
				</a>
			</ul>

			<ul class="pl-2 text-lg leading-5 text-slate-800">
				<li class="underline decoration-slate-600 hover:text-blue-600 hover:decoration-blue-600">
					<a href="/#about">about</a>
				</li>
				<li class="underline decoration-slate-600 hover:text-blue-600 hover:decoration-blue-600">
					<a
						aria-current={$page.url.pathname.startsWith('/portfolio') ? 'page' : undefined}
						class="aria-current:font-bold aria-current:italic"
						href="/portfolio"
					>
						portfolio
					</a>
				</li>
				<li class="underline decoration-slate-600 hover:text-blue-600 hover:decoration-blue-600">
					<a href="/blog">blog</a>
				</li>
			</ul>
		</div>
		{#if $page.data.pageTitle}
			<div class="flex items-center justify-center max-sm:hidden">
				<h1 class="text-dark-blue text-center font-serif text-4xl font-bold">
					{$page.url.pathname.startsWith('/portfolio') ? 'Portfolio' : $page.data.pageTitle}
				</h1>
			</div>
		{/if}

		<div class="flex items-center justify-end max-sm:col-span-2">
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
