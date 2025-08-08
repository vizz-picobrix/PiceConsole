<script lang="ts">
	import { onMount } from 'svelte';
	import { authState, initializeAuth, isOperator } from '$lib/stores/auth';
	import LoginRequired from './LoginRequired.svelte';
	import LoadingSpinner from './LoadingSpinner.svelte';

	export let requireOperator = false;

	onMount(() => {
		initializeAuth();
	});

	$: showContent = $authState.isAuthenticated && (!requireOperator || isOperator());
	$: showLogin = !$authState.isLoading && !$authState.isAuthenticated;
	$: showUnauthorized = !$authState.isLoading && $authState.isAuthenticated && requireOperator && !isOperator();
</script>

{#if $authState.isLoading}
	<LoadingSpinner />
{:else if showLogin}
	<LoginRequired />
{:else if showUnauthorized}
	<div class="min-h-screen flex items-center justify-center bg-gray-50">
		<div class="max-w-md w-full space-y-8 p-8">
			<div class="text-center">
				<h2 class="mt-6 text-3xl font-extrabold text-gray-900">
					접근 권한이 없습니다
				</h2>
				<p class="mt-2 text-sm text-gray-600">
					이 페이지에 접근하려면 운영자 권한이 필요합니다.
				</p>
			</div>
		</div>
	</div>
{:else if showContent}
	<slot />
{/if}