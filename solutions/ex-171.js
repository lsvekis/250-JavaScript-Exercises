// Exercise 171 — Chapter 18 canonical solution
window.exercise = function(rt) {
// Event Delegation — one listener handles many buttons
const box = rt.section("Delegation");
const ul = rt.el("ul", {});
box.appendChild(rt.el("p",{class:"small"}, "Click any item. One listener on the <ul> handles all clicks."));
box.appendChild(ul);

const items = Array.from({ length: 12 }, (_, i) => ({ id:i+1, name:`Item ${i+1}` }));

items.forEach(it=>{
  const li = rt.el("li", {});
  const btn = rt.el("button", { class:"btn", "data-id": String(it.id) }, `Select ${it.name}`);
  li.appendChild(btn);
  ul.appendChild(li);
});

ul.addEventListener("click", (e)=>{
  const btn = e.target.closest("button[data-id]");
  if (!btn) return;
  rt.println("clicked id:", btn.dataset.id);
});
};
