// Exercise 211 — Chapter 22 canonical solution
window.exercise = function(rt) {
// Canvas Grid — draw a scalable grid with axes
const box = rt.section("Canvas Grid");
const canvas = document.createElement("canvas");
canvas.width = 520;
canvas.height = 260;
canvas.style.width = "100%";
canvas.style.background = "rgba(255,255,255,.06)";
canvas.style.borderRadius = "10px";
box.appendChild(canvas);

const ctx = canvas.getContext("2d");

function drawGrid(step=26){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(255,255,255,.10)";
  for (let x=0; x<=canvas.width; x+=step){
    ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,canvas.height); ctx.stroke();
  }
  for (let y=0; y<=canvas.height; y+=step){
    ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(canvas.width,y); ctx.stroke();
  }

  ctx.strokeStyle = "rgba(98,168,255,.85)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(canvas.width/2, 0);
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.moveTo(0, canvas.height/2);
  ctx.lineTo(canvas.width, canvas.height/2);
  ctx.stroke();

  ctx.fillStyle = "rgba(255,255,255,.85)";
  ctx.font = "12px system-ui";
  ctx.fillText("x", canvas.width - 14, canvas.height/2 - 8);
  ctx.fillText("y", canvas.width/2 + 8, 14);
}

drawGrid();
rt.println("Grid drawn. Try changing step size in drawGrid(step).");
};
