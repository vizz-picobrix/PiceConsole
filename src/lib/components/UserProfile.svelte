<script lang="ts">
	import { authState, logout } from '$lib/stores/auth';
	
	let showDropdown = false;
	let dropdownElement: HTMLDivElement;
	let buttonElement: HTMLButtonElement;
	let dropdownPosition = 'right-0';
	
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
		const dropdownRect = dropdownElement.getBoundingClientRect();
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
		
		// Check if dropdown would extend below viewport
		const spaceBelow = viewportHeight - buttonRect.bottom - 8; // 8px for mt-2
		if (spaceBelow < 200) { // If less than 200px available below
			// Position above the button instead
			const dropdownEl = dropdownElement;
			if (dropdownEl) {
				dropdownEl.style.bottom = '100%';
				dropdownEl.style.top = 'auto';
				dropdownEl.style.marginBottom = '0.5rem';
				dropdownEl.style.marginTop = '0';
			}
		} else {
			// Reset to normal positioning below button
			const dropdownEl = dropdownElement;
			if (dropdownEl) {
				dropdownEl.style.bottom = 'auto';
				dropdownEl.style.top = '100%';
				dropdownEl.style.marginBottom = '0';
				dropdownEl.style.marginTop = '0.5rem';
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
				class="absolute {dropdownPosition} mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-[9998] max-h-96 overflow-auto"
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