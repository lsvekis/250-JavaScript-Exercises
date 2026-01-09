// Exercise 008 — Chapter 1 canonical solution
window.exercise = function(rt) {
// Truthiness Check — test 10 values, log truthy/falsy
const testValues = [
  0,
  1,
  "",
  "0",
  null,
  undefined,
  NaN,
  [],
  {},
  "hello"
];

testValues.forEach(v => {
  const label = (v === null) ? "null"
    : (Number.isNaN(v) ? "NaN"
    : (Array.isArray(v) ? "[]" : JSON.stringify(v)));

  rt.println(label, "=>", v ? "truthy ✅" : "falsy ❌");
});
};
