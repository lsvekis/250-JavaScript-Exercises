// Exercise 174 — Chapter 18 canonical solution
window.exercise = function(rt) {
// IntersectionObserver — lazy-load sections (no images needed)
const box = rt.section("Intersection Observer");
box.appendChild(rt.el("p",{class:"small"}, "Scroll inside the panel; items report when they enter view."));

const scroller = rt.el("div", { class:"output", style:{height:"180px", overflow:"auto"} });
box.appendChild(scroller);

const items = Array.from({ length: 20 }, (_, i)=> rt.el("div", { style:{padding:"14px 8px", borderBottom:"1px solid rgba(255,255,255,.1)"} }, "Section " + (i+1)));
items.forEach(el => scroller.appendChild(el));

const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if (en.isIntersecting) rt.println("in view:", en.target.textContent);
  });
}, { root: scroller, threshold: 0.6 });

items.forEach(el => io.observe(el));
};
