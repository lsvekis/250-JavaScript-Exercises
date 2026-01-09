// Exercise 244 — Chapter 25 canonical solution
window.exercise = function(rt) {
// Capstone: Weather-ish Dashboard (mock data) + unit toggle + sparkline
const box = rt.section("Weather Dashboard (Mock)");
box.appendChild(rt.el("p",{class:"small"}, "Uses mock data so it works offline/GitHub Pages."));

const toggle = rt.el("button", { class:"btn" }, "Switch to °F");
const out = rt.el("div", { class:"output" }, "");
const canvas = document.createElement("canvas");
canvas.width = 520;
canvas.height = 120;
canvas.style.width = "100%";
canvas.style.background = "rgba(255,255,255,.06)";
canvas.style.borderRadius = "10px";

box.appendChild(toggle);
box.appendChild(out);
box.appendChild(canvas);

let unit = "C";
const dataC = [ -2, 0, 1, 3, 2, 1, 0, -1, 2, 4, 3, 1 ]; // 12 "hours"
const cond = ["Cloudy","Cloudy","Snow","Snow","Clear","Clear","Wind","Cloudy","Clear","Clear","Cloudy","Snow"];

function toF(c){ return (c*9/5)+32; }

function render(){
  const temps = unit === "C" ? dataC : dataC.map(toF);
  const now = temps[temps.length-1];
  out.textContent =
    `Now: ${now.toFixed(0)}°${unit}  —  ${cond[cond.length-1]}\n` +
    `High: ${Math.max(...temps).toFixed(0)}°${unit}\n` +
    `Low:  ${Math.min(...temps).toFixed(0)}°${unit}\n` +
    `Trend: last ${temps.length} points`;

  // sparkline
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const pad = 14;
  const w = canvas.width - pad*2;
  const h = canvas.height - pad*2;

  const min = Math.min(...temps);
  const max = Math.max(...temps);
  const range = Math.max(1e-6, max - min);

  ctx.strokeStyle = "rgba(98,168,255,.95)";
  ctx.lineWidth = 2;
  ctx.beginPath();

  temps.forEach((t, i)=>{
    const x = pad + (i/(temps.length-1)) * w;
    const y = pad + (1 - ((t - min)/range)) * h;
    if (i===0) ctx.moveTo(x,y);
    else ctx.lineTo(x,y);
  });
  ctx.stroke();

  // dots
  ctx.fillStyle = "rgba(255,255,255,.9)";
  temps.forEach((t, i)=>{
    const x = pad + (i/(temps.length-1)) * w;
    const y = pad + (1 - ((t - min)/range)) * h;
    ctx.beginPath(); ctx.arc(x,y,3,0,Math.PI*2); ctx.fill();
  });
}

toggle.onclick = ()=>{
  unit = (unit === "C") ? "F" : "C";
  toggle.textContent = unit === "C" ? "Switch to °F" : "Switch to °C";
  render();
};

render();
};
