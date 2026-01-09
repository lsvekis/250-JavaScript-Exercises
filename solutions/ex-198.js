// Exercise 198 — Chapter 20 canonical solution
window.exercise = function(rt) {
// Vibration API — haptics on supported devices (safe fallback)
const box = rt.section("Vibration (Optional)");
const shortBtn = rt.el("button", { class:"btn" }, "Short Buzz");
const patternBtn = rt.el("button", { class:"btn" }, "Pattern");
const out = rt.el("div", { class:"output" }, "");
box.appendChild(rt.el("div",{class:"row"}, shortBtn, patternBtn));
box.appendChild(out);

function vib(pattern){
  if (!("vibrate" in navigator)) {
    out.textContent = "❌ Vibration not supported (desktop browsers often).";
    return;
  }
  const ok = navigator.vibrate(pattern);
  out.textContent = ok ? "✅ Vibrating…" : "❌ Vibration blocked.";
}

shortBtn.onclick = ()=> vib(100);
patternBtn.onclick = ()=> vib([80, 60, 80, 60, 120]);
};
