// Exercise 157 — Chapter 16 canonical solution
window.exercise = function(rt) {
// Accessible Toggle — ARIA attributes and keyboard support
const box = rt.section("Accessible Toggle");
const btn = rt.el("button", { class:"btn", role:"switch", "aria-checked":"false" }, "OFF");
const out = rt.el("div", { class:"output" }, "Switch is OFF");
box.appendChild(btn);
box.appendChild(out);

let on = false;
function render(){
  btn.textContent = on ? "ON" : "OFF";
  btn.setAttribute("aria-checked", String(on));
  out.textContent = "Switch is " + (on ? "ON ✅" : "OFF ❌");
}

function toggle(){ on = !on; render(); }

btn.addEventListener("click", toggle);
btn.addEventListener("keydown", (e)=>{
  if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(); }
});

render();
rt.println("Use mouse, Enter, or Space to toggle.");
};
