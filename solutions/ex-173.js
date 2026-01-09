// Exercise 173 — Chapter 18 canonical solution
window.exercise = function(rt) {
// Batch DOM Updates — use DocumentFragment for performance
const box = rt.section("Batch Render");
const btn = rt.el("button", { class:"btn" }, "Render 1,000 items");
const ul = rt.el("ul", {});
box.appendChild(btn);
box.appendChild(ul);

btn.addEventListener("click", ()=>{
  ul.innerHTML = "";
  const frag = document.createDocumentFragment();
  for (let i = 1; i <= 1000; i++) {
    frag.appendChild(rt.el("li", {}, "Row " + i));
  }
  ul.appendChild(frag);
  rt.println("Rendered 1000 items using a DocumentFragment.");
});
};
