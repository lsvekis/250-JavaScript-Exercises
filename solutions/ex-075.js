// Exercise 075 — Chapter 8 canonical solution
window.exercise = function(rt) {
// Toast Notifications — queue messages and auto-dismiss
const box = rt.section("Toasts");
const btn = rt.el("button", { class:"btn" }, "Show Toast");
box.appendChild(btn);

const tray = rt.el("div", { style:{position:"relative"} });
box.appendChild(tray);

function toast(message, ms=1800){
  const t = rt.el("div", { class:"output", style:{marginTop:"8px"} }, message);
  tray.prepend(t);
  setTimeout(()=> t.remove(), ms);
}

let n = 1;
btn.addEventListener("click", ()=>{
  toast(`Toast #${n++} at ${new Date().toLocaleTimeString()}`);
});

toast("Welcome! Click 'Show Toast' to add more.");
};
