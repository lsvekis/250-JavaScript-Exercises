// Exercise 109 — Chapter 11 canonical solution
window.exercise = function(rt) {
// Once — ensure a function runs only one time
function once(fn) {
  let done = false;
  let value;
  return (...args) => {
    if (!done) {
      done = true;
      value = fn(...args);
    }
    return value;
  };
}

const init = once(() => {
  rt.println("✅ init ran");
  return { startedAt: new Date().toLocaleTimeString() };
});

rt.println("call 1:", JSON.stringify(init()));
rt.println("call 2:", JSON.stringify(init()));
rt.println("call 3:", JSON.stringify(init()));
};
