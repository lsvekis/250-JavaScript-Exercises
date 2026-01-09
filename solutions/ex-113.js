// Exercise 113 — Chapter 12 canonical solution
window.exercise = function(rt) {
// Class Intro — same idea as constructor, cleaner syntax
class Timer {
  constructor(label) {
    this.label = label;
    this.start = Date.now();
  }
  elapsedMs() { return Date.now() - this.start; }
  reset() { this.start = Date.now(); }
}

const t = new Timer("demo");
setTimeout(() => {
  rt.println(t.label, "elapsed(ms):", t.elapsedMs());
  t.reset();
  rt.println("reset, elapsed(ms):", t.elapsedMs());
}, 250);
rt.println("Timer started… (wait ~250ms)");
};
