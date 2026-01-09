// Exercise 001 — Chapter 1 canonical solution
window.exercise = function(rt) {
// Console Warm-Up — print name, today's date, fun fact
const name = "Lars";
const today = new Date();
const dateStr = today.toLocaleDateString(undefined, { year:"numeric", month:"long", day:"numeric" });
const funFact = "Fun fact: I can turn ideas into working code demos.";
rt.println("Name:", name);
rt.println("Today:", dateStr);
rt.println(funFact);
};
