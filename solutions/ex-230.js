// Exercise 230 — Chapter 23 canonical solution
window.exercise = function(rt) {
// Robust JSON — safe JSON parsing and helpful error UI
const box = rt.section("Safe JSON Tools");
const input = rt.el("textarea", { class:"input", rows:"6" });
input.value = '{"name":"Ava","score":42}';
const btn = rt.el("button", { class:"btn" }, "Parse");
const out = rt.el("div", { class:"output" }, "");
box.appendChild(rt.el("div",{class:"small"}, "Paste JSON below:"));
box.appendChild(input);
box.appendChild(btn);
box.appendChild(out);

function parseJson(text){
  try { return { ok:true, value: JSON.parse(text) }; }
  catch (err) { return { ok:false, error: err.message }; }
}

btn.addEventListener("click", ()=>{
  const r = parseJson(input.value);
  if (!r.ok) {
    out.textContent = "❌ JSON Error:\n" + r.error + "\n\nTip: check quotes, commas, and trailing commas.";
    return;
  }
  // pretty print + derived info
  const v = r.value;
  const keys = (v && typeof v === "object") ? Object.keys(v) : [];
  out.textContent = "✅ Parsed OK\n\n" + JSON.stringify(v, null, 2) + "\n\nKeys: " + keys.join(", ");
});
};
