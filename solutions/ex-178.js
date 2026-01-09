// Exercise 178 — Chapter 18 canonical solution
window.exercise = function(rt) {
// ResizeObserver — react to element size changes
const box = rt.section("Resize Observer");
const resizable = rt.el("div", { class:"output", style:{resize:"both", overflow:"auto", height:"120px"} }, "Resize me (drag corner)");
const out = rt.el("div", { class:"small" }, "");
box.appendChild(resizable);
box.appendChild(out);

const ro = new ResizeObserver(entries=>{
  for (const e of entries) {
    const r = e.contentRect;
    out.textContent = `width=${Math.round(r.width)} height=${Math.round(r.height)}`;
  }
});
ro.observe(resizable);
};
