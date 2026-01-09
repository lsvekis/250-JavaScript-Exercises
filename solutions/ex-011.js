// Exercise 011 — Chapter 2 canonical solution
window.exercise = function(rt) {
// Operators Playground — arithmetic, precedence, and assignment operators
let points = 10;
rt.println("start points:", points);

points += 5;          // add
points *= 2;          // multiply
points -= 3;          // subtract

const bonus = (5 + 3) * 2;  // precedence demo
const total = points + bonus;

rt.println("after ops points:", points);
rt.println("bonus:", bonus);
rt.println("total:", total);
};
