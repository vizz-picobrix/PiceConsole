<script lang="ts">
	import { onMount } from 'svelte';
	import { authState, initializeAuth, isOperator } from '$lib/stores/auth';
	import LoginRequired from './LoginRequired.svelte';
	import LoadingSpinner from './LoadingSpinner.svelte';

	export let requireOperator = false;

	let mounted = false;

	onMount(async () => {
		mounted = true;
		await initializeAuth();
	});

	$: showContent = mounted && $authState.isAuthenticated && (!requireOperator || isOperator());
	$: showLogin = mounted && !$authState.isLoading && !$authState.isAuthenticated;
	$: showUnauthorized = mounted && !$authState.isLoading && $authState.isAuthenticated && requireOperator && !isOperator();
	$: showLoading = !mounted || $authState.isLoading;
</script>

{#if showLoading}
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
{:else}
	<div class="min-h-screen flex items-center justify-center bg-gray-50">
		<div class="max-w-md w-full space-y-8 p-8 text-center">
			<h2 class="text-2xl font-bold text-gray-900">인증 오류</h2>
			<p class="text-sm text-gray-600">인증 상태를 확인할 수 없습니다.</p>
			<button 
				on:click={() => window.location.reload()} 
				class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
			>
				페이지 새로고침
			</button>
		</div>
	</div>
{/if}