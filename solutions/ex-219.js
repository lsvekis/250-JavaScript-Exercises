// Exercise 219 — Chapter 22 canonical solution
window.exercise = function(rt) {
// Mini Game — Catch the falling stars (score + miss)
const box = rt.section("Catch Game");
const canvas = document.createElement("canvas");
canvas.width = 520;
canvas.height = 280;
canvas.style.width = "100%";
canvas.style.background = "rgba(255,255,255,.06)";
canvas.style.borderRadius = "10px";
canvas.style.touchAction = "none";
box.appendChild(canvas);

const ctx = canvas.getContext("2d");
const state = { score: 0, missed: 0 };
const stars = [];

const player = { x: 260, y: 250, w: 70, h: 14 };

function spawn(){
  stars.push({
    x: Math.random() * (canvas.width - 10) + 5,
    y: -10,
    vy: 80 + Math.random() * 160,
    r: 6 + Math.random() * 5
  });
}

function clamp(n,min,max){ return Math.max(min, Math.min(max, n)); }

function rectCircleHit(rect, c){
  const px = clamp(c.x, rect.x, rect.x + rect.w);
  const py = clamp(c.y, rect.y, rect.y + rect.h);
  const dx = c.x - px;
  const dy = c.y - py;
  return dx*dx + dy*dy <= c.r*c.r;
}

function setPlayerX(x){ player.x = clamp(x - player.w/2, 0, canvas.width - player.w); }

canvas.addEventListener("pointermove", (e)=>{
  const r = canvas.getBoundingClientRect();
  const x = (e.clientX - r.left) * (canvas.width / r.width);
  setPlayerX(x);
});

canvas.addEventListener("pointerdown", (e)=>{
  canvas.setPointerCapture(e.pointerId);
});

let spawnTimer = 0;
let last = performance.now();
function tick(t){
  const dt = (t - last)/1000;
  last = t;

  spawnTimer += dt;
  if (spawnTimer > 0.6) { spawnTimer = 0; spawn(); }

  // update
  for (let i = stars.length - 1; i >= 0; i--){
    const s = stars[i];
    s.y += s.vy * dt;

    if (rectCircleHit(player, s)) {
      state.score++;
      stars.splice(i,1);
      continue;
    }

    if (s.y - s.r > canvas.height) {
      state.missed++;
      stars.splice(i,1);
    }
  }

  // draw
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // HUD
  ctx.fillStyle = "rgba(255,255,255,.9)";
  ctx.font = "14px system-ui";
  ctx.fillText(`score: ${state.score}`, 12, 20);
  ctx.fillText(`missed: ${state.missed}`, 120, 20);

  // player
  ctx.fillStyle = "rgba(98,168,255,.95)";
  ctx.fillRect(player.x, player.y, player.w, player.h);

  // stars
  for (const s of stars){
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,255,255,.92)";
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fill();
  }

  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

rt.println("Move your pointer over the canvas to catch falling circles.");
};
