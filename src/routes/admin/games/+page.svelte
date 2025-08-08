<script lang="ts">
	import { authState } from '$lib/stores/auth';
	
	// Sample game data for demonstration
	let games = [
		{
			id: '1',
			name: 'Fantasy Adventure',
			status: 'Active',
			players: 1234,
			revenue: '$12,345',
			lastUpdated: '2025-01-08'
		},
		{
			id: '2', 
			name: 'Space Explorer',
			status: 'Maintenance',
			players: 567,
			revenue: '$5,678',
			lastUpdated: '2025-01-07'
		},
		{
			id: '3',
			name: 'Racing Championship',
			status: 'Active',
			players: 2345,
			revenue: '$23,456',
			lastUpdated: '2025-01-08'
		}
	];
	
	let showAddModal = false;
	
	function handleAddGame() {
		showAddModal = true;
	}
	
	function handleEditGame(gameId: string) {
		console.log('Edit game:', gameId);
		// TODO: Implement edit functionality
	}
	
	function handleDeleteGame(gameId: string) {
		if (confirm('정말 이 게임을 삭제하시겠습니까?')) {
			games = games.filter(game => game.id !== gameId);
		}
	}
</script>

<svelte:head>
	<title>Game Management - PiceConsole</title>
</svelte:head>

<div class="space-y-6">
	<div class="flex justify-between items-center">
		<div>
			<h1 class="text-2xl font-bold text-gray-900">Game Management</h1>
			<p class="text-sm text-gray-500 mt-1">현재 사용자: {$authState.user?.userDetails}</p>
		</div>
		<button 
			on:click={handleAddGame}
			class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
		>
			Add New Game
		</button>
	</div>
	
	<!-- Games Table -->
	<div class="bg-white shadow-sm rounded-lg overflow-hidden">
		<div class="px-6 py-4 border-b border-gray-200">
			<h2 class="text-lg font-medium text-gray-900">Active Games</h2>
		</div>
		
		<div class="overflow-x-auto">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
					<tr>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Game</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Players</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
						<th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					{#each games as game}
						<tr class="hover:bg-gray-50">
							<td class="px-6 py-4 whitespace-nowrap">
								<div class="text-sm font-medium text-gray-900">{game.name}</div>
								<div class="text-sm text-gray-500">ID: {game.id}</div>
							</td>
							<td class="px-6 py-4 whitespace-nowrap">
								<span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full {game.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">
									{game.status}
								</span>
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
								{game.players.toLocaleString()}
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
								{game.revenue}
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								{game.lastUpdated}
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
								<button 
									on:click={() => handleEditGame(game.id)}
									class="text-indigo-600 hover:text-indigo-900"
								>
									Edit
								</button>
								<button 
									on:click={() => handleDeleteGame(game.id)}
									class="text-red-600 hover:text-red-900"
								>
									Delete
								</button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>

<!-- Add Game Modal -->
{#if showAddModal}
	<div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" on:click={() => showAddModal = false}>
		<div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" on:click|stopPropagation>
			<div class="mt-3">
				<h3 class="text-lg font-medium text-gray-900 mb-4">Add New Game</h3>
				<form on:submit|preventDefault={() => showAddModal = false}>
					<div class="mb-4">
						<label class="block text-sm font-medium text-gray-700 mb-1">Game Name</label>
						<input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
					</div>
					<div class="mb-4">
						<label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
						<select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
							<option value="Active">Active</option>
							<option value="Maintenance">Maintenance</option>
							<option value="Inactive">Inactive</option>
						</select>
					</div>
					<div class="flex justify-end space-x-3">
						<button 
							type="button" 
							on:click={() => showAddModal = false}
							class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
						>
							Cancel
						</button>
						<button 
							type="submit"
							class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
						>
							Add Game
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
{/if}