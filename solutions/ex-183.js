// Exercise 183 — Chapter 19 canonical solution
window.exercise = function(rt) {
// DOM Test — test a UI function by simulating clicks
const box = rt.section("DOM Test");
const btn = rt.el("button", { class:"btn" }, "Click me");
const out = rt.el("div", { class:"output" }, "0");
box.appendChild(btn);
box.appendChild(out);

let count = 0;
btn.addEventListener("click", ()=>{ count++; out.textContent = String(count); });

function click(el){ el.dispatchEvent(new MouseEvent("click", { bubbles:true })); }

try {
  click(btn); click(btn); click(btn);
  if (out.textContent !== "3") throw new Error("Expected 3 after 3 clicks");
  rt.println("✅ DOM test passed");
} catch (err) {
  rt.println("❌ DOM test failed:", err.message);
}
};
