// Exercise 061 — Chapter 7 canonical solution
window.exercise = function(rt) {
// Selectors & Querying — find elements and update them
const box = rt.section("Selectors Demo");

box.appendChild(rt.el("p", { class: "small" }, "We will create 3 items, then query them."));

const wrap = rt.el("div", { id: "wrap" },
  rt.el("div", { class: "output item", "data-kind": "primary" }, "Item A"),
  rt.el("div", { class: "output item", "data-kind": "secondary" }, "Item B"),
  rt.el("div", { class: "output item", "data-kind": "secondary" }, "Item C")
);
box.appendChild(wrap);

// querySelector / querySelectorAll
const firstSecondary = wrap.querySelector('[data-kind="secondary"]');
firstSecondary.textContent += " (first secondary)";

const allItems = wrap.querySelectorAll(".item");
rt.println("items found:", allItems.length);

allItems.forEach((el, i) => el.style.opacity = String(0.85 + i * 0.05));
};
