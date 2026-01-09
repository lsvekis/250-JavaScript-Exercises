// Exercise 098 — Chapter 10 canonical solution
window.exercise = function(rt) {
// Canvas Dots — draw dots where you click (canvas API)
const box = rt.section("Canvas Dots");
const canvas = document.createElement("canvas");
canvas.width = 520;
canvas.height = 180;
canvas.style.width = "100%";
canvas.style.background = "rgba(255,255,255,.06)";
canvas.style.borderRadius = "10px";
box.appendChild(canvas);

const ctx = canvas.getContext("2d");

function dot(x,y){
  ctx.beginPath();
  ctx.arc(x,y,4,0,Math.PI*2);
  ctx.fillStyle = "rgba(255,255,255,.9)";
  ctx.fill();
}

canvas.addEventListener("click", (e)=>{
  const r = canvas.getBoundingClientRect();
  const x = (e.clientX - r.left) * (canvas.width / r.width);
  const y = (e.clientY - r.top) * (canvas.height / r.height);
  dot(x,y);
  rt.println("dot:", Math.round(x), Math.round(y));
});

rt.println("Click the canvas to draw dots.");
};
