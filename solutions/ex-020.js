// Exercise 020 — Chapter 2 canonical solution
window.exercise = function(rt) {
// Mini Input Parser — parse a value, validate, and compute
const raw = "  18.75  ";
rt.println("raw input:", JSON.stringify(raw));

const parsed = Number(raw.trim());
if (Number.isNaN(parsed)) {
  rt.println("Invalid number ❌");
} else {
  const withTax = parsed * 1.13;
  rt.println("parsed:", parsed);
  rt.println("with tax (13%):", withTax.toFixed(2));
}
};
