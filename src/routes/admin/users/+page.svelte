<script lang="ts">
	import AuthGuard from '$lib/components/AuthGuard.svelte';
</script>

<svelte:head>
	<title>User Management - PiceConsole</title>
</svelte:head>

<AuthGuard>
	<div class="space-y-6">
		<div class="flex justify-between items-center">
			<h1 class="text-2xl font-bold text-gray-900">User Management</h1>
			<button class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
				Invite User
			</button>
		</div>
		
		<div class="bg-white shadow-sm rounded-lg overflow-hidden">
			<div class="px-6 py-4 border-b border-gray-200">
				<h2 class="text-lg font-medium text-gray-900">Operator Users</h2>
			</div>
			
			<div class="p-6">
				<div class="text-center text-gray-500">
					<p>사용자 관리 기능이 곧 추가될 예정입니다.</p>
					<p class="text-sm mt-2">운영자 권한으로 접근하고 있습니다.</p>
				</div>
			</div>
		</div>
	</div>
</AuthGuard>