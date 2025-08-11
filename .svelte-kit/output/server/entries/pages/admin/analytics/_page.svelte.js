import { J as ensure_array_like, S as head, G as escape_html, F as store_get, T as maybe_selected, M as attr_class, N as stringify, I as unsubscribe_stores, D as pop, z as push } from "../../../../chunks/index.js";
import { a as authState } from "../../../../chunks/auth.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let metrics = {
    totalPlayers: { value: 12345, change: "+5.2%" },
    activeSessions: { value: 1234, change: "+2.1%" },
    revenue: { value: 45678, change: "-1.2%" },
    avgSessionTime: { value: "24.5m", change: "+8.3%" },
    retention: { value: "78.2%", change: "+3.1%" },
    conversionRate: { value: "4.7%", change: "-0.5%" }
  };
  let gamePerformance = [
    {
      name: "Fantasy Adventure",
      players: 5432,
      revenue: "$18,234",
      conversionRate: "5.2%",
      retention: "82.1%"
    },
    {
      name: "Space Explorer",
      players: 3456,
      revenue: "$12,456",
      conversionRate: "4.8%",
      retention: "75.3%"
    },
    {
      name: "Racing Championship",
      players: 2345,
      revenue: "$8,967",
      conversionRate: "3.9%",
      retention: "71.8%"
    },
    {
      name: "Puzzle Master",
      players: 1234,
      revenue: "$6,021",
      conversionRate: "4.1%",
      retention: "85.2%"
    }
  ];
  let recentEvents = [
    {
      time: "19:45",
      event: "High player activity detected in Fantasy Adventure",
      type: "info"
    },
    {
      time: "19:30",
      event: "Revenue milestone reached: $45K this month",
      type: "success"
    },
    {
      time: "19:15",
      event: "Server load warning: 85% capacity",
      type: "warning"
    },
    {
      time: "19:00",
      event: "New user registration spike: +23% today",
      type: "info"
    },
    {
      time: "18:45",
      event: "Payment processing delay reported",
      type: "error"
    }
  ];
  let selectedTimeRange = "today";
  const each_array = ensure_array_like(gamePerformance);
  const each_array_1 = ensure_array_like(recentEvents);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Analytics - PiceConsole</title>`;
  });
  $$payload.out.push(`<div class="space-y-6"><div class="flex justify-between items-center"><div><h1 class="text-2xl font-bold text-gray-900">Analytics Dashboard</h1> <p class="text-sm text-gray-500 mt-1">현재 사용자: ${escape_html(store_get($$store_subs ??= {}, "$authState", authState).user?.userDetails)}</p></div> <select class="px-3 py-2 border border-gray-300 rounded-md text-sm">`);
  $$payload.select_value = selectedTimeRange;
  $$payload.out.push(`<option value="today"${maybe_selected($$payload, "today")}>Today</option><option value="week"${maybe_selected($$payload, "week")}>This Week</option><option value="month"${maybe_selected($$payload, "month")}>This Month</option><option value="quarter"${maybe_selected($$payload, "quarter")}>This Quarter</option>`);
  $$payload.select_value = void 0;
  $$payload.out.push(`</select></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><div class="bg-white p-6 rounded-lg shadow-sm"><h3 class="text-sm font-medium text-gray-500">Total Players</h3> <p class="text-2xl font-semibold text-gray-900 mt-2">${escape_html(metrics.totalPlayers.value.toLocaleString())}</p> <p${attr_class(`text-xs mt-1 ${stringify("text-green-600")}`)}>${escape_html(metrics.totalPlayers.change)} from last week</p></div> <div class="bg-white p-6 rounded-lg shadow-sm"><h3 class="text-sm font-medium text-gray-500">Active Sessions</h3> <p class="text-2xl font-semibold text-gray-900 mt-2">${escape_html(metrics.activeSessions.value.toLocaleString())}</p> <p${attr_class(`text-xs mt-1 ${stringify("text-green-600")}`)}>${escape_html(metrics.activeSessions.change)} from yesterday</p></div> <div class="bg-white p-6 rounded-lg shadow-sm"><h3 class="text-sm font-medium text-gray-500">Revenue</h3> <p class="text-2xl font-semibold text-gray-900 mt-2">$${escape_html(metrics.revenue.value.toLocaleString())}</p> <p${attr_class(`text-xs mt-1 ${stringify("text-red-600")}`)}>${escape_html(metrics.revenue.change)} from last month</p></div> <div class="bg-white p-6 rounded-lg shadow-sm"><h3 class="text-sm font-medium text-gray-500">Avg Session Time</h3> <p class="text-2xl font-semibold text-gray-900 mt-2">${escape_html(metrics.avgSessionTime.value)}</p> <p${attr_class(`text-xs mt-1 ${stringify("text-green-600")}`)}>${escape_html(metrics.avgSessionTime.change)} from last week</p></div> <div class="bg-white p-6 rounded-lg shadow-sm"><h3 class="text-sm font-medium text-gray-500">Retention Rate</h3> <p class="text-2xl font-semibold text-gray-900 mt-2">${escape_html(metrics.retention.value)}</p> <p${attr_class(`text-xs mt-1 ${stringify("text-green-600")}`)}>${escape_html(metrics.retention.change)} from last month</p></div> <div class="bg-white p-6 rounded-lg shadow-sm"><h3 class="text-sm font-medium text-gray-500">Conversion Rate</h3> <p class="text-2xl font-semibold text-gray-900 mt-2">${escape_html(metrics.conversionRate.value)}</p> <p${attr_class(`text-xs mt-1 ${stringify("text-red-600")}`)}>${escape_html(metrics.conversionRate.change)} from last month</p></div></div> <div class="bg-white shadow-sm rounded-lg overflow-hidden"><div class="px-6 py-4 border-b border-gray-200"><h2 class="text-lg font-medium text-gray-900">Game Performance</h2></div> <div class="overflow-x-auto"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Game</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Players</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retention</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let game = each_array[$$index];
    $$payload.out.push(`<tr class="hover:bg-gray-50"><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${escape_html(game.name)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${escape_html(game.players.toLocaleString())}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${escape_html(game.revenue)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${escape_html(game.conversionRate)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${escape_html(game.retention)}</td></tr>`);
  }
  $$payload.out.push(`<!--]--></tbody></table></div></div> <div class="bg-white shadow-sm rounded-lg overflow-hidden"><div class="px-6 py-4 border-b border-gray-200"><h2 class="text-lg font-medium text-gray-900">Recent Events</h2></div> <div class="p-6"><div class="space-y-4"><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let event = each_array_1[$$index_1];
    $$payload.out.push(`<div class="flex items-start space-x-3"><div${attr_class(`flex-shrink-0 w-2 h-2 mt-2 rounded-full ${stringify(event.type === "success" ? "bg-green-400" : event.type === "warning" ? "bg-yellow-400" : event.type === "error" ? "bg-red-400" : "bg-blue-400")}`)}></div> <div class="flex-1 min-w-0"><div class="flex items-center justify-between"><p class="text-sm text-gray-900">${escape_html(event.event)}</p> <p class="text-xs text-gray-500">${escape_html(event.time)}</p></div></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></div></div></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
