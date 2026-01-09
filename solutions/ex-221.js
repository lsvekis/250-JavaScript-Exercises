// Exercise 221 — Chapter 23 canonical solution
window.exercise = function(rt) {
// Fetch Basics — load posts with loading + error states
const box = rt.section("Fetch Posts");
const btn = rt.el("button", { class:"btn" }, "Load Posts");
const out = rt.el("div", { class:"output" }, "Click Load Posts…");
box.appendChild(btn);
box.appendChild(out);

async function load(){
  out.textContent = "Loading…";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    out.textContent = data.map(p => `#${p.id} ${p.title}`).join("\n");
    rt.println("loaded", data.length, "posts");
  } catch (err) {
    out.textContent = "❌ Failed to load. Using fallback data.\n\n" +
      ["#1 hello world", "#2 offline fallback", "#3 try again later"].join("\n");
    rt.println("error:", err.message);
  }
}

btn.addEventListener("click", load);
};
