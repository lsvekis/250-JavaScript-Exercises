// Exercise 010 — Chapter 1 canonical solution
window.exercise = function(rt) {
// Mini Debug Log — trace a variable through a loop
let energy = 5;
rt.println("start energy:", energy);

for (let step = 1; step <= 5; step++) {
  rt.println(`step ${step} — before:`, energy);

  // pretend each step costs 1 energy, but every 3rd step gives +2 bonus
  energy -= 1;
  if (step % 3 === 0) {
    energy += 2;
    rt.println(`step ${step} — bonus applied (+2)`);
  }

  rt.println(`step ${step} — after:`, energy);
}

rt.println("final energy:", energy);
};
