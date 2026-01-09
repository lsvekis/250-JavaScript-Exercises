// Exercise 207 — Chapter 21 canonical solution
window.exercise = function(rt) {
// Timeline — schedule multiple animations (staggered)
const box = rt.section("Staggered Timeline");
const btn = rt.el("button", { class:"btn" }, "Play");
const wrap = rt.el("div", { class:"output", style:{height:"140px", position:"relative"} });
box.appendChild(btn);
box.appendChild(wrap);

function makeDot(y){
  return rt.el("div", { style:{width:"14px", height:"14px", borderRadius:"999px", background:"rgba(98,168,255,.95)", position:"absolute", left:"0px", top:y+"px"} });
}

const dots = [20, 60, 100].map(y => makeDot(y));
dots.forEach(d => wrap.appendChild(d));

function animateDot(dot, delay){
  const startT = performance.now() + delay;
  const duration = 800;
  const max = ()=> wrap.clientWidth - 14;

  function frame(t){
    if (t < startT) { requestAnimationFrame(frame); return; }
    const p = Math.min(1, (t - startT) / duration);
    const eased = p < 0.5 ? 2*p*p : 1 - Math.pow(-2*p + 2, 2)/2;
    dot.style.left = (eased * max()) + "px";
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

btn.addEventListener("click", ()=>{
  dots.forEach((d, i)=> animateDot(d, i * 150));
  rt.println("played staggered animation");
});
};
