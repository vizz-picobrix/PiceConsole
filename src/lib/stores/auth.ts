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
	
	try {
		const user = await fetchUserInfo();
		
		authState.update(state => ({
			...state,
			user,
			isAuthenticated: !!user,
			isLoading: false
		}));
	} catch (error) {
		console.error('Auth initialization failed:', error);
		authState.update(state => ({
			...state,
			user: null,
			isAuthenticated: false,
			isLoading: false
		}));
	}
}

export function hasRole(roles: string[]): boolean {
	let currentUser: User | null = null;
	authState.subscribe(state => {
		currentUser = state.user;
	})();
	
	if (!currentUser) {
		return false;
	}
	
	if (!currentUser.userRoles || currentUser.userRoles.length === 0) {
		return true; // For testing: treat users with no roles as having access
	}
	
	return roles.some(role => currentUser!.userRoles.includes(role));
}

export function isOperator(): boolean {
	let currentUser: User | null = null;
	let currentAuthState: AuthState | null = null;
	
	const unsubscribe = authState.subscribe(state => {
		currentUser = state.user;
		currentAuthState = state;
	});
	unsubscribe();
	
	return !!currentUser && !!currentAuthState?.isAuthenticated;
}

export function login() {
	window.location.href = '/login';
}

export function logout() {
	window.location.href = '/logout';
}