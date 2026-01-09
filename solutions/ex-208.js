// Exercise 208 — Chapter 21 canonical solution
window.exercise = function(rt) {
// Canvas Animation — bouncing ball with delta time
const box = rt.section("Canvas Bounce");
const canvas = document.createElement("canvas");
canvas.width = 520;
canvas.height = 180;
canvas.style.width = "100%";
canvas.style.background = "rgba(255,255,255,.06)";
canvas.style.borderRadius = "10px";
box.appendChild(canvas);

const ctx = canvas.getContext("2d");
let x = 60, y = 60;
let vx = 170, vy = 120;
const r = 12;

let last = performance.now();
function tick(t){
  const dt = (t - last) / 1000;
  last = t;

  x += vx * dt;
  y += vy * dt;

  if (x < r) { x = r; vx *= -1; }
  if (x > canvas.width - r) { x = canvas.width - r; vx *= -1; }
  if (y < r) { y = r; vy *= -1; }
  if (y > canvas.height - r) { y = canvas.height - r; vy *= -1; }

  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2);
  ctx.fillStyle = "rgba(98,168,255,.95)";
  ctx.fill();

  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

rt.println("This uses dt so speed stays consistent across frame rates.");
};
