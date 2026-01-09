// Exercise 079 — Chapter 8 canonical solution
window.exercise = function(rt) {
// Promise.all — run tasks in parallel (mock)
const box = rt.section("Parallel Tasks");
const out = rt.el("div", { class:"output" }, "Running…");
box.appendChild(out);

function task(name, ms){
  return new Promise(res => setTimeout(()=> res(name + " ✅"), ms));
}

Promise.all([
  task("Images", 700),
  task("Profile", 400),
  task("Settings", 550)
]).then(results => {
  out.textContent = results.join("\n");
  rt.println("all done:", JSON.stringify(results));
});
};
