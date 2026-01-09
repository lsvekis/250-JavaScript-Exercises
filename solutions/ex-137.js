// Exercise 137 — Chapter 14 canonical solution
window.exercise = function(rt) {
// Recursion — factorial with base case
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

rt.println("factorial 5:", factorial(5));
};
