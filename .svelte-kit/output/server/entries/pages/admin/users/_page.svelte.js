import { J as ensure_array_like, S as head, G as escape_html, F as store_get, M as attr_class, N as stringify, I as unsubscribe_stores, D as pop, z as push } from "../../../../chunks/index.js";
import { a as authState } from "../../../../chunks/auth.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let users = [
    {
      id: "1",
      name: "John Smith",
      email: "john.smith@company.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2025-01-08 14:30",
      joinedDate: "2024-12-01"
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah.johnson@company.com",
      role: "Operator",
      status: "Active",
      lastLogin: "2025-01-08 09:15",
      joinedDate: "2024-12-15"
    },
    {
      id: "3",
      name: "Mike Davis",
      email: "mike.davis@company.com",
      role: "Viewer",
      status: "Inactive",
      lastLogin: "2025-01-05 16:45",
      joinedDate: "2024-11-20"
    },
    {
      id: "4",
      name: "vizz@picobrix.com",
      email: "vizz@picobrix.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2025-01-08 19:30",
      joinedDate: "2025-01-08"
    }
  ];
  const each_array = ensure_array_like(users);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>User Management - PiceConsole</title>`;
  });
  $$payload.out.push(`<div class="space-y-6"><div class="flex justify-between items-center"><div><h1 class="text-2xl font-bold text-gray-900">User Management</h1> <p class="text-sm text-gray-500 mt-1">현재 사용자: ${escape_html(store_get($$store_subs ??= {}, "$authState", authState).user?.userDetails)}</p></div> <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">Invite User</button></div> <div class="bg-white shadow-sm rounded-lg overflow-hidden"><div class="px-6 py-4 border-b border-gray-200"><h2 class="text-lg font-medium text-gray-900">Operator Users</h2></div> <div class="overflow-x-auto"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th><th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let user = each_array[$$index];
    $$payload.out.push(`<tr class="hover:bg-gray-50"><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center"><div class="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center"><span class="text-sm font-medium text-indigo-600">${escape_html(user.name.charAt(0).toUpperCase())}</span></div> <div class="ml-4"><div class="text-sm font-medium text-gray-900">${escape_html(user.name)}</div> <div class="text-sm text-gray-500">${escape_html(user.email)}</div></div></div></td><td class="px-6 py-4 whitespace-nowrap"><span${attr_class(`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${stringify(user.role === "Admin" ? "bg-purple-100 text-purple-800" : user.role === "Operator" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800")}`)}>${escape_html(user.role)}</span></td><td class="px-6 py-4 whitespace-nowrap"><button${attr_class(`inline-flex px-2 py-1 text-xs font-semibold rounded-full cursor-pointer ${stringify(user.status === "Active" ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-red-100 text-red-800 hover:bg-red-200")}`)}>${escape_html(user.status)}</button></td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${escape_html(user.lastLogin)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${escape_html(user.joinedDate)}</td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2"><button class="text-indigo-600 hover:text-indigo-900">Edit</button> `);
    if (user.email !== store_get($$store_subs ??= {}, "$authState", authState).user?.userDetails) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<button class="text-red-600 hover:text-red-900">Delete</button>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--></td></tr>`);
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
