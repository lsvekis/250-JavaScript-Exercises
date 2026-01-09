// Exercise 037 — Chapter 4 canonical solution
window.exercise = function(rt) {
// FizzBuzz Variant — generate a labeled list 1..30
function label(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return String(n);
}

const out = [];
for (let i = 1; i <= 30; i++) out.push(label(i));

rt.println(out.join(", "));
};
