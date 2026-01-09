// Exercise 243 — Chapter 25 canonical solution
window.exercise = function(rt) {
// Capstone: Pomodoro Timer — start/pause/reset + sound beep (optional)
const box = rt.section("Pomodoro Timer");
const row = rt.el("div", { class:"row" });
const start = rt.el("button", { class:"btn" }, "Start");
const pause = rt.el("button", { class:"btn" }, "Pause");
const reset = rt.el("button", { class:"btn" }, "Reset");
row.appendChild(start); row.appendChild(pause); row.appendChild(reset);

const mins = rt.el("input", { class:"input", type:"number", min:"1", max:"60", value:"25" });
const label = rt.el("div", { class:"small" }, "Minutes");
const out = rt.el("div", { class:"output" }, "");
box.appendChild(rt.el("div",{class:"row"}, label, mins));
box.appendChild(row);
box.appendChild(out);

let total = Number(mins.value) * 60;
let left = total;
let running = false;
let last = performance.now();
let raf = 0;

function fmt(s){
  const m = Math.floor(s/60);
  const r = s % 60;
  return `${String(m).padStart(2,"0")}:${String(r).padStart(2,"0")}`;
}

async function beep(){
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    await ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 880;
    gain.gain.value = 0.0001;
    gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.22);
  } catch {}
}

function render(){
  out.textContent =
    `Time: ${fmt(left)}\n` +
    `Status: ${running ? "running" : "paused"}\n` +
    `Tip: change minutes, then Reset.`;
}

function tick(t){
  const dt = (t - last) / 1000;
  last = t;
  if (running){
    left = Math.max(0, left - dt);
    if (left === 0){
      running = false;
      beep();
      rt.println("done!");
    }
  }
  render();
  raf = requestAnimationFrame(tick);
}

start.onclick = ()=>{ running = true; };
pause.onclick = ()=>{ running = false; };
reset.onclick = ()=>{
  total = Math.max(60, Math.floor(Number(mins.value) * 60));
  left = total;
  running = false;
  render();
};

mins.addEventListener("change", ()=> {
  // don't auto-reset, but keep consistent if user resets
  rt.println("minutes set to", mins.value);
});

render();
requestAnimationFrame(tick);
};
