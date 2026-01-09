// Exercise 210 — Chapter 21 canonical solution
window.exercise = function(rt) {
// FPS Meter — measure and display frame rate
const box = rt.section("FPS Meter");
const out = rt.el("div", { class:"output" }, "");
box.appendChild(out);

let last = performance.now();
let acc = 0;
let frames = 0;

function tick(t){
  const dt = t - last;
  last = t;
  acc += dt;
  frames++;

  if (acc >= 500) { // update twice a second
    const fps = (frames / (acc/1000));
    out.textContent = `FPS: ${fps.toFixed(1)}`;
    acc = 0;
    frames = 0;
  }
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
rt.println("FPS fluctuates depending on device load and browser.");
};
