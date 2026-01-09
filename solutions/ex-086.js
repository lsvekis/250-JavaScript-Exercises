// Exercise 086 — Chapter 9 canonical solution
window.exercise = function(rt) {
// Async Iterator — consume values over time with for await...of
async function* ticker(count, intervalMs) {
  for (let i = 1; i <= count; i++) {
    await new Promise(r => setTimeout(r, intervalMs));
    yield { tick: i, at: new Date().toLocaleTimeString() };
  }
}

(async () => {
  rt.println("starting ticker…");
  for await (const item of ticker(5, 300)) {
    rt.println("tick:", item.tick, "at", item.at);
  }
  rt.println("ticker done ✅");
})();
};
