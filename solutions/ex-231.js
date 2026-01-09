// Exercise 231 — Chapter 24 canonical solution
window.exercise = function(rt) {
// Live Region — announce updates for screen readers (aria-live)
const box = rt.section("ARIA Live Region");
box.appendChild(rt.el("p",{class:"small"}, "Click buttons. Updates are announced in a polite live region."));

const live = rt.el("div", { class:"small", role:"status", "aria-live":"polite", "aria-atomic":"true", style:{marginTop:"8px"} }, "Ready.");
const out = rt.el("div", { class:"output" }, "Log:");
const inc = rt.el("button", { class:"btn" }, "Increment");
const reset = rt.el("button", { class:"btn" }, "Reset");

box.appendChild(rt.el("div",{class:"row"}, inc, reset));
box.appendChild(live);
box.appendChild(out);

let n = 0;
function announce(msg){
  live.textContent = msg;
  out.textContent += "\n" + msg;
}

inc.onclick = ()=> { n++; announce(`Count is now ${n}`); };
reset.onclick = ()=> { n = 0; announce("Reset to 0"); };

announce("Ready.");
};
