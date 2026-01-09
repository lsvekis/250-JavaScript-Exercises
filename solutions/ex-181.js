// Exercise 181 — Chapter 19 canonical solution
window.exercise = function(rt) {
// Assertions 101 — build an expect() helper with useful messages
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${expected} but got ${actual}`);
      }
    },
    toBeTruthy() {
      if (!actual) throw new Error(`Expected truthy but got ${actual}`);
    }
  };
}

try {
  expect(2 + 3).toBe(5);
  expect("hi").toBeTruthy();
  rt.println("✅ tests passed");
} catch (err) {
  rt.println("❌", err.message);
}
};
