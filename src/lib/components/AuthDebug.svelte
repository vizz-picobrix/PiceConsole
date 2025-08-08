<script lang="ts">
	import { authState } from '$lib/stores/auth';
	import { onMount } from 'svelte';
	
	let showDebug = false;
	let debugButton: HTMLButtonElement;
	
	// Safe access to authState - force reactivity
	$: safeAuthState = $authState ? $authState : { 
		isAuthenticated: false, 
		isLoading: false, 
		user: null 
	};
	
	// Debug reactive statement
	$: console.log('Reactive update - authState:', $authState, 'safeAuthState:', safeAuthState);
	
	function toggleDebug(event: Event) {
		event.preventDefault();
		event.stopPropagation();
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

<!-- Always visible test panel -->
<div class="fixed top-20 right-4 p-4 rounded-lg text-sm max-w-md border-4" style="background-color: green !important; color: white !important; z-index: 99999 !important; border-color: red !important;">
	<h3 class="font-bold" style="color: white !important;">ALWAYS VISIBLE TEST PANEL</h3>
	<div style="color: white !important;">showDebug: {showDebug}</div>
</div>

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
				<span class="{$authState?.isAuthenticated ? 'text-green-400' : 'text-red-400'}">
					{$authState?.isAuthenticated || false}
				</span>
			</div>
			
			<div>
				<strong>Is Loading:</strong> 
				<span class="{$authState?.isLoading ? 'text-yellow-400' : 'text-gray-400'}">
					{$authState?.isLoading || false}
				</span>
			</div>
			
			<div>
				<strong>Raw AuthState:</strong> 
				<pre class="text-xs bg-gray-800 p-2 rounded mt-1 overflow-auto max-h-32">
					{JSON.stringify($authState, null, 2) || 'undefined'}
				</pre>
			</div>
			
			{#if $authState?.user}
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
				<div class="text-red-400">No user data available</div>
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
	class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-6 rounded-full text-xl font-bold shadow-2xl cursor-pointer select-none"
	style="background-color: red !important; color: white !important; z-index: 99999 !important; pointer-events: auto !important; user-select: none !important; border: 4px solid white !important;"
	title="Toggle Auth Debug - TEST BUTTON"
>
	🔧 DEBUG
</button>

<!-- Always visible status indicator -->
<div class="fixed top-4 left-4 p-3 rounded text-xs border" style="background-color: blue !important; color: white !important; z-index: 99998 !important; border-color: lightblue !important;">
	<div style="color: white !important;">showDebug: {showDebug}</div>
	<div style="color: white !important;">Auth Loading: {safeAuthState.isLoading}</div>
	<div style="color: white !important;">Auth Status: {safeAuthState.isAuthenticated}</div>
	<div style="color: white !important;">Raw Auth: {$authState ? 'defined' : 'undefined'}</div>
</div>