// Exercise 107 — Chapter 11 canonical solution
window.exercise = function(rt) {
// Memoization — cache results of an expensive function
function memoize(fn) {
  const cache = new Map();
  return function(arg) {
    if (cache.has(arg)) return cache.get(arg);
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}

// expensive-ish: fibonacci (recursive)
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

const fastFib = memoize(fib);

const n = 28;
console.time("first");
const a = fastFib(n);
console.timeEnd("first");

console.time("second");
const b = fastFib(n);
console.timeEnd("second");

rt.println(`fib(${n}) first:`, a);
rt.println(`fib(${n}) second (cached):`, b);
rt.println("Open DevTools console to see timing difference.");
};
