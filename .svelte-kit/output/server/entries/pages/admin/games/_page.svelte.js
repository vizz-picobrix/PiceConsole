import { Q as head } from "../../../../chunks/index.js";
import { A as AuthGuard } from "../../../../chunks/AuthGuard.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Game Management - PiceConsole</title>`;
  });
  AuthGuard($$payload, {
    children: ($$payload2) => {
      $$payload2.out.push(`<div class="space-y-6"><div class="flex justify-between items-center"><h1 class="text-2xl font-bold text-gray-900">Game Management</h1> <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">Add New Game</button></div> <div class="bg-white shadow-sm rounded-lg overflow-hidden"><div class="px-6 py-4 border-b border-gray-200"><h2 class="text-lg font-medium text-gray-900">Active Games</h2></div> <div class="p-6"><div class="text-center text-gray-500"><p>게임 관리 기능이 곧 추가될 예정입니다.</p> <p class="text-sm mt-2">운영자 권한으로 접근하고 있습니다.</p></div></div></div></div>`);
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
