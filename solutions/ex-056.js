// Exercise 056 — Chapter 6 canonical solution
window.exercise = function(rt) {
// Classes & Styling — toggle a highlight class
const box = rt.section("Toggle Highlight");
const target = rt.el("div", { class: "output" }, "Click the button to highlight me.");
const btn = rt.el("button", { class: "btn" }, "Toggle");

btn.addEventListener("click", () => {
  target.classList.toggle("highlighted");
  rt.println("highlighted:", target.classList.contains("highlighted"));
});

box.appendChild(btn);
box.appendChild(target);

// add a tiny style rule
const style = document.createElement("style");
style.textContent = ".highlighted{outline:2px solid rgba(98,168,255,.8); background:rgba(98,168,255,.12)}";
document.head.appendChild(style);
};
