<script lang="ts">
	import { authState } from '$lib/stores/auth';
	import { onMount } from 'svelte';
	
	let showDebug = false;
	let debugButton: HTMLButtonElement;
	
	// Safe access to authState
	$: safeAuthState = $authState || { 
		isAuthenticated: false, 
		isLoading: false, 
		user: null 
	};
	
	function toggleDebug() {
		console.log('Debug button clicked! Current showDebug:', showDebug);
		showDebug = !showDebug;
		console.log('New showDebug state:', showDebug);
		console.log('AuthState raw:', $authState);
		console.log('AuthState safe:', safeAuthState);
	}

	onMount(async () => {
		// Force button to be on top
		if (debugButton) {
			debugButton.style.zIndex = '999999';
			debugButton.style.pointerEvents = 'auto';
			console.log('Debug button mounted and configured');
		}
		
		// Initialize auth state
		try {
			const { fetchUserInfo } = await import('$lib/stores/auth');
			await fetchUserInfo();
			console.log('Auth state initialized:', $authState);
		} catch (error) {
			console.error('Auth initialization error:', error);
		}
	});
</script>

{#if showDebug}
	<!-- Debug panel with high visibility -->
	<div class="fixed top-4 right-4 bg-red-900 bg-opacity-95 text-white p-6 rounded-lg text-sm max-w-md z-[99999] border-4 border-yellow-400">
		<div class="flex justify-between items-center mb-2">
			<h3 class="font-bold">Auth Debug Info</h3>
			<button on:click={toggleDebug} class="text-red-400 hover:text-red-300">✕</button>
		</div>
		
		<div class="space-y-2 text-xs">
			<div>
				<strong>Is Authenticated:</strong> 
				<span class="{safeAuthState.isAuthenticated ? 'text-green-400' : 'text-red-400'}">
					{safeAuthState.isAuthenticated}
				</span>
			</div>
			
			<div>
				<strong>Is Loading:</strong> 
				<span class="{safeAuthState.isLoading ? 'text-yellow-400' : 'text-gray-400'}">
					{safeAuthState.isLoading}
				</span>
			</div>
			
			<div>
				<strong>Raw AuthState:</strong> 
				<pre class="text-xs bg-gray-800 p-2 rounded mt-1 overflow-auto">
					{JSON.stringify($authState, null, 2) || 'undefined'}
				</pre>
			</div>
			
			{#if safeAuthState.user}
				<div>
					<strong>User ID:</strong> {safeAuthState.user.userId || 'N/A'}
				</div>
				<div>
					<strong>User Details:</strong> {safeAuthState.user.userDetails || 'N/A'}
				</div>
				<div>
					<strong>Identity Provider:</strong> {safeAuthState.user.identityProvider || 'N/A'}
				</div>
				<div>
					<strong>User Roles:</strong> 
					{#if safeAuthState.user.userRoles && safeAuthState.user.userRoles.length > 0}
						{safeAuthState.user.userRoles.join(', ')}
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
	bind:this={debugButton}
	on:click={toggleDebug}
	on:mousedown={toggleDebug}
	on:touchstart={toggleDebug}
	class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white px-6 py-6 rounded-full text-xl font-bold shadow-2xl border-4 border-white cursor-pointer select-none"
	style="z-index: 99999 !important; pointer-events: auto !important; user-select: none;"
	title="Toggle Auth Debug - TEST BUTTON"
>
	🔧 DEBUG
</button>

<!-- Always visible status indicator -->
<div class="fixed top-4 left-4 bg-blue-900 bg-opacity-90 text-white p-3 rounded text-xs z-[99998] border border-blue-300">
	<div>showDebug: {showDebug}</div>
	<div>Auth Loading: {safeAuthState.isLoading}</div>
	<div>Auth Status: {safeAuthState.isAuthenticated}</div>
	<div>Raw Auth: {$authState ? 'defined' : 'undefined'}</div>
</div>