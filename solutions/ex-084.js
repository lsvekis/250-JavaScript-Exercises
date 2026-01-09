// Exercise 084 — Chapter 9 canonical solution
window.exercise = function(rt) {
// Promise.race — first result wins (fast vs slow)
function task(name, ms) {
  return new Promise(res => setTimeout(() => res(`${name} finished in ${ms}ms`), ms));
}

Promise.race([
  task("fast", 300),
  task("slow", 900)
]).then(winner => {
  rt.println("winner:", winner);
});
};
