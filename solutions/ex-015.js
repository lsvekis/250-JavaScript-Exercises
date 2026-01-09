// Exercise 015 — Chapter 2 canonical solution
window.exercise = function(rt) {
// Ternary Snapshot — pick a label based on a condition
const temperatureC = 2;
const label = temperatureC <= 0 ? "freezing" : (temperatureC < 15 ? "cool" : "warm");

rt.println("temperature:", temperatureC + "°C");
rt.println("label:", label);
};
