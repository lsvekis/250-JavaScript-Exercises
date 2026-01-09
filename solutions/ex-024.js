// Exercise 024 — Chapter 3 canonical solution
window.exercise = function(rt) {
// Looping Arrays — for, for..of, forEach
const scores = [12, 18, 7, 21];
rt.println("scores:", JSON.stringify(scores));

let sum1 = 0;
for (let i = 0; i < scores.length; i++) sum1 += scores[i];
rt.println("sum (for):", sum1);

let sum2 = 0;
for (const s of scores) sum2 += s;
rt.println("sum (for..of):", sum2);

let sum3 = 0;
scores.forEach(s => sum3 += s);
rt.println("sum (forEach):", sum3);
};
