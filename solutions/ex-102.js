// Exercise 102 — Chapter 11 canonical solution
window.exercise = function(rt) {
// Hoisting Demo — what is hoisted and what isn't
rt.println("function declaration hoists:");
sayHi(); // works

function sayHi() {
  rt.println("hi from function declaration");
}

rt.println("var hoists (value is undefined until assignment):");
rt.println("before assignment n =", n);
var n = 10;
rt.println("after assignment n =", n);

rt.println("let/const are hoisted but in TDZ (don't access early):");
rt.println("Tip: accessing let/const before declaration throws ReferenceError.");
};
