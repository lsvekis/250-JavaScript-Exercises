// Exercise 191 — Chapter 20 canonical solution
window.exercise = function(rt) {
// Drag & Drop — reorder a list by dragging items
const box = rt.section("Drag & Drop Reorder");
box.appendChild(rt.el("p",{class:"small"}, "Drag items to reorder. Works in modern browsers."));

const ul = rt.el("ul", {});
box.appendChild(ul);

const items = ["Alpha","Bravo","Charlie","Delta","Echo"];
items.forEach((t, i) => {
  const li = rt.el("li", { draggable:"true", "data-i": String(i), class:"card", style:{padding:"10px", marginTop:"8px"} }, t);
  ul.appendChild(li);
});

let dragEl = null;

ul.addEventListener("dragstart", (e)=>{
  const li = e.target.closest("li[draggable]");
  if (!li) return;
  dragEl = li;
  e.dataTransfer.effectAllowed = "move";
  li.style.opacity = "0.6";
});

ul.addEventListener("dragend", (e)=>{
  const li = e.target.closest("li[draggable]");
  if (li) li.style.opacity = "1";
  dragEl = null;
});

ul.addEventListener("dragover", (e)=>{
  e.preventDefault();
  const over = e.target.closest("li[draggable]");
  if (!over || !dragEl || over === dragEl) return;
  const rect = over.getBoundingClientRect();
  const after = (e.clientY - rect.top) > rect.height/2;
  ul.insertBefore(dragEl, after ? over.nextSibling : over);
});

const showBtn = rt.el("button", { class:"btn" }, "Show Order");
box.appendChild(showBtn);
showBtn.addEventListener("click", ()=>{
  const order = [...ul.children].map(li => li.textContent.trim());
  rt.println("order:", order.join(" -> "));
});
};
