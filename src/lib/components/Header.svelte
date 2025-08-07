<script lang="ts">
	import { page } from '$app/stores';
	
	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' }
	];
</script>

<header class="bg-white shadow-sm border-b">
	<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex items-center">
				<a href="/" class="flex-shrink-0 font-bold text-xl text-blue-600">
					PiceConsole
				</a>
			</div>
			
			<div class="flex items-center space-x-8">
				{#each navigation as item}
					<a 
						href={item.href}
						class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors
							{$page.url.pathname === item.href ? 'text-blue-600 bg-blue-50' : ''}"
					>
						{item.name}
					</a>
				{/each}
			</div>
		</div>
	</nav>
</header>