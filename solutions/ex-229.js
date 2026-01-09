// Exercise 229 — Chapter 23 canonical solution
window.exercise = function(rt) {
// Pagination — load pages of posts (_page + _limit)
const box = rt.section("Pagination");
const prev = rt.el("button", { class:"btn" }, "Prev");
const next = rt.el("button", { class:"btn" }, "Next");
const label = rt.el("div", { class:"small" }, "");
const out = rt.el("div", { class:"output" }, "");
box.appendChild(rt.el("div",{class:"row"}, prev, next, label));
box.appendChild(out);

let page = 1;
const limit = 5;

async function load(){
  label.textContent = `page ${page}`;
  out.textContent = "Loading…";
  try {
    const url = new URL("https://jsonplaceholder.typicode.com/posts");
    url.searchParams.set("_page", String(page));
    url.searchParams.set("_limit", String(limit));
    const res = await fetch(url.toString());
    const data = await res.json();
    out.textContent = data.map(p => `#${p.id} ${p.title}`).join("\n");
  } catch (err) {
    out.textContent = "❌ Error: " + err.message;
  }
}

prev.onclick = ()=>{ page = Math.max(1, page - 1); load(); };
next.onclick = ()=>{ page = page + 1; load(); };

load();
};
