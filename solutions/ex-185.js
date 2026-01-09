// Exercise 185 — Chapter 19 canonical solution
window.exercise = function(rt) {
// Mock Function — record calls and arguments (spy)
function createSpy(fn) {
  const calls = [];
  const spy = (...args) => {
    calls.push(args);
    return fn(...args);
  };
  spy.calls = calls;
  return spy;
}

const multiply = (a,b) => a*b;
const spyMul = createSpy(multiply);

spyMul(2,3);
spyMul(4,5);

rt.println("result 1:", spyMul.calls[0].join(","));
rt.println("result 2:", spyMul.calls[1].join(","));
rt.println("calls:", JSON.stringify(spyMul.calls));
};
