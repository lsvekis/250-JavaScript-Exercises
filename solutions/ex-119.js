// Exercise 119 — Chapter 12 canonical solution
window.exercise = function(rt) {
// Simple Module Pattern — create a mini store with private state
const store = (() => {
  const state = { count: 0 }; // private

  function getState() { return { ...state }; }
  function inc() { state.count++; }
  function dec() { state.count--; }

  return { getState, inc, dec };
})();

rt.println("start:", JSON.stringify(store.getState()));
store.inc();
store.inc();
store.dec();
rt.println("end:", JSON.stringify(store.getState()));
};
