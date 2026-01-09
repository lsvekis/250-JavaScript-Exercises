// Exercise 033 — Chapter 4 canonical solution
window.exercise = function(rt) {
// Character Counter — count letters (ignore spaces/punctuation)
const input = "Hello, hello!!";
const normalized = input.toLowerCase().replace(/[^a-z]/g, "");

const counts = {};
for (const ch of normalized) {
  counts[ch] = (counts[ch] || 0) + 1;
}

rt.println("input:", JSON.stringify(input));
rt.println("normalized:", normalized);
rt.println("counts:", JSON.stringify(counts, null, 2));
};
