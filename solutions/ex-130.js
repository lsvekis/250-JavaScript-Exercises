// Exercise 130 — Chapter 13 canonical solution
window.exercise = function(rt) {
// Performance Timing — measure operations with console.time
const box = rt.section("Timing Demo");
const btn = rt.el("button", { class:"btn" }, "Run Bench");
const out = rt.el("div", { class:"output" }, "Idle");
box.appendChild(btn);
box.appendChild(out);

function bench(label, fn) {
  console.time(label);
  const result = fn();
  console.timeEnd(label);
  return result;
}

btn.addEventListener("click", () => {
  out.textContent = "Running… check DevTools console for timings.";
  const N = 100_000;

  const a = bench("for-loop sum", () => {
    let s = 0;
    for (let i = 1; i <= N; i++) s += i;
    return s;
  });

  const b = bench("array reduce sum", () => {
    const arr = Array.from({ length: N }, (_, i) => i + 1);
    return arr.reduce((x, y) => x + y, 0);
  });

  out.textContent = `for-loop=${a.toLocaleString()}\nreduce=${b.toLocaleString()}\n(See console for time)`;
});
rt.println("Open DevTools console to see timing output.");
};
