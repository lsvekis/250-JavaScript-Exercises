// Exercise 193 — Chapter 20 canonical solution
window.exercise = function(rt) {
// Loading Spinner — show/hide spinner while "loading" async work
const box = rt.section("Loading Spinner");
box.appendChild(rt.el("p", { class:"small" }, "A common UI pattern: show a spinner while an async task runs."));

const row = rt.el("div", { class:"row" });
const start = rt.el("button", { class:"btn" }, "Start Load");
const cancel = rt.el("button", { class:"btn" }, "Cancel");
cancel.disabled = true;
row.appendChild(start);
row.appendChild(cancel);
box.appendChild(row);

const status = rt.el("div", { class:"output" }, "Idle.");
box.appendChild(status);

// spinner element
const wrap = rt.el("div", { style:{display:"flex", gap:"10px", alignItems:"center", marginTop:"10px"} });
const spinner = rt.el("div", { class:"spin", "aria-label":"Loading", role:"img" });
const label = rt.el("div", { class:"small" }, "Loading…");
wrap.appendChild(spinner);
wrap.appendChild(label);
box.appendChild(wrap);

wrap.style.display = "none";

const style = document.createElement("style");
style.textContent = `
  .spin{
    width:18px;height:18px;border-radius:999px;
    border:3px solid rgba(255,255,255,.25);
    border-top-color: rgba(98,168,255,.95);
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin{to{transform:rotate(360deg)}}
`;
document.head.appendChild(style);

let timer = 0;

function setLoading(on){
  wrap.style.display = on ? "flex" : "none";
  start.disabled = on;
  cancel.disabled = !on;
  status.textContent = on ? "Loading…" : "Idle.";
}

function fakeAsync(ms){
  return new Promise((resolve)=>{ timer = setTimeout(resolve, ms); });
}

start.addEventListener("click", async ()=>{
  setLoading(true);
  rt.println("load started");
  try{
    // simulate "network" work
    await fakeAsync(1600);
    status.textContent = "✅ Done! Data loaded (simulated).";
    rt.println("load completed");
  } finally {
    setLoading(false);
  }
});

cancel.addEventListener("click", ()=>{
  clearTimeout(timer);
  setLoading(false);
  status.textContent = "⏹️ Canceled.";
  rt.println("load canceled");
});
};
