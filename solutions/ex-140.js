// Exercise 140 — Chapter 14 canonical solution
window.exercise = function(rt) {
// Big-O Demo — compare linear vs quadratic loops
function linear(n) {
  let c = 0;
  for (let i = 0; i < n; i++) c++;
  return c;
}

function quadratic(n) {
  let c = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) c++;
  }
  return c;
}

const n = 100;
rt.println("linear ops:", linear(n));
rt.println("quadratic ops:", quadratic(n));
rt.println("O(n) vs O(n^2) growth difference.");
};
