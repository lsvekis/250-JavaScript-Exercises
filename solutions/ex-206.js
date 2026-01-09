// Exercise 206 — Chapter 21 canonical solution
window.exercise = function(rt) {
// Physics-ish Motion — spring towards a target with damping
const box = rt.section("Spring Motion");
const stage = rt.el("div", { class:"output", style:{height:"140px", position:"relative"} });
const dot = rt.el("div", { style:{width:"16px", height:"16px", borderRadius:"999px", background:"rgba(255,255,255,.95)", position:"absolute", top:"50%", transform:"translateY(-50%)"} });
stage.appendChild(dot);
box.appendChild(stage);

let x = 0;
let v = 0;
let target = 200;

stage.addEventListener("pointermove", (e)=>{
  const r = stage.getBoundingClientRect();
  target = e.clientX - r.left;
});

function tick(){
  // spring constants
  const k = 0.08;      // stiffness
  const damp = 0.82;   // damping

  const force = (target - x) * k;
  v = (v + force) * damp;
  x += v;

  const max = stage.clientWidth - 16;
  x = Math.max(0, Math.min(max, x));

  dot.style.left = x + "px";
  requestAnimationFrame(tick);
}
tick();
rt.println("Move your pointer across the panel to change the target.");
};
