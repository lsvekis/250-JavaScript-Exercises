// Exercise 200 — Chapter 20 canonical solution
window.exercise = function(rt) {
// Pointer Events — draw a path with pointerdown/move/up
const box = rt.section("Pointer Draw");
const canvas = document.createElement("canvas");
canvas.width = 520;
canvas.height = 200;
canvas.style.width = "100%";
canvas.style.background = "rgba(255,255,255,.06)";
canvas.style.borderRadius = "10px";
canvas.style.touchAction = "none"; // allow drawing on touch devices
box.appendChild(canvas);

const ctx = canvas.getContext("2d");
ctx.lineWidth = 3;
ctx.strokeStyle = "rgba(255,255,255,.9)";

let drawing = false;

function pos(e){
  const r = canvas.getBoundingClientRect();
  return {
    x: (e.clientX - r.left) * (canvas.width / r.width),
    y: (e.clientY - r.top) * (canvas.height / r.height)
  };
}

canvas.addEventListener("pointerdown", (e)=>{
  drawing = true;
  canvas.setPointerCapture(e.pointerId);
  const p = pos(e);
  ctx.beginPath();
  ctx.moveTo(p.x, p.y);
});

canvas.addEventListener("pointermove", (e)=>{
  if (!drawing) return;
  const p = pos(e);
  ctx.lineTo(p.x, p.y);
  ctx.stroke();
});

canvas.addEventListener("pointerup", ()=>{ drawing = false; });
canvas.addEventListener("pointercancel", ()=>{ drawing = false; });

const clear = rt.el("button", { class:"btn" }, "Clear");
box.appendChild(clear);
clear.onclick = ()=> { ctx.clearRect(0,0,canvas.width,canvas.height); rt.println("cleared"); };

rt.println("Draw with mouse/touch/pen using Pointer Events.");
};
