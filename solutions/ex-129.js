// Exercise 129 — Chapter 13 canonical solution
window.exercise = function(rt) {
// Defensive DOM — avoid null errors when selecting elements
const box = rt.section("Safe DOM Query");
const btn = rt.el("button", { class:"btn" }, "Try Update");
const msg = rt.el("div", { class:"output" }, "Click to attempt update");
box.appendChild(btn);
box.appendChild(msg);

function safeQuery(selector) {
  const el = document.querySelector(selector);
  if (!el) rt.println("Not found:", selector);
  return el;
}

btn.addEventListener("click", () => {
  const target = safeQuery("#does-not-exist");
  if (!target) {
    msg.textContent = "Target missing — handled safely ✅";
    return;
  }
  target.textContent = "Updated!";
});

rt.println("This exercise prevents 'Cannot set properties of null' errors.");
};
