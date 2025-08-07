<script lang="ts">
	import { formatDate } from '$lib/utils';
	
	const currentDate = new Date();
</script>

<svelte:head>
	<title>About - PiceConsole</title>
</svelte:head>

<div class="max-w-4xl mx-auto p-6">
	<h1 class="text-3xl font-bold mb-6">About PiceConsole</h1>
	
	<div class="prose prose-lg">
		<p class="text-gray-700 mb-4">
			PiceConsole is a modern web application built with SvelteKit and TypeScript.
			It's configured for deployment on Azure Static Web Apps and styled with Tailwind CSS.
		</p>
		
		<h2 class="text-2xl font-semibold mb-4">Features</h2>
		<ul class="list-disc list-inside space-y-2 text-gray-700">
			<li>Built with SvelteKit for optimal performance</li>
			<li>TypeScript for type safety</li>
			<li>Tailwind CSS for responsive design</li>
			<li>Azure Static Web Apps deployment ready</li>
			<li>Component-based architecture</li>
		</ul>
		
		<p class="text-sm text-gray-500 mt-8">
			Last updated: {formatDate(currentDate)}
		</p>
	</div>
</div>