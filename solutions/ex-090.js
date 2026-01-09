// Exercise 090 — Chapter 9 canonical solution
window.exercise = function(rt) {
// Mini Scheduler — run tasks in order with delays (queue)
const box = rt.section("Task Queue");
const out = rt.el("div", { class:"output" }, "Ready");
box.appendChild(out);

const queue = [];
let running = false;

function enqueue(label, ms) {
  queue.push({ label, ms });
  render();
  pump();
}

function render() {
  out.textContent = `Queue: ${queue.map(q => q.label).join(", ") || "(empty)"}`;
}

async function pump() {
  if (running) return;
  running = true;
  while (queue.length) {
    const job = queue.shift();
    render();
    rt.println("running:", job.label);
    await new Promise(r => setTimeout(r, job.ms));
    rt.println("done:", job.label);
  }
  running = false;
  render();
}

enqueue("A", 300);
enqueue("B", 200);
enqueue("C", 400);

rt.println("Tasks A→B→C run sequentially.");
};
