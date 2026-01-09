// Exercise 150 — Chapter 15 canonical solution
window.exercise = function(rt) {
// Optional Real Fetch — works on HTTPS (GitHub Pages) if allowed
const box = rt.section("Real Fetch (Optional)");
const btn = rt.el("button", { class:"btn" }, "Try Fetch public JSON");
const out = rt.el("div", { class:"output" }, "Click to attempt…");
box.appendChild(btn);
box.appendChild(out);

btn.addEventListener("click", async ()=>{
  out.textContent = "Fetching…";
  try {
    // Public endpoint often available, but may be blocked by network/CORS in some environments.
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    out.textContent = JSON.stringify(data, null, 2);
    rt.println("✅ real fetch ok");
  } catch (err) {
    out.textContent = "❌ Fetch failed here (offline/CORS). Use mock examples in this chapter.";
    rt.println("fetch error:", err.message);
  }
});

rt.println("This exercise is optional; all others are offline-safe.");
};
