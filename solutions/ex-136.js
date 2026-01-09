// Exercise 136 — Chapter 14 canonical solution
window.exercise = function(rt) {
// Selection Sort — pick smallest each pass
function selectionSort(arr) {
  const a = [...arr];
  for (let i = 0; i < a.length; i++) {
    let min = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[min]) min = j;
    }
    if (min !== i) [a[i], a[min]] = [a[min], a[i]];
  }
  return a;
}

rt.println("sorted:", JSON.stringify(selectionSort([9,1,6,3])));
};
