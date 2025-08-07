import { E as getContext, F as ensure_array_like, G as attr, I as attr_class, J as escape_html, K as stringify, M as store_get, N as unsubscribe_stores, D as pop, z as push, O as slot } from "../../chunks/index.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "clsx";
import "../../chunks/state.svelte.js";
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
function Header($$payload, $$props) {
  push();
  var $$store_subs;
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" }
  ];
  const each_array = ensure_array_like(navigation);
  $$payload.out.push(`<header class="bg-white shadow-sm border-b"><nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex items-center"><a href="/" class="flex-shrink-0 font-bold text-xl text-blue-600">PiceConsole</a></div> <div class="flex items-center space-x-8"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out.push(`<a${attr("href", item.href)}${attr_class(`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === item.href ? "text-blue-600 bg-blue-50" : "")}`)}>${escape_html(item.name)}</a>`);
  }
  $$payload.out.push(`<!--]--></div></div></nav></header>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  $$payload.out.push(`<div class="min-h-screen bg-gray-50">`);
  Header($$payload);
  $$payload.out.push(`<!----> <main class="container mx-auto px-4 py-8"><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></main></div>`);
}
export {
  _layout as default
};
