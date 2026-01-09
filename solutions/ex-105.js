// Exercise 105 — Chapter 11 canonical solution
window.exercise = function(rt) {
// Currying — turn a 2-arg function into a chain of 1-arg functions
function add(a) {
  return function (b) {
    return a + b;
  };
}

const add10 = add(10);
rt.println("add10(5) =", add10(5));
rt.println("add(3)(4) =", add(3)(4));

// Practical: currency formatter factory
function makeCurrency(code) {
  const fmt = new Intl.NumberFormat(undefined, { style:"currency", currency: code });
  return (n) => fmt.format(n);
}

const cad = makeCurrency("CAD");
rt.println("CAD(19.5) =", cad(19.5));
};
