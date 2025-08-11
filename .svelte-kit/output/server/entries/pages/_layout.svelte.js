import { E as getContext, z as push, F as store_get, G as escape_html, I as unsubscribe_stores, D as pop, J as ensure_array_like, K as attr, M as attr_class, N as stringify, O as fallback, P as slot, Q as bind_props } from "../../chunks/index.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "clsx";
import "../../chunks/state.svelte.js";
import { a as authState } from "../../chunks/auth.js";
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
function LoginRequired($$payload) {
  $$payload.out.push(`<div class="min-h-screen flex items-center justify-center bg-gray-50"><div class="max-w-md w-full space-y-8 p-8"><div class="text-center"><h2 class="mt-6 text-3xl font-extrabold text-gray-900">PiceConsole</h2> <p class="mt-2 text-sm text-gray-600">게임 운영자 전용 콘솔에 오신 것을 환영합니다</p></div> <div class="mt-8 space-y-6"><button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"><svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C13.1 2 14 2.9 14 4V8H18C18.6 8 19 8.4 19 9V20C19 20.6 18.6 21 18 21H6C5.4 21 5 20.6 5 20V9C5 8.4 5.4 8 6 8H10V4C10 2.9 10.9 2 12 2M12 4C11.4 4 11 4.4 11 5V8H13V5C13 4.4 12.6 4 12 4M12 13C12.8 13 13.5 13.7 13.5 14.5S12.8 16 12 16 10.5 15.3 10.5 14.5 11.2 13 12 13Z"></path></svg> Azure AD로 로그인</button> <div class="text-xs text-gray-500 text-center mt-4"><p>운영자 계정으로만 접근 가능합니다</p></div></div></div></div>`);
}
function LoadingSpinner($$payload) {
  $$payload.out.push(`<div class="min-h-screen flex items-center justify-center bg-gray-50"><div class="flex flex-col items-center"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div> <p class="text-sm text-gray-600">인증 정보를 확인하는 중...</p></div></div>`);
}
function AuthGuard($$payload, $$props) {
  push();
  let showContent, showLogin, showUnauthorized, showLoading;
  let requireOperator = fallback($$props["requireOperator"], false);
  let mounted = false;
  showContent = mounted;
  showLogin = mounted;
  showUnauthorized = mounted;
  showLoading = !mounted;
  if (showLoading) {
    $$payload.out.push("<!--[-->");
    LoadingSpinner($$payload);
  } else {
    $$payload.out.push("<!--[!-->");
    if (showLogin) {
      $$payload.out.push("<!--[-->");
      LoginRequired($$payload);
    } else {
      $$payload.out.push("<!--[!-->");
      if (showUnauthorized) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<div class="min-h-screen flex items-center justify-center bg-gray-50"><div class="max-w-md w-full space-y-8 p-8"><div class="text-center"><h2 class="mt-6 text-3xl font-extrabold text-gray-900">접근 권한이 없습니다</h2> <p class="mt-2 text-sm text-gray-600">이 페이지에 접근하려면 운영자 권한이 필요합니다.</p></div></div></div>`);
      } else {
        $$payload.out.push("<!--[!-->");
        if (showContent) {
          $$payload.out.push("<!--[-->");
          $$payload.out.push(`<!---->`);
          slot($$payload, $$props, "default", {});
          $$payload.out.push(`<!---->`);
        } else {
          $$payload.out.push("<!--[!-->");
          $$payload.out.push(`<div class="min-h-screen flex items-center justify-center bg-gray-50"><div class="max-w-md w-full space-y-8 p-8 text-center"><h2 class="text-2xl font-bold text-gray-900">인증 오류</h2> <p class="text-sm text-gray-600">인증 상태를 확인할 수 없습니다.</p> <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">페이지 새로고침</button></div></div>`);
        }
        $$payload.out.push(`<!--]-->`);
      }
      $$payload.out.push(`<!--]-->`);
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { requireOperator });
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
}
export {
  _layout as default
};
