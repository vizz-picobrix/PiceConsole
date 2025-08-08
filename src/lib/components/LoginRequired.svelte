<script lang="ts">
	import { login } from '$lib/stores/auth';
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50">
	<div class="max-w-md w-full space-y-8 p-8">
		<div class="text-center">
			<h2 class="mt-6 text-3xl font-extrabold text-gray-900">
				PiceConsole
			</h2>
			<p class="mt-2 text-sm text-gray-600">
				게임 운영자 전용 콘솔에 오신 것을 환영합니다
			</p>
		</div>
		
		<div class="mt-8 space-y-6">
			<button
				on:click={login}
				class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
			>
				<svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 2C13.1 2 14 2.9 14 4V8H18C18.6 8 19 8.4 19 9V20C19 20.6 18.6 21 18 21H6C5.4 21 5 20.6 5 20V9C5 8.4 5.4 8 6 8H10V4C10 2.9 10.9 2 12 2M12 4C11.4 4 11 4.4 11 5V8H13V5C13 4.4 12.6 4 12 4M12 13C12.8 13 13.5 13.7 13.5 14.5S12.8 16 12 16 10.5 15.3 10.5 14.5 11.2 13 12 13Z"/>
				</svg>
				Azure AD로 로그인
			</button>
			
			<div class="text-xs text-gray-500 text-center mt-4">
				<p>운영자 계정으로만 접근 가능합니다</p>
			</div>
		</div>
	</div>
</div>