<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import portrait from '$lib/images/portrait.png';
	import github from '$lib/images/icons/github-dark.svg';
	import linkedin from '$lib/images/icons/linkedin.svg';
	interface Props {
		children?: import('svelte').Snippet;
	}
	let { children }: Props = $props();
</script>

<svelte:head>
	<meta property="og:image" content={portrait} />
</svelte:head>

<header>
	<nav class="m-2 mb-4 grid grid-cols-3">
		<div class="flex h-min flex-row items-center justify-start gap-2 font-serif">
			<a href="/">
				<img class="h-16 w-16 rounded-full border" src={portrait} alt="Aaron Jay Oliver" />
			</a>
			<a class="max-sm:hidden" class:cursor-default={$page.data.pageTitle === 'Portfolio'} href="/">
				<ul
					class:hover:text-blue-700={$page.data.pageTitle !== 'Portfolio'}
					class="text-dark-blue pr-2 text-lg font-bold leading-5"
				>
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
			</a>
		</div>

		<div class="text-dark-blue flex items-center justify-center">
			<a class:cursor-default={$page.data.pageTitle === 'Portfolio'} href="/">
				<h1
					class="text-center font-serif text-3xl font-bold sm:text-4xl"
					class:hover:text-blue-700={$page.data.pageTitle !== 'Portfolio'}
				>
					Portfolio
				</h1>
			</a>
		</div>

		<div class="flex items-center justify-end">
			<div class="flex items-center gap-2">
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
