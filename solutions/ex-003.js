// Exercise 003 — Chapter 1 canonical solution
window.exercise = function(rt) {
// Type Detective — typeof on 8 different values
const values = [
  "hello",                // string
  42,                     // number
  true,                   // boolean
  null,                   // null (typeof quirk!)
  undefined,              // undefined
  { a: 1 },               // object
  [1, 2, 3],              // array (typeof quirk!)
  function greet(){},     // function
];

values.forEach((v, i) => {
  const type = typeof v;
  const label =
    v === null ? "null" :
    Array.isArray(v) ? "array" :
    type;

  rt.println(`${i+1}.`, label, "=> typeof:", type, "| value:", v);
});

rt.println("Note: typeof null === 'object' (legacy JS quirk).");
rt.println("Note: arrays are objects, use Array.isArray(value).");
};
