// Exercise 082 — Chapter 9 canonical solution
window.exercise = function(rt) {
// Timeout Wrapper — create a promise that rejects after N ms
function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const id = setTimeout(() => reject(new Error(`Timed out after ${ms}ms`)), ms);
    promise.then(
      v => { clearTimeout(id); resolve(v); },
      e => { clearTimeout(id); reject(e); }
    );
  });
}

// demo: a slow task (800ms) with a 500ms timeout
function slowTask() {
  return new Promise(res => setTimeout(() => res("slow result ✅"), 800));
}

(async () => {
  try {
    const result = await withTimeout(slowTask(), 500);
    rt.println("result:", result);
  } catch (err) {
    rt.println("error:", err.message);
  }
})();
};
