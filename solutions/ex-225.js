// Exercise 225 — Chapter 23 canonical solution
window.exercise = function(rt) {
// Retry with Backoff — try a request multiple times before failing
const box = rt.section("Retry + Backoff");
const btn = rt.el("button", { class:"btn" }, "Run (simulate failure first)");
const out = rt.el("div", { class:"output" }, "");
box.appendChild(btn);
box.appendChild(out);

const sleep = (ms)=> new Promise(r=>setTimeout(r, ms));

async function fetchJson(url){
  const res = await fetch(url);
  if (!res.ok) throw new Error("HTTP " + res.status);
  return res.json();
}

async function retry(fn, tries=3, baseDelay=250){
  let lastErr;
  for (let i=0;i<tries;i++){
    try { return await fn(i); }
    catch (err){
      lastErr = err;
      const delay = baseDelay * Math.pow(2, i);
      rt.println(`try ${i+1} failed: ${err.message} (wait ${delay}ms)`);
      await sleep(delay);
    }
  }
  throw lastErr;
}

btn.addEventListener("click", async ()=>{
  out.textContent = "Running… see console log panel.";
  let first = true;
  try {
    const data = await retry(async ()=>{
      // fail first attempt on purpose
      if (first) { first = false; return fetchJson("https://jsonplaceholder.typicode.com/bad-endpoint"); }
      return fetchJson("https://jsonplaceholder.typicode.com/todos/1");
    }, 3, 200);

    out.textContent = "✅ Success:\n" + JSON.stringify(data, null, 2);
  } catch (err) {
    out.textContent = "❌ All retries failed: " + err.message;
  }
});
};
