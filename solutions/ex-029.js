// Exercise 029 — Chapter 3 canonical solution
window.exercise = function(rt) {
// Object Methods + this — simple counter object
const counter = {
  value: 0,
  inc() { this.value++; return this.value; },
  dec() { this.value--; return this.value; },
  reset() { this.value = 0; return this.value; }
};

rt.println("start:", counter.value);
rt.println("inc:", counter.inc());
rt.println("inc:", counter.inc());
rt.println("dec:", counter.dec());
rt.println("reset:", counter.reset());
};
