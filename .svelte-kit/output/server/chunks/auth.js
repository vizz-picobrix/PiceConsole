import { w as writable } from "./index2.js";
const authState = writable({
  user: null,
  isAuthenticated: false,
  isLoading: true
});
function isOperator() {
  let currentUser = null;
  authState.subscribe((state) => {
    currentUser = state.user;
  })();
  console.log("isOperator check:", {
    hasUser: !!currentUser,
    userRoles: currentUser?.userRoles,
    userDetails: currentUser?.userDetails
  });
  return !!currentUser;
}
export {
  authState as a,
  isOperator as i
};
