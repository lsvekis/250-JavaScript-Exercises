// Exercise 205 — Chapter 21 canonical solution
window.exercise = function(rt) {
// Sprite Animation — step through frames using background-position
const box = rt.section("Sprite Stepper");
box.appendChild(rt.el("p",{class:"small"}, "No image needed: we fake a sprite sheet with gradients."));

const sprite = rt.el("div", { style:{
  width:"140px", height:"70px", borderRadius:"12px",
  backgroundImage:"linear-gradient(90deg, rgba(98,168,255,.95) 0 25%, rgba(255,255,255,.95) 25% 50%, rgba(98,168,255,.55) 50% 75%, rgba(255,255,255,.55) 75% 100%)",
  backgroundSize:"400% 100%",
  backgroundPosition:"0% 0%",
  boxShadow:"0 10px 30px rgba(0,0,0,.35)"
}});
const btn = rt.el("button", { class:"btn" }, "Play");
const out = rt.el("div", { class:"small" }, "");
box.appendChild(rt.el("div",{class:"row"}, btn, out));
box.appendChild(sprite);

let playing = false;
let frame = 0;
let raf = 0;

function loop(){
  frame = (frame + 1) % 4;
  const pos = (frame * 100) / 3; // 0, 33.33, 66.66, 100
  sprite.style.backgroundPosition = `${pos}% 0%`;
  out.textContent = "frame " + (frame + 1) + "/4";
  raf = requestAnimationFrame(loop);
}

btn.addEventListener("click", ()=>{
  playing = !playing;
  btn.textContent = playing ? "Stop" : "Play";
  if (playing) loop();
  else cancelAnimationFrame(raf);
});
};
