<script lang="ts">
	import { authState, logout } from '$lib/stores/auth';
	
	let showDropdown = false;
	
	function toggleDropdown() {
		console.log('Dropdown toggle clicked, current state:', showDropdown);
		showDropdown = !showDropdown;
		console.log('Dropdown new state:', showDropdown);
	}
	
	function handleLogout() {
		logout();
	}
</script>

{#if $authState.isAuthenticated && $authState.user}
	<div class="relative">
		<button
			on:click={toggleDropdown}
			class="flex items-center space-x-2 text-sm text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2"
		>
			<div class="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
				<span class="text-white text-sm font-medium">
					{$authState.user.userDetails.charAt(0).toUpperCase()}
				</span>
			</div>
			<span class="hidden md:block">{$authState.user.userDetails}</span>
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
			</svg>
		</button>
		
		{#if showDropdown}
			<div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-[9998]">
				<div class="py-1">
					<div class="px-4 py-2 text-sm text-gray-900 border-b border-gray-200">
						<p class="font-medium">{$authState.user.userDetails}</p>
						<p class="text-xs text-gray-500 mt-1">
							역할: {$authState.user.userRoles.join(', ')}
						</p>
					</div>
					<button
						on:click={handleLogout}
						class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
					>
						로그아웃
					</button>
				</div>
			</div>
		{/if}
	</div>
{/if}

<svelte:window on:click={(e) => {
	if (showDropdown && !e.target.closest('.relative')) {
		console.log('Window clicked outside dropdown, closing');
		showDropdown = false;
	}
}} />