// Exercise 204 — Chapter 21 canonical solution
window.exercise = function(rt) {
// Keyframes — create a wobble animation and trigger it on click
const box = rt.section("Keyframes Wobble");
const btn = rt.el("button", { class:"btn" }, "Wobble");
const badge = rt.el("div", { class:"card", style:{display:"inline-block", padding:"12px 16px"} }, "Click Wobble");

box.appendChild(rt.el("div",{class:"row"}, btn, badge));

const style = document.createElement("style");
style.textContent = `
@keyframes wobble {
  0%{ transform: rotate(0deg) scale(1); }
  25%{ transform: rotate(-6deg) scale(1.03); }
  50%{ transform: rotate(6deg) scale(1.03); }
  75%{ transform: rotate(-3deg) scale(1.02); }
  100%{ transform: rotate(0deg) scale(1); }
}
.wobble { animation: wobble 420ms ease; }
`;
document.head.appendChild(style);

function trigger(){
  badge.classList.remove("wobble");
  void badge.offsetWidth; // restart animation
  badge.classList.add("wobble");
}

btn.addEventListener("click", trigger);
badge.addEventListener("click", trigger);
rt.println("Tip: removing + re-adding the class restarts the keyframes.");
};
