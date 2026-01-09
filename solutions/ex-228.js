// Exercise 228 — Chapter 23 canonical solution
window.exercise = function(rt) {
// Cache Results — store fetch response in sessionStorage
const box = rt.section("Session Cache");
const btn = rt.el("button", { class:"btn" }, "Load Todos");
const clear = rt.el("button", { class:"btn" }, "Clear Cache");
const out = rt.el("div", { class:"output" }, "");
box.appendChild(rt.el("div",{class:"row"}, btn, clear));
box.appendChild(out);

const key = "js250_todos_cache_v1";

async function load(){
  const cached = sessionStorage.getItem(key);
  if (cached) {
    out.textContent = "✅ From cache:\n" + cached;
    return;
  }

  out.textContent = "Loading from network…";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=8");
    const data = await res.json();
    const text = data.map(t => `${t.completed ? "✓" : "•"} ${t.title}`).join("\n");
    sessionStorage.setItem(key, text);
    out.textContent = "✅ From network:\n" + text;
  } catch (err) {
    out.textContent = "❌ Failed: " + err.message;
  }
}

btn.addEventListener("click", load);
clear.addEventListener("click", ()=>{
  sessionStorage.removeItem(key);
  out.textContent = "Cache cleared.";
});
};
