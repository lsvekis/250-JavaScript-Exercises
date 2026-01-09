// Exercise 040 — Chapter 4 canonical solution
window.exercise = function(rt) {
// Frequency Top 3 — find top 3 most common words
const text = "red blue red green blue red yellow green blue blue";
const words = text.split(/\s+/);

const freq = new Map();
for (const w of words) freq.set(w, (freq.get(w) || 0) + 1);

const top3 = [...freq.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 3);

rt.println("text:", text);
rt.println("top3:", JSON.stringify(top3));
};
