// Exercise 035 — Chapter 4 canonical solution
window.exercise = function(rt) {
// Random Picker — pick a random item + random number range
const colors = ["red", "green", "blue", "purple", "orange"];

function randomInt(min, max) {
  // inclusive min/max
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pick = colors[randomInt(0, colors.length - 1)];
rt.println("colors:", JSON.stringify(colors));
rt.println("random pick:", pick);
rt.println("randomInt(10, 20):", randomInt(10, 20));
};
