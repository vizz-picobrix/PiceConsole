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
		console.log('Fetching user info from /.auth/me');
		const response = await fetch('/.auth/me');
		console.log('Response status:', response.status, response.statusText);
		
		if (!response.ok) {
			console.log('Response not OK, returning null');
			return null;
		}
		
		const data = await response.json();
		console.log('Auth response data:', data);
		const clientPrincipal = data.clientPrincipal;
		
		if (!clientPrincipal) {
			console.log('No clientPrincipal found, returning null');
			return null;
		}
		
		const user = {
			userId: clientPrincipal.userId,
			userDetails: clientPrincipal.userDetails,
			userRoles: clientPrincipal.userRoles || [],
			identityProvider: clientPrincipal.identityProvider
		};
		
		console.log('User info extracted:', user);
		return user;
	} catch (error) {
		console.error('Failed to fetch user info:', error);
		return null;
	}
}

export async function initializeAuth() {
	console.log('Initializing auth...');
	authState.update(state => ({ ...state, isLoading: true }));
	
	try {
		const user = await fetchUserInfo();
		
		console.log('Auth initialization complete:', { user, isAuthenticated: !!user });
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
	let currentAuthState: AuthState | null = null;
	
	const unsubscribe = authState.subscribe(state => {
		currentUser = state.user;
		currentAuthState = state;
	});
	unsubscribe();
	
	console.log('isOperator check:', { 
		hasUser: !!currentUser, 
		userRoles: currentUser?.userRoles,
		userDetails: currentUser?.userDetails,
		isAuthenticated: currentAuthState?.isAuthenticated,
		isLoading: currentAuthState?.isLoading
	});
	
	return !!currentUser && !!currentAuthState?.isAuthenticated;
}

export function login() {
	window.location.href = '/login';
}

export function logout() {
	window.location.href = '/logout';
}