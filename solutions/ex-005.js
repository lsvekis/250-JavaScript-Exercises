// Exercise 005 — Chapter 1 canonical solution
window.exercise = function(rt) {
// Number Formatting — rounding & currency formatting (2 decimals)
const raw = 19.9876;

// Option A: toFixed (string)
const fixed = raw.toFixed(2);

// Option B: Intl.NumberFormat (currency)
const currency = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "CAD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format(raw);

rt.println("raw:", raw);
rt.println("toFixed(2):", fixed);
rt.println("currency:", currency);
};
