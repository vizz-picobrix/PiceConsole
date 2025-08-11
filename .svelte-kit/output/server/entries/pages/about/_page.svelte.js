import { S as head, G as escape_html, D as pop, z as push } from "../../../chunks/index.js";
function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}
function _page($$payload, $$props) {
  push();
  const currentDate = /* @__PURE__ */ new Date();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>About - PiceConsole</title>`;
  });
  $$payload.out.push(`<div class="max-w-4xl mx-auto p-6"><h1 class="text-3xl font-bold mb-6">About PiceConsole</h1> <div class="prose prose-lg"><p class="text-gray-700 mb-4">PiceConsole is a modern web application built with SvelteKit and TypeScript.
			It's configured for deployment on Azure Static Web Apps and styled with Tailwind CSS.</p> <h2 class="text-2xl font-semibold mb-4">Features</h2> <ul class="list-disc list-inside space-y-2 text-gray-700"><li>Built with SvelteKit for optimal performance</li> <li>TypeScript for type safety</li> <li>Tailwind CSS for responsive design</li> <li>Azure Static Web Apps deployment ready</li> <li>Component-based architecture</li></ul> <p class="text-sm text-gray-500 mt-8">Last updated: ${escape_html(formatDate(currentDate))}</p></div></div>`);
  pop();
}
export {
  _page as default
};
