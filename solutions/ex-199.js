// Exercise 199 — Chapter 20 canonical solution
window.exercise = function(rt) {
// Online/Offline Events — react to network changes
const box = rt.section("Online/Offline");
const out = rt.el("div", { class:"output" }, "");
box.appendChild(out);

function render(){
  out.textContent = navigator.onLine ? "✅ Online" : "❌ Offline";
}
window.addEventListener("online", ()=>{ render(); rt.println("online event"); });
window.addEventListener("offline", ()=>{ render(); rt.println("offline event"); });

render();
rt.println("Tip: toggle your network (or DevTools) to see events.");
};
