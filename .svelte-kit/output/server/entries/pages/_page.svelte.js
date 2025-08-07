import { J as escape_html, R as head } from "../../chunks/index.js";
import "clsx";
function Counter($$payload) {
  let count = 0;
  $$payload.out.push(`<div class="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg"><h2 class="text-2xl font-semibold text-gray-800">Counter Component</h2> <div class="text-4xl font-bold text-blue-600">${escape_html(count)}</div> <div class="flex space-x-4"><button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">-</button> <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">+</button></div></div>`);
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>PiceConsole</title>`;
    $$payload2.out.push(`<meta name="description" content="PiceConsole - A SvelteKit application"/>`);
  });
  $$payload.out.push(`<div class="text-center"><h1 class="text-4xl font-bold text-blue-600 mb-8">Welcome to PiceConsole</h1> <div class="max-w-2xl mx-auto p-6"><p class="text-lg text-gray-700 mb-6">This is a SvelteKit application with TypeScript and Tailwind CSS, ready for Azure Static Web Apps deployment.</p> `);
  Counter($$payload);
  $$payload.out.push(`<!----></div></div>`);
}
export {
  _page as default
};
