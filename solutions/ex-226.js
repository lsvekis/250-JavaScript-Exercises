// Exercise 226 — Chapter 23 canonical solution
window.exercise = function(rt) {
// Promise.all — fetch users + posts, then join data
const box = rt.section("Join Data (Promise.all)");
const btn = rt.el("button", { class:"btn" }, "Load & Join");
const out = rt.el("div", { class:"output" }, "");
box.appendChild(btn);
box.appendChild(out);

async function json(url){
  const res = await fetch(url);
  if (!res.ok) throw new Error("HTTP " + res.status);
  return res.json();
}

btn.addEventListener("click", async ()=>{
  out.textContent = "Loading…";
  try {
    const [users, posts] = await Promise.all([
      json("https://jsonplaceholder.typicode.com/users"),
      json("https://jsonplaceholder.typicode.com/posts?_limit=8")
    ]);

    const byId = new Map(users.map(u => [u.id, u.name]));
    const lines = posts.map(p => `${byId.get(p.userId) || "Unknown"} — ${p.title}`);
    out.textContent = lines.join("\n");
  } catch (err) {
    out.textContent = "❌ Failed: " + err.message;
  }
});
};
