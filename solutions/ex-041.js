// Exercise 041 — Chapter 5 canonical solution
window.exercise = function(rt) {
// Unique Values — remove duplicates (Set) + keep order
const raw = ["red", "blue", "red", "green", "blue", "yellow", "yellow"];
rt.println("raw:", JSON.stringify(raw));

const unique = [...new Set(raw)];
rt.println("unique:", JSON.stringify(unique));
};
