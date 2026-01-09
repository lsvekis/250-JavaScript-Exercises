// Exercise 106 — Chapter 11 canonical solution
window.exercise = function(rt) {
// Higher-Order Function — map/filter/reduce with custom callback
const nums = [1, 2, 3, 4, 5];

function applyAll(arr, fn) {
  const out = [];
  for (const x of arr) out.push(fn(x));
  return out;
}

const squares = applyAll(nums, n => n * n);
rt.println("nums:", JSON.stringify(nums));
rt.println("squares:", JSON.stringify(squares));

const evens = nums.filter(n => n % 2 === 0);
rt.println("evens:", JSON.stringify(evens));

const sum = nums.reduce((a, b) => a + b, 0);
rt.println("sum:", sum);
};
