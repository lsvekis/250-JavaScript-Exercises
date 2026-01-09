// Exercise 023 — Chapter 3 canonical solution
window.exercise = function(rt) {
// Slice vs Splice — copy vs mutate
const nums = [10, 20, 30, 40, 50];
rt.println("original:", JSON.stringify(nums));

// slice: non-mutating copy
const mid = nums.slice(1, 4);
rt.println("slice(1,4):", JSON.stringify(mid));
rt.println("after slice:", JSON.stringify(nums));

// splice: mutates (remove + insert)
const removed = nums.splice(2, 1, 999); // remove index 2, insert 999
rt.println("removed:", JSON.stringify(removed));
rt.println("after splice:", JSON.stringify(nums));
};
