import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export interface User {
	userId: string;
	userDetails: string;
	userRoles: string[];
	identityProvider: string;
}

export interface AuthState {
	user: User | null;
	isAuthenticated: boolean;
	isLoading: boolean;
}

export const authState: Writable<AuthState> = writable({
	user: null,
	isAuthenticated: false,
	isLoading: true
});

export async function fetchUserInfo(): Promise<User | null> {
	try {
		const response = await fetch('/.auth/me');
		if (!response.ok) {
			return null;
		}
		
		const data = await response.json();
		const clientPrincipal = data.clientPrincipal;
		
		if (!clientPrincipal) {
			return null;
		}
		
		return {
			userId: clientPrincipal.userId,
			userDetails: clientPrincipal.userDetails,
			userRoles: clientPrincipal.userRoles || [],
			identityProvider: clientPrincipal.identityProvider
		};
	} catch (error) {
		console.error('Failed to fetch user info:', error);
		return null;
	}
}

export async function initializeAuth() {
	authState.update(state => ({ ...state, isLoading: true }));
	
	const user = await fetchUserInfo();
	
	authState.update(state => ({
		...state,
		user,
		isAuthenticated: !!user,
		isLoading: false
	}));
}

export function hasRole(roles: string[]): boolean {
	let currentUser: User | null = null;
	authState.subscribe(state => {
		currentUser = state.user;
	})();
	
	if (!currentUser) {
		return false;
	}
	
	// For testing: if no roles are assigned, treat as operator
	if (!currentUser.userRoles || currentUser.userRoles.length === 0) {
		console.log('No roles assigned, treating as operator for testing');
		return true;
	}
	
	return roles.some(role => currentUser!.userRoles.includes(role));
}

export function isOperator(): boolean {
	// Allow all authenticated users for testing
	let currentUser: User | null = null;
	authState.subscribe(state => {
		currentUser = state.user;
	})();
	
	console.log('isOperator check:', { 
		hasUser: !!currentUser, 
		userRoles: currentUser?.userRoles,
		userDetails: currentUser?.userDetails 
	});
	
	return !!currentUser;
}

export function login() {
	window.location.href = '/login';
}

export function logout() {
	window.location.href = '/logout';
}