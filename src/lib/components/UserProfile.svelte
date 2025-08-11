<script lang="ts">
	import { authState, logout } from '$lib/stores/auth';
	
	let showDropdown = false;
	let dropdownElement: HTMLDivElement;
	let buttonElement: HTMLButtonElement;
	let dropdownStyle = '';
	
	function toggleDropdown() {
		console.log('Dropdown toggle clicked, current state:', showDropdown);
		showDropdown = !showDropdown;
		console.log('Dropdown new state:', showDropdown);
		
		if (showDropdown) {
			setTimeout(() => positionDropdown(), 0);
		}
	}
	
	function positionDropdown() {
		if (!dropdownElement || !buttonElement) return;
		
		const buttonRect = buttonElement.getBoundingClientRect();
		const dropdownRect = dropdownElement.getBoundingClientRect();
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		
		const dropdownWidth = 192; // w-48 = 12rem = 192px
		const padding = 8; // 8px padding from viewport edges
		
		// Calculate horizontal position
		let left = buttonRect.left;
		if (left + dropdownWidth > viewportWidth - padding) {
			// Position from right edge of button
			left = buttonRect.right - dropdownWidth;
		}
		// Ensure it doesn't go off-screen on the left
		left = Math.max(padding, left);
		
		// Calculate vertical position and height
		const spaceBelow = viewportHeight - buttonRect.bottom - padding;
		const spaceAbove = buttonRect.top - padding;
		const contentHeight = 80; // Approximate content height
		
		let top: number;
		let maxHeight: number;
		
		if (spaceBelow >= contentHeight || spaceBelow >= spaceAbove) {
			// Position below button
			top = buttonRect.bottom + 4;
			maxHeight = Math.max(80, spaceBelow - 4);
		} else {
			// Position above button
			top = Math.max(padding, buttonRect.top - Math.max(80, spaceAbove - 4));
			maxHeight = buttonRect.top - top - 4;
		}
		
		// Ensure dropdown fits in viewport
		maxHeight = Math.min(maxHeight, viewportHeight - padding * 2);
		
		dropdownStyle = `
			position: fixed;
			left: ${left}px;
			top: ${top}px;
			max-height: ${maxHeight}px;
			z-index: 9998;
		`;
	}
	
	function handleLogout() {
		logout();
	}
</script>

{#if $authState.isAuthenticated && $authState.user}
	<div class="relative">
		<button
			bind:this={buttonElement}
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
			<div 
				bind:this={dropdownElement}
				class="w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-auto"
				style={dropdownStyle}
			>
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

<svelte:window 
	on:click={(e) => {
		if (showDropdown && !e.target.closest('.relative') && !e.target.closest('[style*="position: fixed"]')) {
			console.log('Window clicked outside dropdown, closing');
			showDropdown = false;
		}
	}}
	on:resize={() => {
		if (showDropdown) {
			positionDropdown();
		}
	}}
	on:scroll={() => {
		if (showDropdown) {
			positionDropdown();
		}
	}}
/>