export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.Bbe6C1D6.js",app:"_app/immutable/entry/app.ZCVRTUl1.js",imports:["_app/immutable/entry/start.Bbe6C1D6.js","_app/immutable/chunks/DNcnrfsj.js","_app/immutable/chunks/CUqlurZA.js","_app/immutable/chunks/BEwaqqRn.js","_app/immutable/chunks/DLwrZ92H.js","_app/immutable/chunks/DGJAQINX.js","_app/immutable/entry/app.ZCVRTUl1.js","_app/immutable/chunks/BEwaqqRn.js","_app/immutable/chunks/DLwrZ92H.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/CUqlurZA.js","_app/immutable/chunks/Du9JZrCH.js","_app/immutable/chunks/DGJAQINX.js","_app/immutable/chunks/DqMgYedN.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin/analytics",
				pattern: /^\/admin\/analytics\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/admin/games",
				pattern: /^\/admin\/games\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/admin/users",
				pattern: /^\/admin\/users\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/unauthorized",
				pattern: /^\/unauthorized\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
