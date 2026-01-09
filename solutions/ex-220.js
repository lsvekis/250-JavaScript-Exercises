// Exercise 220 — Chapter 22 canonical solution
window.exercise = function(rt) {
// Export Canvas — download a PNG from the canvas (data URL)
const box = rt.section("Export Canvas PNG");
const canvas = document.createElement("canvas");
canvas.width = 520;
canvas.height = 220;
canvas.style.width = "100%";
canvas.style.background = "rgba(255,255,255,.06)";
canvas.style.borderRadius = "10px";
box.appendChild(canvas);

const ctx = canvas.getContext("2d");

// draw something
ctx.fillStyle = "rgba(98,168,255,.95)";
ctx.fillRect(40, 40, 180, 90);

ctx.fillStyle = "rgba(255,255,255,.92)";
ctx.font = "18px system-ui";
ctx.fillText("Export Me", 70, 95);

ctx.strokeStyle = "rgba(255,255,255,.5)";
ctx.lineWidth = 2;
ctx.strokeRect(40, 40, 180, 90);

const row = rt.el("div", { class:"row" });
const btn = rt.el("button", { class:"btn" }, "Create PNG Link");
const open = rt.el("a", { class:"btn", href:"#", target:"_blank", rel:"noopener" }, "Open PNG");
open.style.pointerEvents = "none";
open.style.opacity = "0.55";
const out = rt.el("div", { class:"small" }, "Click 'Create PNG Link' first.");
row.appendChild(btn);
row.appendChild(open);
row.appendChild(out);
box.appendChild(row);

btn.addEventListener("click", ()=>{
  const url = canvas.toDataURL("image/png");
  open.href = url;
  open.style.pointerEvents = "auto";
  open.style.opacity = "1";
  out.textContent = "PNG data URL created. Click 'Open PNG'.";
  rt.println("data url length:", url.length);
});

rt.println("You can also attach the data URL to a download <a> tag.");
};
