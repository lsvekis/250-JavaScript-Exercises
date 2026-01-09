// Exercise 189 — Chapter 19 canonical solution
window.exercise = function(rt) {
// Error Boundary Pattern — isolate failing code and keep app running
const box = rt.section("Error Boundary");
const runBtn = rt.el("button", { class:"btn" }, "Run risky code");
const out = rt.el("div", { class:"output" }, "Ready");
box.appendChild(runBtn);
box.appendChild(out);

function risky() {
  if (Math.random() < 0.5) throw new Error("Random failure");
  return "✅ success";
}

function safeRun(fn) {
  try { return { ok:true, value: fn() }; }
  catch (err) { return { ok:false, error: err.message }; }
}

runBtn.addEventListener("click", ()=>{
  const r = safeRun(risky);
  out.textContent = r.ok ? r.value : ("Handled error: " + r.error);
});
rt.println("Click repeatedly — app stays alive even when risky() fails.");
};
