// Exercise 081 — Chapter 9 canonical solution
window.exercise = function(rt) {
// Event Loop Order — sync vs microtasks vs macrotasks
rt.println("1) sync start");

queueMicrotask(() => rt.println("3) microtask (queueMicrotask)"));

Promise.resolve().then(() => rt.println("4) microtask (Promise.then)"));

setTimeout(() => rt.println("5) macrotask (setTimeout 0)"), 0);

rt.println("2) sync end");

rt.println("Expected order: 1, 2, 3, 4, 5 (microtasks before setTimeout).");
};
