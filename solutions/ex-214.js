// Exercise 214 — Chapter 22 canonical solution
window.exercise = function(rt) {
// Particles — click to spawn particles with velocity
const box = rt.section("Particle Burst");
const canvas = document.createElement("canvas");
canvas.width = 520;
canvas.height = 260;
canvas.style.width = "100%";
canvas.style.background = "rgba(255,255,255,.06)";
canvas.style.borderRadius = "10px";
canvas.style.touchAction = "none";
box.appendChild(canvas);

const ctx = canvas.getContext("2d");
const particles = [];

function pos(e){
  const r = canvas.getBoundingClientRect();
  return {
    x: (e.clientX - r.left) * (canvas.width / r.width),
    y: (e.clientY - r.top) * (canvas.height / r.height)
  };
}

function spawn(x,y){
  for (let i=0;i<60;i++){
    const a = Math.random() * Math.PI * 2;
    const s = 40 + Math.random() * 180;
    particles.push({ x, y, vx: Math.cos(a)*s, vy: Math.sin(a)*s, life: 1, r: 2 + Math.random()*3 });
  }
}

canvas.addEventListener("pointerdown", (e)=>{
  const p = pos(e);
  spawn(p.x, p.y);
  rt.println("spawned burst, total particles:", particles.length);
});

let last = performance.now();
function tick(t){
  const dt = (t - last)/1000;
  last = t;

  ctx.clearRect(0,0,canvas.width,canvas.height);

  for (let i = particles.length - 1; i >= 0; i--){
    const p = particles[i];
    p.life -= dt * 0.9;
    p.vx *= 0.98;
    p.vy = (p.vy * 0.98) + 120 * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;

    if (p.life <= 0) { particles.splice(i,1); continue; }

    ctx.beginPath();
    ctx.fillStyle = `rgba(98,168,255,${Math.max(0,p.life)})`;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fill();
  }

  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

rt.println("Click to burst particles. Uses dt-based physics.");
};
