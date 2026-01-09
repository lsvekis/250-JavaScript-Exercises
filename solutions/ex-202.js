// Exercise 202 — Chapter 21 canonical solution
window.exercise = function(rt) {
// Easing — compare linear vs easeInOut using the same timer
const box = rt.section("Easing Curves");
const row = rt.el("div", { class:"row" });
const start = rt.el("button", { class:"btn" }, "Start");
const out = rt.el("div", { class:"small" }, "");
row.appendChild(start);
row.appendChild(out);
box.appendChild(row);

function makeLane(label){
  const lane = rt.el("div", { class:"output", style:{height:"62px", position:"relative"} });
  lane.appendChild(rt.el("div", { class:"small" }, label));
  const dot = rt.el("div", { style:{width:"14px", height:"14px", borderRadius:"999px", background:"rgba(255,255,255,.9)", position:"absolute", left:"0px", top:"34px"} });
  lane.appendChild(dot);
  return { lane, dot };
}

const a = makeLane("Linear");
const b = makeLane("EaseInOut");
box.appendChild(a.lane);
box.appendChild(b.lane);

const easeInOut = (t)=> t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2)/2;

function animate(durationMs){
  const startT = performance.now();
  const maxA = a.lane.clientWidth - 14;
  const maxB = b.lane.clientWidth - 14;

  function frame(t){
    const p = Math.min(1, (t - startT) / durationMs);
    const lin = p;
    const eased = easeInOut(p);

    a.dot.style.left = (lin * maxA) + "px";
    b.dot.style.left = (eased * maxB) + "px";

    out.textContent = `progress=${p.toFixed(2)} | eased=${eased.toFixed(2)}`;
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

start.addEventListener("click", ()=> animate(1200));
rt.println("Ease changes speed over time without changing the start/end positions.");
};
