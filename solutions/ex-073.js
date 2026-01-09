// Exercise 073 — Chapter 8 canonical solution
window.exercise = function(rt) {
// Drag & Drop — reorder a list (HTML5 drag)
const box = rt.section("Drag to Reorder");
const ul = rt.el("ul", {});
box.appendChild(rt.el("p", { class:"small" }, "Drag items to reorder (desktop browsers)."));
box.appendChild(ul);

const items = ["Alpha","Beta","Gamma","Delta"];
function render(){
  ul.innerHTML = "";
  items.forEach((name, idx) => {
    const li = rt.el("li", { draggable:"true", "data-idx": String(idx) }, name);
    li.style.cursor = "grab";
    li.addEventListener("dragstart", (e)=>{
      e.dataTransfer.setData("text/plain", li.dataset.idx);
      li.style.opacity = "0.5";
    });
    li.addEventListener("dragend", ()=> li.style.opacity = "1");
    li.addEventListener("dragover", (e)=> e.preventDefault());
    li.addEventListener("drop", (e)=>{
      e.preventDefault();
      const from = Number(e.dataTransfer.getData("text/plain"));
      const to = Number(li.dataset.idx);
      if(from === to) return;
      const [moved] = items.splice(from, 1);
      items.splice(to, 0, moved);
      rt.println(`moved "${moved}" from ${from} to ${to}`);
      render();
    });
    ul.appendChild(li);
  });
}
render();
};
