// Exercise 012 — Chapter 2 canonical solution
window.exercise = function(rt) {
// Equality Lab — == vs ===, comparisons
const a = "5";
const b = 5;

rt.println("a:", a, "(type:", typeof a + ")");
rt.println("b:", b, "(type:", typeof b + ")");

rt.println("a == b :", a == b);     // true (coercion)
rt.println("a === b:", a === b);    // false (no coercion)

rt.println("b > 3 :", b > 3);
rt.println("b <= 5:", b <= 5);

// Tip: prefer === in real code
rt.println("Tip: Use === to avoid surprising coercion.");
};
