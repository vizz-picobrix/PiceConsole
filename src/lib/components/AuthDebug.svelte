<script lang="ts">
	import { authState } from '$lib/stores/auth';
	
	let showDebug = false;
	
	function toggleDebug() {
		showDebug = !showDebug;
	}
</script>

{#if showDebug}
	<div class="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-sm max-w-md z-[9999]">
		<div class="flex justify-between items-center mb-2">
			<h3 class="font-bold">Auth Debug Info</h3>
			<button on:click={toggleDebug} class="text-red-400 hover:text-red-300">✕</button>
		</div>
		
		<div class="space-y-2 text-xs">
			<div>
				<strong>Is Authenticated:</strong> 
				<span class="{$authState.isAuthenticated ? 'text-green-400' : 'text-red-400'}">
					{$authState.isAuthenticated}
				</span>
			</div>
			
			<div>
				<strong>Is Loading:</strong> 
				<span class="{$authState.isLoading ? 'text-yellow-400' : 'text-gray-400'}">
					{$authState.isLoading}
				</span>
			</div>
			
			{#if $authState.user}
				<div>
					<strong>User ID:</strong> {$authState.user.userId || 'N/A'}
				</div>
				<div>
					<strong>User Details:</strong> {$authState.user.userDetails || 'N/A'}
				</div>
				<div>
					<strong>Identity Provider:</strong> {$authState.user.identityProvider || 'N/A'}
				</div>
				<div>
					<strong>User Roles:</strong> 
					{#if $authState.user.userRoles && $authState.user.userRoles.length > 0}
						{$authState.user.userRoles.join(', ')}
					{:else}
						<span class="text-yellow-400">No roles assigned</span>
					{/if}
				</div>
			{:else}
				<div class="text-red-400">No user data</div>
			{/if}
			
			<div class="pt-2 border-t border-gray-600">
				<strong>Current URL:</strong> {typeof window !== 'undefined' ? window.location.href : 'SSR'}
			</div>
		</div>
	</div>
{/if}

<!-- Always visible debug button - center of screen -->
<button 
	on:click={toggleDebug}
	class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white px-4 py-4 rounded-full text-lg shadow-xl z-[9999] border-4 border-white"
	title="Toggle Auth Debug - TEST BUTTON"
>
	🔧 DEBUG
</button>