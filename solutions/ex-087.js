// Exercise 087 — Chapter 9 canonical solution
window.exercise = function(rt) {
// Concurrency Limit — run tasks with a max parallel limit
function makeTask(id, ms) {
  return () => new Promise(res => setTimeout(() => res(`task ${id} ✅ (${ms}ms)`), ms));
}

async function runWithLimit(tasks, limit) {
  const results = [];
  let i = 0;
  const running = new Set();

  async function launch() {
    if (i >= tasks.length) return;
    const index = i++;
    const p = tasks[index]().then(r => {
      results[index] = r;
      running.delete(p);
    });
    running.add(p);
    if (running.size >= limit) await Promise.race(running);
    return launch();
  }

  await launch();
  await Promise.all(running);
  return results;
}

(async () => {
  const tasks = [
    makeTask(1, 700),
    makeTask(2, 250),
    makeTask(3, 500),
    makeTask(4, 300),
    makeTask(5, 450),
  ];
  rt.println("running 5 tasks with limit=2…");
  const results = await runWithLimit(tasks, 2);
  results.forEach(r => rt.println(r));
})();
};
