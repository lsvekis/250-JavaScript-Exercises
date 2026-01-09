// Exercise 045 — Chapter 5 canonical solution
window.exercise = function(rt) {
// Chunk an Array — split into groups of N
function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

const data = [1,2,3,4,5,6,7,8,9,10];
rt.println("data:", JSON.stringify(data));
rt.println("chunk size 3:", JSON.stringify(chunk(data, 3)));
};
