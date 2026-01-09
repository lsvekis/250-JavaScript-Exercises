// Exercise 161 — Chapter 17 canonical solution
window.exercise = function(rt) {
// localStorage JSON Store — save/load typed objects
const box = rt.section("JSON Store");
const key = "js250_store_v1";

const input = rt.input("Enter JSON (e.g. {"name":"Ava"})");
const saveBtn = rt.el("button", { class:"btn" }, "Save");
const loadBtn = rt.el("button", { class:"btn" }, "Load");
const clearBtn = rt.el("button", { class:"btn" }, "Clear");
const out = rt.el("div", { class:"output" }, "");

box.appendChild(input);
box.appendChild(rt.el("div",{class:"row"}, saveBtn, loadBtn, clearBtn));
box.appendChild(out);

function safeParse(text){
  try { return { ok:true, value: JSON.parse(text) }; }
  catch(e){ return { ok:false, error:e.message }; }
}

saveBtn.addEventListener("click", ()=>{
  const p = safeParse(input.value.trim());
  if (!p.ok) { out.textContent = "❌ Invalid JSON: " + p.error; return; }
  localStorage.setItem(key, JSON.stringify(p.value));
  out.textContent = "✅ Saved.";
});

loadBtn.addEventListener("click", ()=>{
  const raw = localStorage.getItem(key);
  out.textContent = raw ? ("Loaded:\n" + raw) : "(nothing saved yet)";
});

clearBtn.addEventListener("click", ()=>{
  localStorage.removeItem(key);
  out.textContent = "Cleared.";
});
};
