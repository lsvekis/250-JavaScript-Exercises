// Exercise 022 — Chapter 3 canonical solution
window.exercise = function(rt) {
// Stack & Queue Ops — push/pop/shift/unshift
const tasks = ["email", "meeting"];
rt.println("start:", JSON.stringify(tasks));

tasks.push("code");        // add to end
rt.println("after push:", JSON.stringify(tasks));

const last = tasks.pop();  // remove from end
rt.println("popped:", last, "| now:", JSON.stringify(tasks));

tasks.unshift("coffee");   // add to start
rt.println("after unshift:", JSON.stringify(tasks));

const first = tasks.shift(); // remove from start
rt.println("shifted:", first, "| now:", JSON.stringify(tasks));
};
