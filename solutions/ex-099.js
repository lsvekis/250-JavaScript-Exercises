// Exercise 099 — Chapter 10 canonical solution
window.exercise = function(rt) {
// Worker-like Offload — chunked computation to avoid blocking UI
const box = rt.section("Chunked Compute");
const btn = rt.el("button", { class:"btn" }, "Start Heavy Compute");
const out = rt.el("div", { class:"output" }, "Idle");
box.appendChild(btn);
box.appendChild(out);

function waitFrame(){
  return new Promise(r => requestAnimationFrame(()=>r()));
}

btn.addEventListener("click", async ()=>{
  out.textContent = "Working…";
  let sum = 0;
  const N = 2_000_00; // 200k
  const chunk = 20_000;

  for (let i = 1; i <= N; i++) {
    sum += i;
    if (i % chunk === 0) {
      out.textContent = `Progress: ${Math.round((i/N)*100)}%`;
      await waitFrame(); // yield to UI
    }
  }
  out.textContent = `Done ✅ sum(1..${N}) = ${sum.toLocaleString()}`;
});
rt.println("Chunking yields to the UI so the page stays responsive.");
};
