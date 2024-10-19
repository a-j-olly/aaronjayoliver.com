<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav class="m-2 mb-6 grid grid-cols-3">
		<div
			class="flex h-min flex-row justify-start divide-x-2 max-sm:col-start-2 max-sm:justify-center"
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

			<ul class="pl-2 text-lg leading-5 text-slate-600">
				<li>
					<a class="underline hover:text-blue-600 hover:decoration-blue-600" href="/#about">about</a
					>
				</li>
				<li>
					<a
						aria-current={$page.url.pathname === '/portfolio' ? 'page' : undefined}
						class="aria-current:font-semibold aria-current:italic underline hover:text-blue-600 hover:decoration-blue-600"
						href="/portfolio"
					>
						portfolio
					</a>
				</li>
				<li>
					<a class="underline hover:text-blue-600 hover:decoration-blue-600" href="/blog">blog</a>
				</li>
			</ul>
		</div>
		{#if $page.data.pageTitle}
			<div class="flex items-center justify-center max-sm:hidden">
				<h1 class="text-dark-blue text-center text-4xl font-bold">{$page.data.pageTitle}</h1>
			</div>
		{/if}
	</nav>
</header>
<main>
	<slot></slot>
</main>
