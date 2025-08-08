import { E as getContext, z as push, F as store_get, G as escape_html, I as unsubscribe_stores, D as pop, J as ensure_array_like, K as attr, M as attr_class, N as stringify, O as slot } from "../../chunks/index.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "clsx";
import "../../chunks/state.svelte.js";
import { a as authState } from "../../chunks/auth.js";
import { A as AuthGuard } from "../../chunks/AuthGuard.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function UserProfile($$payload, $$props) {
  push();
  var $$store_subs;
  if (store_get($$store_subs ??= {}, "$authState", authState).isAuthenticated && store_get($$store_subs ??= {}, "$authState", authState).user) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="relative"><button class="flex items-center space-x-2 text-sm text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2"><div class="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center"><span class="text-white text-sm font-medium">${escape_html(store_get($$store_subs ??= {}, "$authState", authState).user.userDetails.charAt(0).toUpperCase())}</span></div> <span class="hidden md:block">${escape_html(store_get($$store_subs ??= {}, "$authState", authState).user.userDetails)}</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> `);
    {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Header($$payload, $$props) {
  push();
  var $$store_subs;
  const navigation = [
    { name: "Dashboard", href: "/" },
    { name: "Game Management", href: "/admin/games" },
    { name: "User Management", href: "/admin/users" },
    { name: "Analytics", href: "/admin/analytics" }
  ];
  const each_array = ensure_array_like(navigation);
  $$payload.out.push(`<header class="bg-white shadow-sm border-b"><nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex items-center"><a href="/" class="flex-shrink-0 font-bold text-xl text-blue-600">PiceConsole</a></div> <div class="flex items-center space-x-8"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out.push(`<a${attr("href", item.href)}${attr_class(`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === item.href ? "text-blue-600 bg-blue-50" : "")}`)}>${escape_html(item.name)}</a>`);
  }
  $$payload.out.push(`<!--]--> `);
  UserProfile($$payload);
  $$payload.out.push(`<!----></div></div></nav></header>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function AuthDebug($$payload, $$props) {
  push();
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <button class="fixed bottom-4 left-4 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full text-xs z-50" title="Toggle Auth Debug">🔧</button>`);
  pop();
}
function _layout($$payload, $$props) {
  AuthGuard($$payload, {
    children: ($$payload2) => {
      $$payload2.out.push(`<div class="min-h-screen bg-gray-50">`);
      Header($$payload2);
      $$payload2.out.push(`<!----> <main class="container mx-auto px-4 py-8"><!---->`);
      slot($$payload2, $$props, "default", {});
      $$payload2.out.push(`<!----></main></div>`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  AuthDebug($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _layout as default
};
