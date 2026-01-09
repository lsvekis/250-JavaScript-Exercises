// Exercise 247 — Chapter 25 canonical solution
window.exercise = function(rt) {
// Capstone: Image Gallery — lazy load + modal viewer
const box = rt.section("Gallery + Modal");
const grid = rt.el("div", { style:{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))", gap:"10px"} });
box.appendChild(grid);

// Use inline SVG data URLs so the gallery works offline
function svgThumb(label, hue){
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="240" height="160">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="hsl(${hue},80%,60%)"/>
        <stop offset="1" stop-color="hsl(${(hue+40)%360},80%,35%)"/>
      </linearGradient>
    </defs>
    <rect width="240" height="160" fill="url(#g)"/>
    <text x="120" y="88" text-anchor="middle" font-family="system-ui" font-size="26" fill="rgba(255,255,255,.9)">${label}</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg.trim());
}

const imgs = Array.from({length: 12}, (_,i)=> ({ src: svgThumb("IMG "+(i+1), i*28), alt:"Image "+(i+1) }));

// modal
const overlay = rt.el("div", { style:{
  position:"fixed", inset:"0", display:"none", alignItems:"center", justifyContent:"center",
  background:"rgba(0,0,0,.55)", padding:"20px", zIndex:"50"
}});
const modal = rt.el("div", { class:"card", style:{maxWidth:"820px", width:"100%", padding:"12px"} });
const big = document.createElement("img");
big.style.width = "100%";
big.style.borderRadius = "10px";
const close = rt.el("button", { class:"btn" }, "Close");
modal.appendChild(rt.el("div",{class:"row"}, close));
modal.appendChild(big);
overlay.appendChild(modal);
document.body.appendChild(overlay);

function openModal(src, alt){
  big.src = src;
  big.alt = alt;
  overlay.style.display = "flex";
  close.focus();
}
function closeModal(){
  overlay.style.display = "none";
  big.src = "";
}

close.onclick = closeModal;
overlay.addEventListener("click", (e)=>{ if (e.target === overlay) closeModal(); });
window.addEventListener("keydown", (e)=>{ if (e.key === "Escape" && overlay.style.display === "flex") closeModal(); });

// lazy loading via IntersectionObserver
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if (!en.isIntersecting) return;
    const img = en.target;
    img.src = img.dataset.src;
    io.unobserve(img);
  });
}, { rootMargin:"120px" });

imgs.forEach((it)=>{
  const img = document.createElement("img");
  img.alt = it.alt;
  img.dataset.src = it.src;
  img.style.width = "100%";
  img.style.borderRadius = "10px";
  img.style.cursor = "pointer";
  img.style.background = "rgba(255,255,255,.06)";
  img.addEventListener("click", ()=> openModal(it.src, it.alt));
  grid.appendChild(img);
  io.observe(img);
});

rt.println("Scroll: thumbs lazy-load. Click: open modal. Press Esc: close.");
};
