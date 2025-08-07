<script lang="ts">
	import Counter from '$lib/components/Counter.svelte';
</script>

<svelte:head>
	<title>PiceConsole</title>
	<meta name="description" content="PiceConsole - A SvelteKit application" />
</svelte:head>

<div class="text-center">
	<h1 class="text-4xl font-bold text-blue-600 mb-8">
		Welcome to PiceConsole
	</h1>
	
	<div class="max-w-2xl mx-auto p-6">
		<p class="text-lg text-gray-700 mb-6">
			This is a SvelteKit application with TypeScript and Tailwind CSS, ready for Azure Static Web Apps deployment.
		</p>
		
		<Counter />
	</div>
</div>