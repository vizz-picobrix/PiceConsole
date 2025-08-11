import { J as ensure_array_like, S as head, G as escape_html, F as store_get, M as attr_class, N as stringify, I as unsubscribe_stores, D as pop, z as push } from "../../../../chunks/index.js";
import { a as authState } from "../../../../chunks/auth.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let games = [
    {
      id: "1",
      name: "Fantasy Adventure",
      status: "Active",
      players: 1234,
      revenue: "$12,345",
      lastUpdated: "2025-01-08"
    },
    {
      id: "2",
      name: "Space Explorer",
      status: "Maintenance",
      players: 567,
      revenue: "$5,678",
      lastUpdated: "2025-01-07"
    },
    {
      id: "3",
      name: "Racing Championship",
      status: "Active",
      players: 2345,
      revenue: "$23,456",
      lastUpdated: "2025-01-08"
    }
  ];
  const each_array = ensure_array_like(games);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Game Management - PiceConsole</title>`;
  });
  $$payload.out.push(`<div class="space-y-6"><div class="flex justify-between items-center"><div><h1 class="text-2xl font-bold text-gray-900">Game Management</h1> <p class="text-sm text-gray-500 mt-1">현재 사용자: ${escape_html(store_get($$store_subs ??= {}, "$authState", authState).user?.userDetails)}</p></div> <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">Add New Game</button></div> <div class="bg-white shadow-sm rounded-lg overflow-hidden"><div class="px-6 py-4 border-b border-gray-200"><h2 class="text-lg font-medium text-gray-900">Active Games</h2></div> <div class="overflow-x-auto"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Game</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Players</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th><th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let game = each_array[$$index];
    $$payload.out.push(`<tr class="hover:bg-gray-50"><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm font-medium text-gray-900">${escape_html(game.name)}</div> <div class="text-sm text-gray-500">ID: ${escape_html(game.id)}</div></td><td class="px-6 py-4 whitespace-nowrap"><span${attr_class(`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${stringify(game.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800")}`)}>${escape_html(game.status)}</span></td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${escape_html(game.players.toLocaleString())}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${escape_html(game.revenue)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${escape_html(game.lastUpdated)}</td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2"><button class="text-indigo-600 hover:text-indigo-900">Edit</button> <button class="text-red-600 hover:text-red-900">Delete</button></td></tr>`);
  }
  $$payload.out.push(`<!--]--></tbody></table></div></div></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
