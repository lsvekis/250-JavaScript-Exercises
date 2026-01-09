// Exercise 201 — Chapter 21 canonical solution
window.exercise = function(rt) {
// requestAnimationFrame — animate a dot across the screen
const box = rt.section("rAF Dot");
const stage = rt.el("div", { class:"output", style:{height:"120px", position:"relative"} });
const dot = rt.el("div", { style:{width:"16px", height:"16px", borderRadius:"999px", background:"rgba(98,168,255,.95)", position:"absolute", left:"0px", top:"50%", transform:"translateY(-50%)"} });
stage.appendChild(dot);
box.appendChild(stage);

let x = 0;
let dir = 1;
let last = performance.now();

function tick(t){
  const dt = (t - last) / 1000;
  last = t;

  x += dir * 140 * dt; // pixels per second
  const max = stage.clientWidth - 16;
  if (x >= max) { x = max; dir = -1; }
  if (x <= 0) { x = 0; dir = 1; }

  dot.style.left = x + "px";
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

rt.println("The dot moves at a constant speed using dt (delta time).");
};
