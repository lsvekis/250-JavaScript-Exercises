// Exercise 239 — Chapter 24 canonical solution
window.exercise = function(rt) {
// Form Persistence — save draft to localStorage and restore on load
const box = rt.section("Draft Save (localStorage)");
const key = "js250_draft_v1";

const ta = rt.el("textarea", { class:"input", rows:"6", placeholder:"Type notes… (auto-saves)" });
const row = rt.el("div", { class:"row" });
const clear = rt.el("button", { class:"btn" }, "Clear Draft");
const out = rt.el("div", { class:"small" }, "");
row.appendChild(clear);
row.appendChild(out);

box.appendChild(ta);
box.appendChild(row);

function save(){
  localStorage.setItem(key, ta.value);
  out.textContent = "Saved at " + new Date().toLocaleTimeString();
}
function load(){
  const v = localStorage.getItem(key);
  if (v != null) ta.value = v;
  out.textContent = v ? "Draft restored." : "No saved draft yet.";
}

let id = 0;
ta.addEventListener("input", ()=>{
  clearTimeout(id);
  id = setTimeout(save, 300);
});

clear.addEventListener("click", ()=>{
  localStorage.removeItem(key);
  ta.value = "";
  out.textContent = "Draft cleared.";
});

load();
};
