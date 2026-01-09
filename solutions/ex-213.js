// Exercise 213 — Chapter 22 canonical solution
window.exercise = function(rt) {
// Paint Brush — draw with pointer, change brush size
const box = rt.section("Paint Brush");
const canvas = document.createElement("canvas");
canvas.width = 520;
canvas.height = 260;
canvas.style.width = "100%";
canvas.style.background = "rgba(255,255,255,.06)";
canvas.style.borderRadius = "10px";
canvas.style.touchAction = "none";
box.appendChild(canvas);

const row = rt.el("div", { class:"row" });
const size = rt.el("input", { type:"range", min:"1", max:"40", value:"8" });
const clear = rt.el("button", { class:"btn" }, "Clear");
const out = rt.el("div", { class:"small" }, "Brush: 8");
row.appendChild(rt.el("div",{class:"small"},"Size"));
row.appendChild(size);
row.appendChild(clear);
row.appendChild(out);
box.appendChild(row);

const ctx = canvas.getContext("2d");
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.strokeStyle = "rgba(255,255,255,.92)";

let drawing = false;
let last = null;

function pos(e){
  const r = canvas.getBoundingClientRect();
  return {
    x: (e.clientX - r.left) * (canvas.width / r.width),
    y: (e.clientY - r.top) * (canvas.height / r.height)
  };
}

size.addEventListener("input", ()=> out.textContent = "Brush: " + size.value);

canvas.addEventListener("pointerdown", (e)=>{
  drawing = true;
  canvas.setPointerCapture(e.pointerId);
  last = pos(e);
});

canvas.addEventListener("pointermove", (e)=>{
  if (!drawing) return;
  const p = pos(e);
  ctx.lineWidth = Number(size.value);
  ctx.beginPath();
  ctx.moveTo(last.x, last.y);
  ctx.lineTo(p.x, p.y);
  ctx.stroke();
  last = p;
});

function stop(){ drawing = false; last = null; }
canvas.addEventListener("pointerup", stop);
canvas.addEventListener("pointercancel", stop);

clear.addEventListener("click", ()=> ctx.clearRect(0,0,canvas.width,canvas.height));

rt.println("Draw with mouse/touch. Use slider to change brush size.");
};
