// Exercise 234 — Chapter 24 canonical solution
window.exercise = function(rt) {
// Input Mask — format phone number as (XXX) XXX-XXXX
const box = rt.section("Phone Input Mask");
const input = rt.el("input", { class:"input", placeholder:"Type digits…" });
const out = rt.el("div", { class:"output" }, "");
box.appendChild(input);
box.appendChild(out);

function digitsOnly(s){ return s.replace(/\D/g, "").slice(0, 10); }

function formatPhone(d){
  const a = d.slice(0,3);
  const b = d.slice(3,6);
  const c = d.slice(6,10);
  if (d.length <= 3) return a;
  if (d.length <= 6) return `(${a}) ${b}`;
  return `(${a}) ${b}-${c}`;
}

input.addEventListener("input", ()=>{
  const d = digitsOnly(input.value);
  const formatted = formatPhone(d);
  input.value = formatted;
  out.textContent = `digits=${d}\nformatted=${formatted}`;
});
};
