// Exercise 046 — Chapter 5 canonical solution
window.exercise = function(rt) {
// Flatten 1 Level — merge nested arrays one level deep
const nested = [1, [2, 3], 4, [5], 6, [7, 8, 9]];

const flat = [];
for (const x of nested) {
  if (Array.isArray(x)) flat.push(...x);
  else flat.push(x);
}

rt.println("nested:", JSON.stringify(nested));
rt.println("flat:", JSON.stringify(flat));
};
