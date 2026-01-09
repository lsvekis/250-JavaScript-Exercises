// Exercise 153 — Chapter 16 canonical solution
window.exercise = function(rt) {
// Password Strength Meter — simple scoring + bar
const box = rt.section("Password Strength");
const pass = rt.input("Password");
pass.type = "password";
const bar = rt.el("div", { class:"output" }, "Strength: 0/5");
box.appendChild(pass);
box.appendChild(bar);

const style = document.createElement("style");
style.textContent = `
.strBar{height:10px;border-radius:999px;background:rgba(255,255,255,.12);overflow:hidden;margin-top:8px}
.strFill{height:100%;width:0%}
`;
document.head.appendChild(style);

const wrap = document.createElement("div");
wrap.className = "strBar";
const fill = document.createElement("div");
fill.className = "strFill";
fill.style.background = "rgba(98,168,255,.9)";
wrap.appendChild(fill);
box.appendChild(wrap);

function score(p){
  let s = 0;
  if (p.length >= 8) s++;
  if (/[A-Z]/.test(p)) s++;
  if (/[a-z]/.test(p)) s++;
  if (/[0-9]/.test(p)) s++;
  if (/[^A-Za-z0-9]/.test(p)) s++;
  return s;
}

pass.addEventListener("input", ()=>{
  const s = score(pass.value);
  bar.textContent = `Strength: ${s}/5`;
  fill.style.width = (s/5*100) + "%";
});
};
