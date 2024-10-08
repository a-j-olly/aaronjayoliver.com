<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav class="m-2 grid grid-cols-3">
		<div class="col-start-2 flex items-center justify-center">
			<h1 class="text-5xl text-center font-bold text-dark-blue">{$page.data.pageTitle}</h1>
		</div>
		<div class="flex items-end justify-end">
			<div class="flex h-min w-48 flex-row divide-x-2">
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
						<a class="underline hover:text-blue-600 hover:decoration-blue-600" href="/#about"
							>about</a
						>
					</li>
					<li>
						<a
							aria-current={$page.url.pathname === '/portfolio' ? 'page' : undefined}
							class="aria-current:italic aria-current:font-semibold underline hover:text-blue-600 hover:decoration-blue-600"
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
		</div>
	</nav>
</header>
<main>
	<slot></slot>
</main>
