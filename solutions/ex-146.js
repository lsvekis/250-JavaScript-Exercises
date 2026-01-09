// Exercise 146 — Chapter 15 canonical solution
window.exercise = function(rt) {
// Abort Fetch (Mock) — cancel a request using AbortController
const box = rt.section("Abortable Request");
const startBtn = rt.el("button", { class:"btn" }, "Start");
const cancelBtn = rt.el("button", { class:"btn" }, "Cancel");
const out = rt.el("div", { class:"output" }, "Idle");
box.appendChild(rt.el("div", { class:"row" }, startBtn, cancelBtn));
box.appendChild(out);

function mockFetchSlow(signal) {
  return new Promise((resolve, reject) => {
    const id = setTimeout(()=> resolve("✅ data loaded"), 2000);
    signal.addEventListener("abort", ()=> {
      clearTimeout(id);
      reject(new Error("❌ aborted"));
    }, { once:true });
  });
}

let controller = null;

startBtn.addEventListener("click", async ()=>{
  controller = new AbortController();
  out.textContent = "Loading (2s)…";
  try {
    const msg = await mockFetchSlow(controller.signal);
    out.textContent = msg;
  } catch (err) {
    out.textContent = err.message;
  }
});

cancelBtn.addEventListener("click", ()=> controller?.abort());
};
