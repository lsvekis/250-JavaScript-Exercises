// Exercise 085 — Chapter 9 canonical solution
window.exercise = function(rt) {
// Progress Updates — async loop that reports progress to UI
const box = rt.section("Progress Demo");
const bar = rt.el("div", { class:"output" }, "0%");
box.appendChild(bar);

function wait(ms){ return new Promise(r => setTimeout(r, ms)); }

async function run(){
  for (let p = 0; p <= 100; p += 10) {
    bar.textContent = p + "%";
    rt.println("progress:", p);
    await wait(150);
  }
  bar.textContent = "Done ✅";
}
run();
};
