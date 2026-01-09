// Exercise 019 — Chapter 2 canonical solution
window.exercise = function(rt) {
// Return & Early Exit — validate input, return early on errors
function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: inputs must be numbers";
  }
  if (b === 0) return "Error: cannot divide by 0";
  return a / b;
}

rt.println("divide(10, 2):", divide(10, 2));
rt.println("divide(10, 0):", divide(10, 0));
rt.println('divide("10", 2):', divide("10", 2));
};
