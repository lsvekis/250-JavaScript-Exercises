// Exercise 212 — Chapter 22 canonical solution
window.exercise = function(rt) {
// Plot a Function — y = sin(x) with scaling
const box = rt.section("Function Plot");
const canvas = document.createElement("canvas");
canvas.width = 520;
canvas.height = 260;
canvas.style.width = "100%";
canvas.style.background = "rgba(255,255,255,.06)";
canvas.style.borderRadius = "10px";
box.appendChild(canvas);

const ctx = canvas.getContext("2d");

function plot(fn, color="rgba(98,168,255,.95)") {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.strokeStyle = "rgba(255,255,255,.25)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, canvas.height/2);
  ctx.lineTo(canvas.width, canvas.height/2);
  ctx.moveTo(canvas.width/2, 0);
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();

  const scaleX = (Math.PI * 4) / canvas.width;
  const scaleY = canvas.height * 0.35;

  for (let px=0; px<canvas.width; px++){
    const x = (px - canvas.width/2) * scaleX;
    const y = fn(x);
    const py = canvas.height/2 - (y * scaleY);
    if (px === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.stroke();
}

plot(Math.sin);
rt.println("Plotted y = sin(x). Try plot(x => Math.cos(x)).");
};
