// Exercise 152 — Chapter 16 canonical solution
window.exercise = function(rt) {
// Live Validation — validate while typing (debounced)
const box = rt.section("Live Validation");
const input = rt.input("Username (3+ chars, letters/numbers)");
const out = rt.el("div", { class:"output" }, "Type a username…");
box.appendChild(input);
box.appendChild(out);

function validUsername(v){
  if (v.length < 3) return "Too short";
  if (!/^[a-z0-9]+$/i.test(v)) return "Only letters/numbers";
  return "";
}

let t = null;
input.addEventListener("input", ()=>{
  clearTimeout(t);
  out.textContent = "Checking…";
  t = setTimeout(()=>{
    const v = input.value.trim();
    const err = validUsername(v);
    out.textContent = err ? `❌ ${err}` : "✅ Looks good";
  }, 250);
});
};
