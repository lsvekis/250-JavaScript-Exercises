// Exercise 125 — Chapter 13 canonical solution
window.exercise = function(rt) {
// Assertion Helper — fail fast during development
function assert(condition, message) {
  if (!condition) throw new Error("Assertion failed: " + message);
}

try {
  const items = ["a", "b", "c"];
  assert(Array.isArray(items), "items should be an array");
  assert(items.length === 3, "expected 3 items");
  assert(items.includes("z"), "items should include 'z'"); // fails
} catch (err) {
  rt.println(err.message);
  rt.println("Tip: assertions are for developer mistakes, not user mistakes.");
}
};
