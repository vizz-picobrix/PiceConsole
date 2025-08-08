import { Q as head } from "../../../../chunks/index.js";
import { A as AuthGuard } from "../../../../chunks/AuthGuard.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Analytics - PiceConsole</title>`;
  });
  AuthGuard($$payload, {
    requireOperator: true,
    children: ($$payload2) => {
      $$payload2.out.push(`<div class="space-y-6"><h1 class="text-2xl font-bold text-gray-900">Analytics Dashboard</h1> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-white p-6 rounded-lg shadow-sm"><h3 class="text-sm font-medium text-gray-500">Total Players</h3> <p class="text-2xl font-semibold text-gray-900 mt-2">12,345</p> <p class="text-xs text-green-600 mt-1">+5.2% from last week</p></div> <div class="bg-white p-6 rounded-lg shadow-sm"><h3 class="text-sm font-medium text-gray-500">Active Sessions</h3> <p class="text-2xl font-semibold text-gray-900 mt-2">1,234</p> <p class="text-xs text-green-600 mt-1">+2.1% from yesterday</p></div> <div class="bg-white p-6 rounded-lg shadow-sm"><h3 class="text-sm font-medium text-gray-500">Revenue</h3> <p class="text-2xl font-semibold text-gray-900 mt-2">$45,678</p> <p class="text-xs text-red-600 mt-1">-1.2% from last month</p></div></div> <div class="bg-white shadow-sm rounded-lg overflow-hidden"><div class="px-6 py-4 border-b border-gray-200"><h2 class="text-lg font-medium text-gray-900">Detailed Analytics</h2></div> <div class="p-6"><div class="text-center text-gray-500"><p>상세 분석 차트가 곧 추가될 예정입니다.</p> <p class="text-sm mt-2">운영자 권한으로 접근하고 있습니다.</p></div></div></div></div>`);
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
