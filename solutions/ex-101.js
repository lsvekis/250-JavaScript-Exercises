// Exercise 101 — Chapter 11 canonical solution
window.exercise = function(rt) {
// Scope Chain — block vs function scope (let/const vs var)
rt.println("Block scope with let:");
{
  let x = 1;
  rt.println("inside block x =", x);
}
// rt.println(x); // would error: x is not defined

rt.println("Function scope with var:");
function demoVar() {
  if (true) {
    var y = 2; // function-scoped
  }
  rt.println("inside function y =", y);
}
demoVar();

// Shadowing
const name = "outer";
function shadow() {
  const name = "inner";
  rt.println("shadowed name:", name);
}
shadow();
rt.println("outer name:", name);
};
