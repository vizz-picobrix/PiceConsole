import { w as writable } from "./index2.js";
const authState = writable({
  user: null,
  isAuthenticated: false,
  isLoading: true
});
export {
  authState as a
};
