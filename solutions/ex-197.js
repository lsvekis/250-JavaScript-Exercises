// Exercise 197 — Chapter 20 canonical solution
window.exercise = function(rt) {
// Fullscreen API — toggle fullscreen for a panel
const box = rt.section("Fullscreen Toggle");
const panel = rt.el("div", { class:"output", style:{height:"160px"} }, "Toggle fullscreen for this panel.");
const btn = rt.el("button", { class:"btn" }, "Toggle Fullscreen");
box.appendChild(btn);
box.appendChild(panel);

async function toggle(){
  try {
    if (!document.fullscreenElement) {
      await panel.requestFullscreen();
      rt.println("entered fullscreen");
    } else {
      await document.exitFullscreen();
      rt.println("exited fullscreen");
    }
  } catch (err) {
    rt.println("fullscreen error:", err.message);
  }
}

btn.addEventListener("click", toggle);
};
