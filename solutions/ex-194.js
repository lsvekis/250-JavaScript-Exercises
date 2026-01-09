// Exercise 194 — Chapter 20 canonical solution
window.exercise = function(rt) {
// Web Audio — generate a short beep (no files needed)
const box = rt.section("Web Audio Beep");
const btn = rt.el("button", { class:"btn" }, "Play Beep");
const out = rt.el("div", { class:"small" }, "Some browsers require a user click before audio plays.");
box.appendChild(btn);
box.appendChild(out);

let ctx = null;

btn.addEventListener("click", async ()=>{
  try {
    ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
    await ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.value = 660;

    gain.gain.value = 0.0001;
    gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2);

    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.22);

    rt.println("beep played");
  } catch (err) {
    rt.println("audio error:", err.message);
  }
});
};
