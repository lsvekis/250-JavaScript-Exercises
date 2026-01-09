// Exercise 007 — Chapter 1 canonical solution
window.exercise = function(rt) {
// Swap Values — destructuring swap, no temp variable
let left = "apple";
let right = "orange";

rt.println("before swap:", { left, right });

// swap
[left, right] = [right, left];

rt.println("after swap:", { left, right });
};
