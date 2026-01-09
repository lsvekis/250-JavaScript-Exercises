// Exercise 080 — Chapter 8 canonical solution
window.exercise = function(rt) {
// Abortable Task — cancel a long-running async operation
const box = rt.section("Abort Controller");
const startBtn = rt.el("button", { class:"btn" }, "Start");
const cancelBtn = rt.el("button", { class:"btn" }, "Cancel");
const out = rt.el("div", { class:"output" }, "Idle");
box.appendChild(rt.el("div", { class:"row" }, startBtn, cancelBtn));
box.appendChild(out);

function abortableWait(ms, signal){
  return new Promise((resolve, reject) => {
    const id = setTimeout(()=> resolve("finished ✅"), ms);
    signal.addEventListener("abort", ()=> {
      clearTimeout(id);
      reject(new Error("cancelled ❌"));
    }, { once:true });
  });
}

let controller = null;

startBtn.addEventListener("click", async ()=>{
  controller = new AbortController();
  out.textContent = "Working (3s)…";
  try {
    const result = await abortableWait(3000, controller.signal);
    out.textContent = result;
  } catch (err) {
    out.textContent = err.message;
  }
});

cancelBtn.addEventListener("click", ()=>{
  if(controller) controller.abort();
});

rt.println("Start then cancel to see abort behavior.");
};
