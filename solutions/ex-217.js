// Exercise 217 — Chapter 22 canonical solution
window.exercise = function(rt) {
// Collision Detection — circle vs target rectangle (circle-rect)
const box = rt.section("Collision Demo");
const canvas = document.createElement("canvas");
canvas.width = 520;
canvas.height = 260;
canvas.style.width = "100%";
canvas.style.background = "rgba(255,255,255,.06)";
canvas.style.borderRadius = "10px";
box.appendChild(canvas);

const ctx = canvas.getContext("2d");
const keys = new Set();

const ball = { x: 80, y: 80, r: 10, speed: 160 };
const target = { x: 320, y: 140, w: 60, h: 40 };

window.addEventListener("keydown", (e)=> keys.add(e.key.toLowerCase()));
window.addEventListener("keyup", (e)=> keys.delete(e.key.toLowerCase()));

function circleRectCollide(c, r){
  const px = Math.max(r.x, Math.min(c.x, r.x + r.w));
  const py = Math.max(r.y, Math.min(c.y, r.y + r.h));
  const dx = c.x - px;
  const dy = c.y - py;
  return (dx*dx + dy*dy) <= c.r*c.r;
}

let last = performance.now();
function tick(t){
  const dt = (t - last)/1000;
  last = t;

  const up = keys.has("arrowup") || keys.has("w");
  const down = keys.has("arrowdown") || keys.has("s");
  const left = keys.has("arrowleft") || keys.has("a");
  const right = keys.has("arrowright") || keys.has("d");

  ball.x += (right - left) * ball.speed * dt;
  ball.y += (down - up) * ball.speed * dt;

  ball.x = Math.max(ball.r, Math.min(canvas.width - ball.r, ball.x));
  ball.y = Math.max(ball.r, Math.min(canvas.height - ball.r, ball.y));

  const hit = circleRectCollide(ball, target);

  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = hit ? "rgba(16,185,129,.9)" : "rgba(255,255,255,.18)";
  ctx.fillRect(target.x, target.y, target.w, target.h);

  ctx.beginPath();
  ctx.fillStyle = "rgba(98,168,255,.95)";
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2);
  ctx.fill();

  ctx.fillStyle = "rgba(255,255,255,.9)";
  ctx.font = "13px system-ui";
  ctx.fillText(hit ? "HIT ✅" : "No hit", 12, 22);

  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

rt.println("Move the ball with WASD/Arrows. Box turns green on collision.");
};
