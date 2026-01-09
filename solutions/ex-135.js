// Exercise 135 — Chapter 14 canonical solution
window.exercise = function(rt) {
// Bubble Sort — simple but inefficient sort
function bubbleSort(arr) {
  const a = [...arr];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
}

const data = [5,3,8,4,2];
rt.println("sorted:", JSON.stringify(bubbleSort(data)));
};
