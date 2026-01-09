// Exercise 083 — Chapter 9 canonical solution
window.exercise = function(rt) {
// Retry Logic — retry a flaky async task N times
function flakyTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ok = Math.random() > 0.6;
      ok ? resolve("✅ succeeded") : reject(new Error("❌ failed"));
    }, 350);
  });
}

async function retry(fn, tries, delayMs) {
  let lastErr = null;
  for (let attempt = 1; attempt <= tries; attempt++) {
    try {
      rt.println(`attempt ${attempt}/${tries}…`);
      return await fn();
    } catch (err) {
      lastErr = err;
      rt.println("  ", err.message);
      if (attempt < tries) await new Promise(r => setTimeout(r, delayMs));
    }
  }
  throw lastErr;
}

(async () => {
  try {
    const msg = await retry(flakyTask, 5, 250);
    rt.println("final:", msg);
  } catch (err) {
    rt.println("gave up:", err.message);
  }
})();
};
