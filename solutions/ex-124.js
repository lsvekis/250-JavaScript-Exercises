// Exercise 124 — Chapter 13 canonical solution
window.exercise = function(rt) {
// Guard Clauses — early returns make code easier to read
function formatScore(score) {
  if (typeof score !== "number") return "Invalid: not a number";
  if (Number.isNaN(score)) return "Invalid: NaN";
  if (score < 0 || score > 100) return "Invalid: out of range";
  return `Score: ${score.toFixed(1)} / 100`;
}

[88.234, -2, 120, NaN, "90"].forEach(v => {
  rt.println(String(v).padEnd(6), "=>", formatScore(v));
});
};
