// Exercise 077 — Chapter 8 canonical solution
window.exercise = function(rt) {
// Async/Await Flow — step-by-step simulated tasks
const box = rt.section("Async Steps");
const out = rt.el("div", { class:"output" }, "");
box.appendChild(out);

function wait(ms){ return new Promise(r => setTimeout(r, ms)); }

async function run(){
  out.textContent = "Step 1: start";
  await wait(400);
  out.textContent = "Step 2: validate";
  await wait(400);
  out.textContent = "Step 3: save";
  await wait(400);
  out.textContent = "Step 4: done ✅";
  rt.println("All steps completed.");
}
run();
};
