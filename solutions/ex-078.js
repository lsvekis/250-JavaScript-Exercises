// Exercise 078 — Chapter 8 canonical solution
window.exercise = function(rt) {
// Error Handling — try/catch with async function
const box = rt.section("Async Error Handling");
const btn = rt.el("button", { class:"btn" }, "Run");
const out = rt.el("div", { class:"output" }, "Ready");
box.appendChild(btn);
box.appendChild(out);

function riskyTask(){
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      const ok = Math.random() > 0.4;
      ok ? resolve("✅ success") : reject(new Error("❌ random failure"));
    }, 500);
  });
}

btn.addEventListener("click", async ()=>{
  out.textContent = "Working…";
  try {
    const msg = await riskyTask();
    out.textContent = msg;
  } catch (err) {
    out.textContent = err.message;
    rt.println("caught:", err.message);
  }
});
};
