<script lang="ts">
	import portrait from '$lib/images/ajo-portrait.webp';

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

<div class="flex flex-col items-center justify-center">
	<!-- page 1 -->
	<div class="flex h-screen items-center justify-center">
		<div class="flex h-min flex-row items-center justify-center divide-x-2">
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

			<ul class="pl-3 text-4xl text-slate-600">
				<li>
					<a
						class="underline hover:text-blue-600 hover:decoration-blue-600"
						href="#about"
						on:click={handleAnchorOnClick}>about</a
					>
				</li>
				<li>
					<a class="underline hover:text-blue-600 hover:decoration-blue-600" href="/portfolio"
						>portfolio</a
					>
				</li>
				<li>
					<a class="underline hover:text-blue-600 hover:decoration-blue-600" href="/blog">blog</a>
				</li>
			</ul>
		</div>
	</div>

	<!-- page 2 -->
	<div class="flex h-screen flex-col items-center justify-center" id="about">
		<div class="m-2 flex flex-wrap gap-x-4 py-2">
			<div class="min-w-12">
				<img class="max-w-24 rounded-full bg-gray-50" src={portrait} alt="Aaron Jay Oliver" />
			</div>

			<div class="flex min-w-36 gap-x-4">
				<div class="min-w-0 flex-auto">
					<p class="text-dark-blue text-2xl font-bold md:text-4xl">Aaron Jay Oliver</p>

					<div class="mt-2 flex items-center gap-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16px"
							height="16px"
							viewBox="0 0 256 256"
							{...$$props}
						>
							<path
								fill="#0a66c2"
								d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
							/>
						</svg>
						<a
							class="truncate text-sm text-slate-600 hover:text-blue-600 hover:decoration-blue-600"
							href="https://www.linkedin.com/in/aaron-j-oliver/">linkedin.com/in/aaron-j-oliver/</a
						>
					</div>

					<div class="mt-1 flex items-center gap-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16px"
							height="16px"
							viewBox="0 0 24 24"
							{...$$props}
						>
							<path
								fill="currentColor"
								d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
							/>
						</svg>
						<a
							class="truncate text-sm text-slate-600 hover:text-blue-600 hover:decoration-blue-600"
							href="https://github.com/a-j-olly">github.com/a-j-olly</a
						>
					</div>
				</div>
			</div>
			<div class="flex min-w-0 max-w-prose items-center justify-center pt-2 sm:max-w-72">
				<p class="italic leading-5 text-slate-600">
					'I enjoy building things; especially things that reach lots of people. I gain a sense of
					fulfilment knowing my work has made a positive impact.'
				</p>
			</div>
		</div>

		<a
			class="mt-2 text-center text-2xl text-slate-600 underline hover:text-blue-600 hover:decoration-blue-600"
			href="/portfolio">View Portfolio</a
		>
	</div>
</div>
