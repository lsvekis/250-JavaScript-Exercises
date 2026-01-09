// Exercise 238 — Chapter 24 canonical solution
window.exercise = function(rt) {
// Color Contrast Checker — compute contrast ratio (WCAG-ish)
const box = rt.section("Contrast Checker");
const fg = rt.el("input", { class:"input", value:"#ffffff" });
const bg = rt.el("input", { class:"input", value:"#0f172a" });
const btn = rt.el("button", { class:"btn" }, "Check");
const swatch = rt.el("div", { class:"card", style:{marginTop:"10px", padding:"14px"} }, "Preview text");
const out = rt.el("div", { class:"output" }, "");

box.appendChild(rt.el("div",{class:"row"},
  rt.el("div",{class:"small"},"Text"), fg,
  rt.el("div",{class:"small"},"BG"), bg,
  btn
));
box.appendChild(swatch);
box.appendChild(out);

function hexToRgb(h){
  const x = h.replace("#","").trim();
  if (x.length === 3) {
    const r = parseInt(x[0]+x[0], 16);
    const g = parseInt(x[1]+x[1], 16);
    const b = parseInt(x[2]+x[2], 16);
    return { r,g,b };
  }
  if (x.length === 6) {
    const r = parseInt(x.slice(0,2), 16);
    const g = parseInt(x.slice(2,4), 16);
    const b = parseInt(x.slice(4,6), 16);
    return { r,g,b };
  }
  return null;
}

function srgbToLin(c){
  c /= 255;
  return (c <= 0.04045) ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4);
}

function luminance(rgb){
  const r = srgbToLin(rgb.r);
  const g = srgbToLin(rgb.g);
  const b = srgbToLin(rgb.b);
  return 0.2126*r + 0.7152*g + 0.0722*b;
}

function contrast(a, b){
  const L1 = luminance(a);
  const L2 = luminance(b);
  const hi = Math.max(L1, L2);
  const lo = Math.min(L1, L2);
  return (hi + 0.05) / (lo + 0.05);
}

btn.addEventListener("click", ()=>{
  const a = hexToRgb(fg.value);
  const b = hexToRgb(bg.value);
  if (!a || !b) { out.textContent = "❌ Invalid hex. Use #RGB or #RRGGBB."; return; }

  const ratio = contrast(a,b);
  swatch.style.color = fg.value;
  swatch.style.background = bg.value;

  const aaNormal = ratio >= 4.5;
  const aaLarge = ratio >= 3;

  out.textContent =
    `Contrast ratio: ${ratio.toFixed(2)}\n` +
    `AA (normal text) >= 4.5: ${aaNormal ? "PASS" : "FAIL"}\n` +
    `AA (large text) >= 3.0: ${aaLarge ? "PASS" : "FAIL"}`;
});
btn.click();
};
