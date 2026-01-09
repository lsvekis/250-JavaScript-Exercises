// Exercise 047 — Chapter 5 canonical solution
window.exercise = function(rt) {
// Sliding Window Sum — max sum of k consecutive numbers
function maxWindowSum(nums, k) {
  if (k <= 0 || k > nums.length) return null;
  let sum = nums.slice(0, k).reduce((a, b) => a + b, 0);
  let best = sum;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    if (sum > best) best = sum;
  }
  return best;
}

const nums = [2, 1, 5, 1, 3, 2];
rt.println("nums:", JSON.stringify(nums));
rt.println("maxWindowSum k=3:", maxWindowSum(nums, 3));
};
