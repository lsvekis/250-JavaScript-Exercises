// Exercise 222 — Chapter 23 canonical solution
window.exercise = function(rt) {
// Query Params — filter posts by userId
const box = rt.section("Filter by userId");
const input = rt.el("input", { class:"input", type:"number", min:"1", max:"10", value:"1" });
const btn = rt.el("button", { class:"btn" }, "Load");
const out = rt.el("div", { class:"output" }, "");
box.appendChild(rt.el("div",{class:"row"}, rt.el("div",{class:"small"},"userId"), input, btn));
box.appendChild(out);

async function load(userId){
  out.textContent = "Loading…";
  try {
    const url = new URL("https://jsonplaceholder.typicode.com/posts");
    url.searchParams.set("userId", String(userId));
    url.searchParams.set("_limit", "5");
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    out.textContent = data.map(p => `u${p.userId} • ${p.title}`).join("\n");
  } catch (err) {
    out.textContent = "❌ Request failed: " + err.message;
  }
}

btn.addEventListener("click", ()=> load(input.value || 1));
load(1);
};
