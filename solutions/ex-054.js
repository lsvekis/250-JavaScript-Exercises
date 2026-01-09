// Exercise 054 — Chapter 6 canonical solution
window.exercise = function(rt) {
// Input Events — live character counter
const box = rt.section("Live Char Counter");
const input = rt.input("Type something…");
const out = rt.el("div", { class: "output" }, "0 chars");

input.addEventListener("input", () => {
  out.textContent = `${input.value.length} chars`;
});

box.appendChild(input);
box.appendChild(out);
rt.println("Type in the input to see live counts.");
};
