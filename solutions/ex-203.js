// Exercise 203 — Chapter 21 canonical solution
window.exercise = function(rt) {
// CSS Transitions — toggle a card and let CSS animate properties
const box = rt.section("CSS Transition Toggle");
const btn = rt.el("button", { class:"btn" }, "Toggle");
const card = rt.el("div", { class:"card", style:{transition:"transform 250ms ease, background 250ms ease", userSelect:"none"} },
  rt.el("h3", {}, "Animated Card"),
  rt.el("div", { class:"small" }, "This uses CSS transitions controlled by JS.")
);
box.appendChild(btn);
box.appendChild(card);

let on = false;
btn.addEventListener("click", ()=>{
  on = !on;
  card.style.transform = on ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)";
  card.style.background = on ? "rgba(98,168,255,.18)" : "rgba(255,255,255,.06)";
});
};
