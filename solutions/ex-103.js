// Exercise 103 — Chapter 11 canonical solution
window.exercise = function(rt) {
// IIFE — create a private scope and expose a tiny API
const counterAPI = (function () {
  let value = 0; // private
  return {
    inc() { value++; return value; },
    dec() { value--; return value; },
    get() { return value; }
  };
})();

rt.println("start:", counterAPI.get());
rt.println("inc:", counterAPI.inc());
rt.println("inc:", counterAPI.inc());
rt.println("dec:", counterAPI.dec());
};
