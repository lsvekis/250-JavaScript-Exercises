// Exercise 188 — Chapter 19 canonical solution
window.exercise = function(rt) {
// Module-like Files — simulate import/export with an object namespace
// In the book/repo, you'd split this into separate files.
const math = {
  clamp(n, min, max){ return Math.min(max, Math.max(min, n)); },
  lerp(a,b,t){ return a + (b-a)*t; }
};

rt.println("clamp(15,0,10) =", math.clamp(15,0,10));
rt.println("lerp(0,100,0.3) =", math.lerp(0,100,0.3));
rt.println("Idea: keep utilities in modules for reuse.");
};
