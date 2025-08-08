<script lang="ts">
	import { authState } from '$lib/stores/auth';
	
	// Sample analytics data
	let metrics = {
		totalPlayers: { value: 12345, change: '+5.2%', trend: 'up' },
		activeSessions: { value: 1234, change: '+2.1%', trend: 'up' },
		revenue: { value: 45678, change: '-1.2%', trend: 'down' },
		avgSessionTime: { value: '24.5m', change: '+8.3%', trend: 'up' },
		retention: { value: '78.2%', change: '+3.1%', trend: 'up' },
		conversionRate: { value: '4.7%', change: '-0.5%', trend: 'down' }
	};
	
	// Game performance data
	let gamePerformance = [
		{ name: 'Fantasy Adventure', players: 5432, revenue: '$18,234', conversionRate: '5.2%', retention: '82.1%' },
		{ name: 'Space Explorer', players: 3456, revenue: '$12,456', conversionRate: '4.8%', retention: '75.3%' },
		{ name: 'Racing Championship', players: 2345, revenue: '$8,967', conversionRate: '3.9%', retention: '71.8%' },
		{ name: 'Puzzle Master', players: 1234, revenue: '$6,021', conversionRate: '4.1%', retention: '85.2%' }
	];
	
	// Recent events data
	let recentEvents = [
		{ time: '19:45', event: 'High player activity detected in Fantasy Adventure', type: 'info' },
		{ time: '19:30', event: 'Revenue milestone reached: $45K this month', type: 'success' },
		{ time: '19:15', event: 'Server load warning: 85% capacity', type: 'warning' },
		{ time: '19:00', event: 'New user registration spike: +23% today', type: 'info' },
		{ time: '18:45', event: 'Payment processing delay reported', type: 'error' }
	];
	
	let selectedTimeRange = 'today';
</script>

<svelte:head>
	<title>Analytics - PiceConsole</title>
</svelte:head>

<div class="space-y-6">
	<div class="flex justify-between items-center">
		<div>
			<h1 class="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
			<p class="text-sm text-gray-500 mt-1">현재 사용자: {$authState.user?.userDetails}</p>
		</div>
		<select bind:value={selectedTimeRange} class="px-3 py-2 border border-gray-300 rounded-md text-sm">
			<option value="today">Today</option>
			<option value="week">This Week</option>
			<option value="month">This Month</option>
			<option value="quarter">This Quarter</option>
		</select>
	</div>
	
	<!-- Key Metrics -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		<div class="bg-white p-6 rounded-lg shadow-sm">
			<h3 class="text-sm font-medium text-gray-500">Total Players</h3>
			<p class="text-2xl font-semibold text-gray-900 mt-2">{metrics.totalPlayers.value.toLocaleString()}</p>
			<p class="text-xs mt-1 {metrics.totalPlayers.trend === 'up' ? 'text-green-600' : 'text-red-600'}">
				{metrics.totalPlayers.change} from last week
			</p>
		</div>
		
		<div class="bg-white p-6 rounded-lg shadow-sm">
			<h3 class="text-sm font-medium text-gray-500">Active Sessions</h3>
			<p class="text-2xl font-semibold text-gray-900 mt-2">{metrics.activeSessions.value.toLocaleString()}</p>
			<p class="text-xs mt-1 {metrics.activeSessions.trend === 'up' ? 'text-green-600' : 'text-red-600'}">
				{metrics.activeSessions.change} from yesterday
			</p>
		</div>
		
		<div class="bg-white p-6 rounded-lg shadow-sm">
			<h3 class="text-sm font-medium text-gray-500">Revenue</h3>
			<p class="text-2xl font-semibold text-gray-900 mt-2">${metrics.revenue.value.toLocaleString()}</p>
			<p class="text-xs mt-1 {metrics.revenue.trend === 'up' ? 'text-green-600' : 'text-red-600'}">
				{metrics.revenue.change} from last month
			</p>
		</div>
		
		<div class="bg-white p-6 rounded-lg shadow-sm">
			<h3 class="text-sm font-medium text-gray-500">Avg Session Time</h3>
			<p class="text-2xl font-semibold text-gray-900 mt-2">{metrics.avgSessionTime.value}</p>
			<p class="text-xs mt-1 {metrics.avgSessionTime.trend === 'up' ? 'text-green-600' : 'text-red-600'}">
				{metrics.avgSessionTime.change} from last week
			</p>
		</div>
		
		<div class="bg-white p-6 rounded-lg shadow-sm">
			<h3 class="text-sm font-medium text-gray-500">Retention Rate</h3>
			<p class="text-2xl font-semibold text-gray-900 mt-2">{metrics.retention.value}</p>
			<p class="text-xs mt-1 {metrics.retention.trend === 'up' ? 'text-green-600' : 'text-red-600'}">
				{metrics.retention.change} from last month
			</p>
		</div>
		
		<div class="bg-white p-6 rounded-lg shadow-sm">
			<h3 class="text-sm font-medium text-gray-500">Conversion Rate</h3>
			<p class="text-2xl font-semibold text-gray-900 mt-2">{metrics.conversionRate.value}</p>
			<p class="text-xs mt-1 {metrics.conversionRate.trend === 'up' ? 'text-green-600' : 'text-red-600'}">
				{metrics.conversionRate.change} from last month
			</p>
		</div>
	</div>
	
	<!-- Game Performance Table -->
	<div class="bg-white shadow-sm rounded-lg overflow-hidden">
		<div class="px-6 py-4 border-b border-gray-200">
			<h2 class="text-lg font-medium text-gray-900">Game Performance</h2>
		</div>
		
		<div class="overflow-x-auto">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
					<tr>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Game</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Players</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion</th>
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retention</th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					{#each gamePerformance as game}
						<tr class="hover:bg-gray-50">
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{game.name}</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{game.players.toLocaleString()}</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{game.revenue}</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{game.conversionRate}</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{game.retention}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
	
	<!-- Recent Events -->
	<div class="bg-white shadow-sm rounded-lg overflow-hidden">
		<div class="px-6 py-4 border-b border-gray-200">
			<h2 class="text-lg font-medium text-gray-900">Recent Events</h2>
		</div>
		
		<div class="p-6">
			<div class="space-y-4">
				{#each recentEvents as event}
					<div class="flex items-start space-x-3">
						<div class="flex-shrink-0 w-2 h-2 mt-2 rounded-full {
							event.type === 'success' ? 'bg-green-400' :
							event.type === 'warning' ? 'bg-yellow-400' :
							event.type === 'error' ? 'bg-red-400' :
							'bg-blue-400'
						}"></div>
						<div class="flex-1 min-w-0">
							<div class="flex items-center justify-between">
								<p class="text-sm text-gray-900">{event.event}</p>
								<p class="text-xs text-gray-500">{event.time}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>