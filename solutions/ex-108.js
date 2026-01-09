// Exercise 108 — Chapter 11 canonical solution
window.exercise = function(rt) {
// Partial Application — lock in some arguments
function multiply(a, b) { return a * b; }

function partial(fn, ...fixed) {
  return (...rest) => fn(...fixed, ...rest);
}

const double = partial(multiply, 2);
const triple = partial(multiply, 3);

rt.println("double(7) =", double(7));
rt.println("triple(7) =", triple(7));

// Partial for DOM: quick element factory
const box = rt.section("Partial for Elements");
const makeP = partial(rt.el, "p", { class:"small" });
box.appendChild(makeP("This paragraph was created with a partially-applied function."));
};
