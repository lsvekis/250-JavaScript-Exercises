// Exercise 233 — Chapter 24 canonical solution
window.exercise = function(rt) {
// Character Counter — enforce max length and show remaining
const box = rt.section("Character Counter");
const max = 120;

const ta = rt.el("textarea", { class:"input", rows:"5", placeholder:"Write a short bio (max 120 chars)…" });
const counter = rt.el("div", { class:"small" }, "");
const out = rt.el("div", { class:"output" }, "Preview:");

box.appendChild(ta);
box.appendChild(counter);
box.appendChild(out);

function render(){
  const len = ta.value.length;
  const remaining = Math.max(0, max - len);
  if (len > max) ta.value = ta.value.slice(0, max);

  counter.textContent = `${ta.value.length}/${max} (${remaining} left)`;
  out.textContent = "Preview:\n" + (ta.value || "(empty)");
}

ta.addEventListener("input", render);
render();
};
