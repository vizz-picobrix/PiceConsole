<script lang="ts">
	let count: number = 0;
	const increment = () => count += 1;
	const decrement = () => count -= 1;
</script>

<div class="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg">
	<h2 class="text-2xl font-semibold text-gray-800">Counter Component</h2>
	<div class="text-4xl font-bold text-blue-600">{count}</div>
	<div class="flex space-x-4">
		<button 
			on:click={decrement}
			class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
		>
			-
		</button>
		<button 
			on:click={increment}
			class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
		>
			+
		</button>
	</div>
</div>