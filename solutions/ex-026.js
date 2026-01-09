// Exercise 026 — Chapter 3 canonical solution
window.exercise = function(rt) {
// Filter Data — keep only “passing” items
const grades = [55, 72, 88, 61, 90, 49];

const passing = grades.filter(g => g >= 60);
const failing = grades.filter(g => g < 60);

rt.println("grades:", JSON.stringify(grades));
rt.println("passing:", JSON.stringify(passing));
rt.println("failing:", JSON.stringify(failing));
};
