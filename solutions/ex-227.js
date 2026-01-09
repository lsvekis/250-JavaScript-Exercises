// Exercise 227 — Chapter 23 canonical solution
window.exercise = function(rt) {
// Debounced Search — search posts as you type (debounce)
const box = rt.section("Debounced Search");
const q = rt.input("Type to search titles (min 2 chars)");
const out = rt.el("div", { class:"output" }, "");
box.appendChild(q);
box.appendChild(out);

function debounce(fn, ms){
  let id = 0;
  return (...args)=>{
    clearTimeout(id);
    id = setTimeout(()=> fn(...args), ms);
  };
}

async function search(term){
  if (term.length < 2) { out.textContent = "Type at least 2 characters…"; return; }
  out.textContent = "Searching…";
  try {
    // JSONPlaceholder doesn't have full search, so we fetch small sample then filter client-side
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=50");
    const posts = await res.json();
    const hit = posts.filter(p => p.title.includes(term.toLowerCase())).slice(0, 8);
    out.textContent = hit.length ? hit.map(p => p.title).join("\n") : "(no matches)";
  } catch (err) {
    out.textContent = "❌ Search failed: " + err.message;
  }
}

const run = debounce((v)=> search(v), 350);

q.addEventListener("input", ()=> run(q.value.trim().toLowerCase()));
out.textContent = "Type at least 2 characters…";
};
