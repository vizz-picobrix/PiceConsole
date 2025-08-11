import { S as head } from "../../../chunks/index.js";
import "clsx";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Unauthorized - PiceConsole</title>`;
  });
  $$payload.out.push(`<div class="min-h-screen flex items-center justify-center bg-gray-50"><div class="max-w-md w-full space-y-8 p-8 text-center"><div><div class="mx-auto h-12 w-12 text-red-600"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.314 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg></div> <h2 class="mt-6 text-3xl font-extrabold text-gray-900">접근이 거부되었습니다</h2> <p class="mt-2 text-sm text-gray-600">이 리소스에 접근할 권한이 없습니다.<br/> 운영자 권한이 필요하거나 다시 로그인해야 할 수 있습니다.</p></div> <div class="mt-8 space-y-4"><button class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">다시 로그인</button> <a href="/" class="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">홈으로 돌아가기</a></div></div></div>`);
}
export {
  _page as default
};
