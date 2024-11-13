<script lang="ts">
	import portrait from '$lib/images/ajo-portrait.webp';
	import github from '$lib/images/icons/github-dark.svg';
	import linkedin from '$lib/images/icons/linkedin.svg';

	function handleAnchorOnClick(event: MouseEvent) {
		event.preventDefault();
		const anchorId = new URL((event.currentTarget as HTMLAnchorElement).href).hash.replace('#', '');
		const target = document.getElementById(anchorId) as HTMLElement;
		window.scrollTo({
			top: target.offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<svelte:head>
	<title>About Me | aaronjayoliver.com</title>
	<meta name="description" content="This is the landing page for aaronjayoliver.com, a portfolio website. From here you can navigate to the portfolio, or the blog." />
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<!-- page 1 -->
	<div class="flex h-screen items-center justify-center">
		<div
			class="flex h-min flex-row items-center justify-center divide-x-4 divide-slate-600 font-serif"
		>
			<ul class="text-dark-blue pr-3 text-right text-4xl font-bold">
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

			<ul class="pl-3 text-4xl text-slate-800">
				<li>
					<a
						class="underline decoration-slate-600 hover:text-blue-600 hover:decoration-blue-600"
						href="#about"
						onclick={handleAnchorOnClick}>about</a
					>
				</li>
				<li>
					<a
						class="underline decoration-slate-600 hover:text-blue-600 hover:decoration-blue-600"
						href="/portfolio">portfolio</a
					>
				</li>
				<li>
					<a
						class="underline decoration-slate-600 hover:text-blue-600 hover:decoration-blue-600"
						href="/blog">blog</a
					>
				</li>
			</ul>
		</div>
	</div>

	<!-- page 2 -->
	<div class="flex h-screen flex-col items-center justify-center" id="about">
		<div class="m-2 flex flex-wrap justify-center gap-x-4 py-2">
			<a class="min-w-12" href="https://linkedin.com/in/aaron-j-oliver/">
				<img class="max-w-24 rounded-full border-2" src={portrait} alt="Aaron Jay Oliver" />
			</a>

			<div class="flex min-w-36 gap-x-4">
				<div class="min-w-0">
					<p class="text-dark-blue font-serif text-2xl font-bold md:text-4xl">Aaron Jay Oliver</p>

					<a
						class="mt-1 flex items-center gap-x-2 truncate text-sm text-slate-800 hover:text-blue-600 hover:decoration-blue-600"
						href="https://linkedin.com/in/aaron-j-oliver/"
					>
						<img src={linkedin} alt="linkedIn" />
						<p>linkedin.com/in/aaron-j-oliver/</p>
					</a>

					<a
						class="mt-1 flex items-center gap-x-2 truncate text-sm text-slate-800 hover:text-blue-600 hover:decoration-blue-600"
						href="https://github.com/a-j-olly"
					>
						<img src={github} alt="github" />
						<p>github.com/a-j-olly</p>
					</a>
				</div>
			</div>
			<div class="flex min-w-0 max-w-72 items-center pt-2">
				<p class="px-2 italic leading-5 text-slate-800">
					'I enjoy building things; I gain a sense of fulfilment knowing my work could make
					someone's day easier.'
				</p>
			</div>
		</div>
		<a
			class="mt-2 text-center font-serif text-2xl text-slate-800 underline decoration-slate-600 hover:text-blue-600 hover:decoration-blue-600"
			href="/portfolio">View My Portfolio</a
		>
	</div>
</div>
