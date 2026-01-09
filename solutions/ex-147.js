// Exercise 147 — Chapter 15 canonical solution
window.exercise = function(rt) {
// Retry with Backoff — retry a mock API call with delay growth
function mockFlakyApi() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      Math.random() > 0.65 ? resolve("✅ ok") : reject(new Error("❌ temporary error"));
    }, 350);
  });
}

async function retryBackoff(fn, maxTries) {
  let delay = 200;
  for (let i = 1; i <= maxTries; i++) {
    try {
      rt.println(`try ${i}/${maxTries}`);
      return await fn();
    } catch (err) {
      rt.println(" ", err.message);
      if (i === maxTries) throw err;
      await new Promise(r => setTimeout(r, delay));
      delay *= 2;
    }
  }
}

(async ()=>{
  try {
    const msg = await retryBackoff(mockFlakyApi, 5);
    rt.println("final:", msg);
  } catch (err) {
    rt.println("failed:", err.message);
  }
})();
};
