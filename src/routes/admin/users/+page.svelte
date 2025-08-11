<script lang="ts">
	import { authState } from '$lib/stores/auth';
	
	// Sample user data for demonstration
	let users = [
		{
			id: '1',
			name: 'John Smith',
			email: 'john.smith@company.com',
			role: 'Admin',
			status: 'Active',
			lastLogin: '2025-01-08 14:30',
			joinedDate: '2024-12-01'
		},
		{
			id: '2',
			name: 'Sarah Johnson',
			email: 'sarah.johnson@company.com',
			role: 'Operator',
			status: 'Active',
			lastLogin: '2025-01-08 09:15',
			joinedDate: '2024-12-15'
		},
		{
			id: '3',
			name: 'Mike Davis',
			email: 'mike.davis@company.com',
			role: 'Viewer',
			status: 'Inactive',
			lastLogin: '2025-01-05 16:45',
			joinedDate: '2024-11-20'
		},
		{
			id: '4',
			name: 'vizz@picobrix.com',
			email: 'vizz@picobrix.com',
			role: 'Admin',
			status: 'Active',
			lastLogin: '2025-01-08 19:30',
			joinedDate: '2025-01-08'
		}
	];
	
	let showInviteModal = false;
	let selectedUser = null;
	
	function handleInviteUser() {
		showInviteModal = true;
	}
	
	function handleEditUser(userId: string) {
		selectedUser = users.find(u => u.id === userId);
		// Edit user functionality would go here
		// TODO: Implement edit functionality
	}
	
	function handleDeleteUser(userId: string) {
		const user = users.find(u => u.id === userId);
		if (confirm(`정말 사용자 "${user?.name}"를 삭제하시겠습니까?`)) {
			users = users.filter(user => user.id !== userId);
		}
	}
	
	function toggleUserStatus(userId: string) {
		users = users.map(user => 
			user.id === userId 
				? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
				: user
		);
	}
</script>

<svelte:head>
	<title>User Management - PiceConsole</title>
</svelte:head>

<div class="space-y-6">
	<div class="flex justify-between items-center">
		<div>
			<h1 class="text-2xl font-bold text-gray-900">User Management</h1>
			<p class="text-sm text-gray-500 mt-1">현재 사용자: {$authState.user?.userDetails}</p>
		</div>
		<button 
			on:click={handleInviteUser}
			class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
		>
			Invite User
		</button>
	</div>
	
	<!-- Users Table -->
	<div class="bg-white shadow-sm rounded-lg overflow-hidden">
		<div class="px-6 py-4 border-b border-gray-200">
			<h2 class="text-lg font-medium text-gray-900">Operator Users</h2>
		</div>
		
		<div class="overflow-x-auto">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
					<tr>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
						<th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					{#each users as user}
						<tr class="hover:bg-gray-50">
							<td class="px-6 py-4 whitespace-nowrap">
								<div class="flex items-center">
									<div class="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
										<span class="text-sm font-medium text-indigo-600">{user.name.charAt(0).toUpperCase()}</span>
									</div>
									<div class="ml-4">
										<div class="text-sm font-medium text-gray-900">{user.name}</div>
										<div class="text-sm text-gray-500">{user.email}</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-nowrap">
								<span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full {
									user.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
									user.role === 'Operator' ? 'bg-blue-100 text-blue-800' :
									'bg-gray-100 text-gray-800'
								}">
									{user.role}
								</span>
							</td>
							<td class="px-6 py-4 whitespace-nowrap">
								<button 
									on:click={() => toggleUserStatus(user.id)}
									class="inline-flex px-2 py-1 text-xs font-semibold rounded-full cursor-pointer {
										user.status === 'Active' ? 'bg-green-100 text-green-800 hover:bg-green-200' : 
										'bg-red-100 text-red-800 hover:bg-red-200'
									}"
								>
									{user.status}
								</button>
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								{user.lastLogin}
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								{user.joinedDate}
							</td>
							<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
								<button 
									on:click={() => handleEditUser(user.id)}
									class="text-indigo-600 hover:text-indigo-900"
								>
									Edit
								</button>
								{#if user.email !== $authState.user?.userDetails}
									<button 
										on:click={() => handleDeleteUser(user.id)}
										class="text-red-600 hover:text-red-900"
									>
										Delete
									</button>
								{/if}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>

<!-- Invite User Modal -->
{#if showInviteModal}
	<div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" on:click={() => showInviteModal = false}>
		<div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" on:click|stopPropagation>
			<div class="mt-3">
				<h3 class="text-lg font-medium text-gray-900 mb-4">Invite New User</h3>
				<form on:submit|preventDefault={() => showInviteModal = false}>
					<div class="mb-4">
						<label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
						<input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="user@company.com">
					</div>
					<div class="mb-4">
						<label class="block text-sm font-medium text-gray-700 mb-1">Role</label>
						<select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
							<option value="Viewer">Viewer</option>
							<option value="Operator">Operator</option>
							<option value="Admin">Admin</option>
						</select>
					</div>
					<div class="flex justify-end space-x-3">
						<button 
							type="button" 
							on:click={() => showInviteModal = false}
							class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
						>
							Cancel
						</button>
						<button 
							type="submit"
							class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
						>
							Send Invitation
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
{/if}