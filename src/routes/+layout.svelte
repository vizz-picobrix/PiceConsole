<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import AuthGuard from '$lib/components/AuthGuard.svelte';
	import AuthDebug from '$lib/components/AuthDebug.svelte';
</script>

<!-- AuthDebug should be outside AuthGuard to always be visible -->
<AuthDebug />

<AuthGuard>
	<div class="min-h-screen bg-gray-50">
		<Header />
		<main class="container mx-auto px-4 py-8">
			<slot />
		</main>
	</div>
</AuthGuard>