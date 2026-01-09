// Exercise 216 — Chapter 22 canonical solution
window.exercise = function(rt) {
// Keyboard Movement — move a square with WASD/Arrow keys
const box = rt.section("Keyboard Move");
const canvas = document.createElement("canvas");
canvas.width = 520;
canvas.height = 260;
canvas.style.width = "100%";
canvas.style.background = "rgba(255,255,255,.06)";
canvas.style.borderRadius = "10px";
box.appendChild(canvas);

const ctx = canvas.getContext("2d");
const keys = new Set();
const player = { x: 40, y: 40, size: 18, speed: 170 };

window.addEventListener("keydown", (e)=> keys.add(e.key.toLowerCase()));
window.addEventListener("keyup", (e)=> keys.delete(e.key.toLowerCase()));

let last = performance.now();
function tick(t){
  const dt = (t - last)/1000;
  last = t;

  const up = keys.has("arrowup") || keys.has("w");
  const down = keys.has("arrowdown") || keys.has("s");
  const left = keys.has("arrowleft") || keys.has("a");
  const right = keys.has("arrowright") || keys.has("d");

  player.x += (right - left) * player.speed * dt;
  player.y += (down - up) * player.speed * dt;

  player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
  player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));

  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "rgba(98,168,255,.95)";
  ctx.fillRect(player.x, player.y, player.size, player.size);

  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

rt.println("Use WASD / Arrow keys to move. Click the page first if needed.");
};
