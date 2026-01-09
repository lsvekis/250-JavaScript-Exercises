// Exercise 009 — Chapter 1 canonical solution
window.exercise = function(rt) {
// Constant Trap — const primitive vs const object mutation
const points = 10;
const player = { name: "Ben", level: 1 };

rt.println("initial points:", points);
rt.println("initial player:", JSON.stringify(player));

// You CANNOT reassign a const primitive:
// points = 11; // would throw TypeError (uncomment to see)

// You ALSO cannot reassign a const object:
// player = { name:"Ben", level:2 }; // would throw TypeError (uncomment to see)

// But you CAN mutate the object's properties:
player.level = 2;
player.badges = ["starter"];

rt.println("after mutation player:", JSON.stringify(player));
rt.println("Explanation: const blocks re-assignment, not mutation of object contents.");
};
