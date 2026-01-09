// Exercise 215 — Chapter 22 canonical solution
window.exercise = function(rt) {
// Gravity & Bounce — drop balls that bounce off the floor
const box = rt.section("Gravity Bounce");
const canvas = document.createElement("canvas");
canvas.width = 520;
canvas.height = 260;
canvas.style.width = "100%";
canvas.style.background = "rgba(255,255,255,.06)";
canvas.style.borderRadius = "10px";
canvas.style.touchAction = "none";
box.appendChild(canvas);

const ctx = canvas.getContext("2d");
const balls = [];

function pos(e){
  const r = canvas.getBoundingClientRect();
  return {
    x: (e.clientX - r.left) * (canvas.width / r.width),
    y: (e.clientY - r.top) * (canvas.height / r.height)
  };
}

canvas.addEventListener("pointerdown", (e)=>{
  const p = pos(e);
  balls.push({ x:p.x, y:p.y, vx:(Math.random()*200-100), vy:-80, r: 10 + Math.random()*10 });
  rt.println("balls:", balls.length);
});

let last = performance.now();
function tick(t){
  const dt = (t - last)/1000;
  last = t;

  ctx.clearRect(0,0,canvas.width,canvas.height);

  for (const b of balls){
    b.vy += 500 * dt;
    b.x += b.vx * dt;
    b.y += b.vy * dt;

    if (b.x < b.r) { b.x = b.r; b.vx *= -1; }
    if (b.x > canvas.width - b.r) { b.x = canvas.width - b.r; b.vx *= -1; }

    if (b.y > canvas.height - b.r) {
      b.y = canvas.height - b.r;
      b.vy *= -0.72;
      b.vx *= 0.98;
      if (Math.abs(b.vy) < 20) b.vy = 0;
    }

    ctx.beginPath();
    ctx.fillStyle = "rgba(255,255,255,.92)";
    ctx.arc(b.x, b.y, b.r, 0, Math.PI*2);
    ctx.fill();
  }

  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

rt.println("Click to drop a ball. Watch gravity + bounce + friction.");
};
