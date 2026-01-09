// Exercise 057 — Chapter 6 canonical solution
window.exercise = function(rt) {
// Dataset & Attributes — read/write attributes
const box = rt.section("Data Attributes");
const item = rt.el("div", { class: "output", "data-id": "42", title: "hover title" }, "Item");
box.appendChild(item);

rt.println("data-id:", item.dataset.id);
rt.println("title:", item.getAttribute("title"));

item.dataset.id = "99";
item.setAttribute("title", "updated title");
rt.println("updated data-id:", item.dataset.id);
rt.println("updated title:", item.getAttribute("title"));
};
