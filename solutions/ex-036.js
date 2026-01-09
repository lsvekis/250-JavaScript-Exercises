// Exercise 036 — Chapter 4 canonical solution
window.exercise = function(rt) {
// Min/Max & Sorting — compute stats from numbers
const nums = [12, 5, 99, 23, 23, 7];

const min = Math.min(...nums);
const max = Math.max(...nums);
const sorted = [...nums].sort((a, b) => a - b);

rt.println("nums:", JSON.stringify(nums));
rt.println("min:", min);
rt.println("max:", max);
rt.println("sorted:", JSON.stringify(sorted));

// median
const mid = Math.floor(sorted.length / 2);
const median = (sorted.length % 2 === 1) ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
rt.println("median:", median);
};
