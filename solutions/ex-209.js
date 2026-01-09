// Exercise 209 — Chapter 21 canonical solution
window.exercise = function(rt) {
// Parallax Effect — update background position based on scroll
const box = rt.section("Parallax (Fake)");
const scroller = rt.el("div", { class:"output", style:{height:"180px", overflow:"auto", padding:"0"} });
box.appendChild(scroller);

const scene = rt.el("div", { style:{
  height:"520px",
  backgroundImage:"linear-gradient(180deg, rgba(98,168,255,.35), rgba(0,0,0,0))",
  backgroundSize:"100% 200%",
  backgroundPosition:"0% 0%",
  padding:"12px"
}});
scene.appendChild(rt.el("div",{class:"card"}, rt.el("h3",{},"Scroll Me"), rt.el("div",{class:"small"}, "We move the gradient background for a parallax feel.")));
scroller.appendChild(scene);

scroller.addEventListener("scroll", ()=>{
  const p = scroller.scrollTop / (scene.clientHeight - scroller.clientHeight);
  scene.style.backgroundPosition = `0% ${Math.round(p*100)}%`;
});
};
