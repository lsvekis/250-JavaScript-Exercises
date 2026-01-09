// Exercise 064 — Chapter 7 canonical solution
window.exercise = function(rt) {
// Timer Basics — start/stop a stopwatch
const box = rt.section("Stopwatch");
const display = rt.el("div", { class:"output" }, "0.0s");
const startBtn = rt.el("button", { class:"btn" }, "Start");
const stopBtn = rt.el("button", { class:"btn" }, "Stop");
const resetBtn = rt.el("button", { class:"btn" }, "Reset");

box.appendChild(rt.el("div", { class:"row" }, startBtn, stopBtn, resetBtn));
box.appendChild(display);

let startTime = 0;
let timerId = null;

function render(){
  const elapsed = (Date.now() - startTime) / 1000;
  display.textContent = elapsed.toFixed(1) + "s";
}

startBtn.addEventListener("click", ()=>{
  if(timerId) return;
  startTime = Date.now();
  timerId = setInterval(render, 100);
});

stopBtn.addEventListener("click", ()=>{
  if(!timerId) return;
  clearInterval(timerId);
  timerId = null;
});

resetBtn.addEventListener("click", ()=>{
  if(timerId){ clearInterval(timerId); timerId = null; }
  display.textContent = "0.0s";
});

rt.println("Start runs a timer; Stop pauses; Reset clears.");
};
