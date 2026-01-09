// Exercise 017 — Chapter 2 canonical solution
window.exercise = function(rt) {
// Function Basics — create and call a function
function greet(name) {
  rt.println("Hello,", name + "!");
}

greet("Lars");
greet("Maria");

// functions can return values too:
function add(x, y) {
  return x + y;
}

rt.println("add(7, 8) =", add(7, 8));
};
