// Exercise 016 — Chapter 2 canonical solution
window.exercise = function(rt) {
// Loop Counter — for loop, while loop, and break/continue
rt.println("for loop (1..10, skip 5):");
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue; // skip 5
  rt.println("i =", i);
}

rt.println("while loop (countdown from 5):");
let n = 5;
while (n > 0) {
  rt.println("n =", n);
  if (n === 3) {
    rt.println("breaking early at 3");
    break;
  }
  n--;
}
};
