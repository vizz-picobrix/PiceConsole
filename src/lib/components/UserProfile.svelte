<script lang="ts">
	import { authState, logout } from '$lib/stores/auth';
	
	let showDropdown = false;
	let dropdownElement: HTMLDivElement;
	let buttonElement: HTMLButtonElement;
	let dropdownPosition = 'right-0';
	let dropdownDirection = 'below'; // 'below' or 'above'
	let maxDropdownHeight = '12rem'; // max-h-48 default
	
	function toggleDropdown() {
		console.log('Dropdown toggle clicked, current state:', showDropdown);
		showDropdown = !showDropdown;
		console.log('Dropdown new state:', showDropdown);
		
		if (showDropdown) {
			setTimeout(() => adjustDropdownPosition(), 0);
		}
	}
	
	function adjustDropdownPosition() {
		if (!dropdownElement || !buttonElement) return;
		
		const buttonRect = buttonElement.getBoundingClientRect();
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		
		// Check horizontal positioning
		const dropdownWidth = 192; // w-48 = 12rem = 192px
		const spaceOnRight = viewportWidth - buttonRect.right;
		const spaceOnLeft = buttonRect.left;
		
		if (spaceOnRight >= dropdownWidth) {
			dropdownPosition = 'right-0';
		} else if (spaceOnLeft >= dropdownWidth) {
			dropdownPosition = 'left-0';
		} else {
			// If neither side has enough space, choose the side with more space
			dropdownPosition = spaceOnRight > spaceOnLeft ? 'right-0' : 'left-0';
		}
		
		// Calculate available space and adjust height and position
		const spaceBelow = viewportHeight - buttonRect.bottom - 16; // 16px margin
		const spaceAbove = buttonRect.top - 16; // 16px margin
		const minDropdownHeight = 100; // Minimum height needed for content
		
		if (spaceBelow >= minDropdownHeight) {
			// Position below with limited height
			dropdownDirection = 'below';
			maxDropdownHeight = Math.min(spaceBelow, 192) + 'px'; // max 12rem or available space
		} else if (spaceAbove >= minDropdownHeight) {
			// Position above with limited height
			dropdownDirection = 'above';
			maxDropdownHeight = Math.min(spaceAbove, 192) + 'px';
		} else {
			// Very constrained space, use the larger available space
			if (spaceBelow > spaceAbove) {
				dropdownDirection = 'below';
				maxDropdownHeight = (spaceBelow - 8) + 'px';
			} else {
				dropdownDirection = 'above';
				maxDropdownHeight = (spaceAbove - 8) + 'px';
			}
		}
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
				class="absolute {dropdownPosition} w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-[9998] overflow-auto"
				class:mt-2={dropdownDirection === 'below'}
				class:mb-2={dropdownDirection === 'above'}
				class:bottom-full={dropdownDirection === 'above'}
				class:top-full={dropdownDirection === 'below'}
				style="max-height: {maxDropdownHeight}"
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
		if (showDropdown && !e.target.closest('.relative')) {
			console.log('Window clicked outside dropdown, closing');
			showDropdown = false;
		}
	}}
	on:resize={() => {
		if (showDropdown) {
			adjustDropdownPosition();
		}
	}}
	on:scroll={() => {
		if (showDropdown) {
			adjustDropdownPosition();
		}
	}}
/>