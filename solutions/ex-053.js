// Exercise 053 — Chapter 6 canonical solution
window.exercise = function(rt) {
// Buttons & Click Events — counter with + and -
const box = rt.section("Counter");
let count = 0;

const display = rt.el("div", { class: "output" }, String(count));
const incBtn = rt.el("button", { class: "btn" }, "+");
const decBtn = rt.el("button", { class: "btn" }, "−");

function render() { display.textContent = String(count); }

incBtn.addEventListener("click", () => { count++; render(); rt.println("count:", count); });
decBtn.addEventListener("click", () => { count--; render(); rt.println("count:", count); });

box.appendChild(rt.el("div", { class: "row" }, decBtn, incBtn));
box.appendChild(display);
rt.println("Click the buttons to change the counter.");
};
