// Exercise 048 — Chapter 5 canonical solution
window.exercise = function(rt) {
// Two Sum — find indices of two numbers that add to target
function twoSum(nums, target) {
  const seen = new Map(); // number -> index
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need), i];
    seen.set(nums[i], i);
  }
  return null;
}

const arr = [2, 7, 11, 15];
rt.println("arr:", JSON.stringify(arr));
rt.println("target 9 =>", JSON.stringify(twoSum(arr, 9)));
};
