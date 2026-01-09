// Exercise 059 — Chapter 6 canonical solution
window.exercise = function(rt) {
// Event Delegation — click items in a list (one listener)
const box = rt.section("Event Delegation");
const ul = rt.el("ul", {});
const items = ["Inbox", "Starred", "Archive", "Trash"];

items.forEach(name => ul.appendChild(rt.el("li", {"data-name": name}, name)));

ul.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  rt.println("clicked:", li.dataset.name);
});

box.appendChild(rt.el("p", { class:"small" }, "Click a list item:"));
box.appendChild(ul);
};
