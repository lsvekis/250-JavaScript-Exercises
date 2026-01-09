// Exercise 162 — Chapter 17 canonical solution
window.exercise = function(rt) {
// sessionStorage — data that resets when tab closes
const box = rt.section("sessionStorage Counter");
const key = "js250_session_count";

let count = Number(sessionStorage.getItem(key) || "0");
const out = rt.el("div", { class:"output" }, `Count in this tab: ${count}`);
const inc = rt.el("button", { class:"btn" }, "+1");
const reset = rt.el("button", { class:"btn" }, "Reset");

box.appendChild(rt.el("div",{class:"row"}, inc, reset));
box.appendChild(out);

function render(){
  out.textContent = `Count in this tab: ${count}`;
  sessionStorage.setItem(key, String(count));
}

inc.addEventListener("click", ()=>{ count++; render(); });
reset.addEventListener("click", ()=>{ count = 0; render(); });

render();
rt.println("Open this page in a new tab to see a separate session value.");
};
