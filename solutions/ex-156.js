// Exercise 156 — Chapter 16 canonical solution
window.exercise = function(rt) {
// Input Mask — format phone number as you type (###) ###-####
const box = rt.section("Phone Input Mask");
const input = rt.input("(###) ###-####");
const out = rt.el("div", { class:"output" }, "Type digits…");
box.appendChild(input);
box.appendChild(out);

function maskDigits(d){
  const x = d.slice(0,10);
  const a = x.slice(0,3);
  const b = x.slice(3,6);
  const c = x.slice(6,10);
  if (x.length <= 3) return a;
  if (x.length <= 6) return `(${a}) ${b}`;
  return `(${a}) ${b}-${c}`;
}

input.addEventListener("input", ()=>{
  const digits = input.value.replace(/\D/g,"");
  input.value = maskDigits(digits);
  out.textContent = "Digits: " + digits.slice(0,10);
});
};
