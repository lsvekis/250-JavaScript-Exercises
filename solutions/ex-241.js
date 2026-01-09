// Exercise 241 — Chapter 25 canonical solution
window.exercise = function(rt) {
// Capstone: Todo + Filters + Persistence (localStorage)
const box = rt.section("Todo Capstone");
const key = "js250_todos_v1";

const input = rt.el("input", { class:"input", placeholder:"Add a todo and press Enter…" });
const row = rt.el("div", { class:"row" });
const allBtn = rt.el("button", { class:"btn" }, "All");
const openBtn = rt.el("button", { class:"btn" }, "Open");
const doneBtn = rt.el("button", { class:"btn" }, "Done");
const clearDone = rt.el("button", { class:"btn" }, "Clear Done");
row.appendChild(allBtn); row.appendChild(openBtn); row.appendChild(doneBtn); row.appendChild(clearDone);

const list = rt.el("div", { style:{marginTop:"10px"} });
const meta = rt.el("div", { class:"small", style:{marginTop:"8px"} }, "");

box.appendChild(input);
box.appendChild(row);
box.appendChild(list);
box.appendChild(meta);

let filter = "all"; // all | open | done
let todos = [];

function save(){ localStorage.setItem(key, JSON.stringify(todos)); }
function load(){
  try { todos = JSON.parse(localStorage.getItem(key) || "[]"); }
  catch { todos = []; }
}
function counts(){
  const done = todos.filter(t=>t.done).length;
  return { total: todos.length, done, open: todos.length - done };
}

function render(){
  list.innerHTML = "";
  const view = todos.filter(t => filter==="all" ? true : filter==="open" ? !t.done : t.done);

  view.forEach((t, idx)=>{
    const item = rt.el("div", { class:"card", style:{display:"flex", gap:"10px", alignItems:"center", padding:"10px"} });
    const cb = rt.el("input", { type:"checkbox" });
    cb.checked = t.done;

    const text = rt.el("div", { style:{flex:"1"} }, t.text);
    if (t.done) text.style.textDecoration = "line-through";

    const del = rt.el("button", { class:"btn" }, "Delete");
    del.style.padding = "6px 10px";

    cb.addEventListener("change", ()=>{
      t.done = cb.checked;
      save(); render();
    });
    del.addEventListener("click", ()=>{
      // delete by identity (find original index)
      const i = todos.indexOf(t);
      if (i >= 0) todos.splice(i,1);
      save(); render();
    });

    item.appendChild(cb);
    item.appendChild(text);
    item.appendChild(del);
    list.appendChild(item);
  });

  const c = counts();
  meta.textContent = `filter=${filter} | total=${c.total} | open=${c.open} | done=${c.done}`;
}

function setFilter(f){
  filter = f;
  render();
}

allBtn.onclick = ()=> setFilter("all");
openBtn.onclick = ()=> setFilter("open");
doneBtn.onclick = ()=> setFilter("done");
clearDone.onclick = ()=>{
  todos = todos.filter(t=>!t.done);
  save(); render();
};

input.addEventListener("keydown", (e)=>{
  if (e.key !== "Enter") return;
  const v = input.value.trim();
  if (!v) return;
  todos.unshift({ text: v, done: false, created: Date.now() });
  input.value = "";
  save(); render();
});

load();
render();
rt.println("Todo app: add, toggle, delete, filter, persist (localStorage).");
};
