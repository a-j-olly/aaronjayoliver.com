<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav class="m-2 flex justify-between">
		<div class="flex items-center">
			<h1 class="text-center text-4xl font-bold text-dark-blue">{$page.data.pageTitle}</h1>
		</div>
		<div class="flex h-min flex-row divide-x-2">
			<ul class="pr-2 text-right text-lg font-bold leading-5 text-dark-blue">
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
						class="underline hover:text-blue-600 hover:decoration-blue-600 aria-current:font-semibold aria-current:italic"
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
	</nav>
</header>
<main>
	<slot></slot>
</main>
