// Exercise 224 — Chapter 23 canonical solution
window.exercise = function(rt) {
// AbortController — cancel a fetch after a timeout
const box = rt.section("Abort Fetch");
const btn = rt.el("button", { class:"btn" }, "Start (timeout 500ms)");
const out = rt.el("div", { class:"output" }, "");
box.appendChild(btn);
box.appendChild(out);

async function fetchWithTimeout(url, ms){
  const ctrl = new AbortController();
  const id = setTimeout(()=> ctrl.abort(), ms);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) throw new Error("HTTP " + res.status);
    return await res.json();
  } finally {
    clearTimeout(id);
  }
}

btn.addEventListener("click", async ()=>{
  out.textContent = "Loading…";
  try {
    // a slow-ish endpoint (sometimes fast), but timeout demonstrates abort
    const data = await fetchWithTimeout("https://jsonplaceholder.typicode.com/comments?_limit=5", 500);
    out.textContent = data.map(c => c.email).join("\n");
    rt.println("completed without abort");
  } catch (err) {
    if (err.name === "AbortError") {
      out.textContent = "⏱️ Aborted (took too long). Try again.";
      rt.println("aborted");
    } else {
      out.textContent = "❌ Error: " + err.message;
    }
  }
});
};
