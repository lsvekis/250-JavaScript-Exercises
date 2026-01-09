// Exercise 134 — Chapter 14 canonical solution
window.exercise = function(rt) {
// Binary Search — find value in sorted array
function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

const nums = [3,7,11,18,25,42];
rt.println("index of 18:", binarySearch(nums, 18));
rt.println("index of 5:", binarySearch(nums, 5));
};
