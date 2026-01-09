// Exercise 071 — Chapter 8 canonical solution
window.exercise = function(rt) {
// Event Bubbling vs Capturing — see event flow
const box = rt.section("Bubbling vs Capturing");
const outer = rt.el("div", { class:"output", style:{padding:"10px"} }, "Outer (click me)");
const inner = rt.el("div", { class:"output", style:{marginTop:"8px", padding:"10px"} }, "Inner (click me)");
outer.appendChild(inner);
box.appendChild(outer);

function log(phase, where){
  rt.println(`${phase}: ${where}`);
}

outer.addEventListener("click", ()=>log("BUBBLE", "outer"));
inner.addEventListener("click", ()=>log("BUBBLE", "inner"));

outer.addEventListener("click", ()=>log("CAPTURE", "outer"), true);
inner.addEventListener("click", ()=>log("CAPTURE", "inner"), true);

rt.println("Click Inner, then Outer. Capturing logs first, then bubbling.");
};
