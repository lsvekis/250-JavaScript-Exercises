// Exercise 237 — Chapter 24 canonical solution
window.exercise = function(rt) {
// prefers-reduced-motion — respect user setting and disable animation
const box = rt.section("Reduced Motion Friendly");
const status = rt.el("div", { class:"small" }, "");
const btn = rt.el("button", { class:"btn" }, "Toggle Motion");
const stage = rt.el("div", { class:"output", style:{height:"110px", position:"relative"} });
const dot = rt.el("div", { style:{width:"14px", height:"14px", borderRadius:"999px", background:"rgba(255,255,255,.9)", position:"absolute", left:"0px", top:"50%", transform:"translateY(-50%)"} });

stage.appendChild(dot);
box.appendChild(rt.el("div",{class:"row"}, btn, status));
box.appendChild(stage);

const media = window.matchMedia("(prefers-reduced-motion: reduce)");
let motionOn = !media.matches;

function updateStatus(){
  status.textContent = media.matches
    ? "System setting: reduce motion ON (animations should be minimized)."
    : "System setting: reduce motion OFF.";
}

media.addEventListener?.("change", ()=>{
  motionOn = !media.matches;
  updateStatus();
});

let x = 0, dir = 1;
let raf = 0;

function frame(){
  x += dir * 2;
  const max = stage.clientWidth - 14;
  if (x >= max) { x = max; dir = -1; }
  if (x <= 0) { x = 0; dir = 1; }
  dot.style.left = x + "px";
  raf = requestAnimationFrame(frame);
}

function start(){
  cancelAnimationFrame(raf);
  if (!motionOn) { dot.style.left = "0px"; return; }
  frame();
}

btn.addEventListener("click", ()=>{
  motionOn = !motionOn;
  start();
});

updateStatus();
start();
};
