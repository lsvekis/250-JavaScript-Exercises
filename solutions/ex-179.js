// Exercise 179 — Chapter 18 canonical solution
window.exercise = function(rt) {
// Virtual List (Tiny) — render only visible rows for huge lists
const box = rt.section("Virtual List");
const count = 5000;
const rowH = 28;
const viewportH = 180;

const viewport = rt.el("div", { class:"output", style:{height: viewportH+"px", overflow:"auto", position:"relative"} });
const spacer = rt.el("div", { style:{height: (count*rowH) + "px"} });
const layer = rt.el("div", { style:{position:"absolute", left:"0", top:"0", right:"0"} });

viewport.appendChild(spacer);
viewport.appendChild(layer);
box.appendChild(viewport);

function render(){
  const scrollTop = viewport.scrollTop;
  const start = Math.floor(scrollTop / rowH);
  const visible = Math.ceil(viewportH / rowH) + 3;
  const end = Math.min(count, start + visible);

  layer.innerHTML = "";
  layer.style.transform = `translateY(${start*rowH}px)`;

  for (let i = start; i < end; i++) {
    const row = rt.el("div", { style:{height: rowH+"px", display:"flex", alignItems:"center", borderBottom:"1px solid rgba(255,255,255,.08)", paddingLeft:"8px"} }, `Row ${i+1}`);
    layer.appendChild(row);
  }
}

viewport.addEventListener("scroll", render);
render();
rt.println("Scroll a 5,000-row list while rendering only visible rows.");
};
