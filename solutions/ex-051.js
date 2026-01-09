// Exercise 051 — Chapter 6 canonical solution
window.exercise = function(rt) {
// Create Elements — build a mini card with DOM nodes
const box = rt.section("Mini Profile Card");
const card = rt.el("div", { class: "card" },
  rt.el("h3", {}, "Ava Chen"),
  rt.el("p", { class: "small" }, "Role: Front-End Developer"),
  rt.el("p", { class: "small" }, "City: Toronto")
);
box.appendChild(card);
rt.println("✅ Card created in the app area.");
};
