// Exercise 067 — Chapter 7 canonical solution
window.exercise = function(rt) {
// Keyboard Events — arrow keys move a box
const box = rt.section("Keyboard Move");
const stage = rt.el("div", { class:"output", style:{position:"relative", height:"140px"} });
const dot = rt.el("div", { style:{
  position:"absolute", width:"18px", height:"18px", borderRadius:"999px",
  left:"10px", top:"10px", background:"rgba(98,168,255,.8)"
}});
stage.appendChild(dot);
box.appendChild(stage);

let x=10, y=10;
function render(){ dot.style.left = x+"px"; dot.style.top = y+"px"; }

window.addEventListener("keydown", (e)=>{
  const step = 6;
  if(e.key==="ArrowLeft") x = Math.max(0, x-step);
  if(e.key==="ArrowRight") x = Math.min( stage.clientWidth-18, x+step);
  if(e.key==="ArrowUp") y = Math.max(0, y-step);
  if(e.key==="ArrowDown") y = Math.min(stage.clientHeight-18, y+step);
  render();
});
rt.println("Click the page, then use arrow keys to move the dot.");
};
