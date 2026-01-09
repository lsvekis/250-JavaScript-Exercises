// Exercise 088 — Chapter 9 canonical solution
window.exercise = function(rt) {
// Cancellable Sequence — cancel a multi-step async operation
const box = rt.section("Cancellable Steps");
const startBtn = rt.el("button", { class:"btn" }, "Start");
const cancelBtn = rt.el("button", { class:"btn" }, "Cancel");
const out = rt.el("div", { class:"output" }, "Idle");

box.appendChild(rt.el("div", { class:"row" }, startBtn, cancelBtn));
box.appendChild(out);

function step(name, ms, signal) {
  return new Promise((resolve, reject) => {
    const id = setTimeout(() => resolve(name), ms);
    signal.addEventListener("abort", () => {
      clearTimeout(id);
      reject(new Error("Cancelled ❌"));
    }, { once:true });
  });
}

let controller = null;

startBtn.addEventListener("click", async () => {
  controller = new AbortController();
  const signal = controller.signal;
  try {
    out.textContent = "Step 1…";
    await step("step1", 400, signal);
    out.textContent = "Step 2…";
    await step("step2", 400, signal);
    out.textContent = "Step 3…";
    await step("step3", 400, signal);
    out.textContent = "Done ✅";
  } catch (err) {
    out.textContent = err.message;
  }
});

cancelBtn.addEventListener("click", () => {
  if (controller) controller.abort();
});
};
