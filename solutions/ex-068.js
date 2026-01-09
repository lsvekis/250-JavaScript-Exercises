// Exercise 068 — Chapter 7 canonical solution
window.exercise = function(rt) {
// Mouse Events — track mouse position and draw dots
const box = rt.section("Mouse Tracker");
const area = rt.el("div", { class:"output", style:{position:"relative", height:"160px", overflow:"hidden"} }, "Move mouse here");
const coords = rt.el("div", { class:"small" }, "x: -, y: -");

box.appendChild(area);
box.appendChild(coords);

area.addEventListener("mousemove", (e)=>{
  const rect = area.getBoundingClientRect();
  const x = Math.round(e.clientX - rect.left);
  const y = Math.round(e.clientY - rect.top);
  coords.textContent = `x: ${x}, y: ${y}`;
});

area.addEventListener("click", (e)=>{
  const rect = area.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const dot = rt.el("div", { style:{
    position:"absolute", left:(x-4)+"px", top:(y-4)+"px",
    width:"8px", height:"8px", borderRadius:"999px",
    background:"rgba(255,255,255,.8)"
  }});
  area.appendChild(dot);
});
rt.println("Click to drop dots; move to see coordinates.");
};
