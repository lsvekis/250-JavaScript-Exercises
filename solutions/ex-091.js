// Exercise 091 — Chapter 10 canonical solution
window.exercise = function(rt) {
// Todo List — add/complete/delete with localStorage persistence
const box = rt.section("Todo List");
const key = "js250_todos_v1";

const input = rt.input("New todo…");
const addBtn = rt.el("button", { class:"btn" }, "Add");
const ul = rt.el("ul", {});
const clearBtn = rt.el("button", { class:"btn" }, "Clear Completed");

box.appendChild(rt.el("div", { class:"row" }, input, addBtn, clearBtn));
box.appendChild(ul);

let todos = JSON.parse(localStorage.getItem(key) || "[]");

function save(){ localStorage.setItem(key, JSON.stringify(todos)); }

function render(){
  ul.innerHTML = "";
  todos.forEach((t, i) => {
    const cb = rt.el("input", { type:"checkbox" });
    cb.checked = t.done;
    cb.addEventListener("change", ()=>{ t.done = cb.checked; save(); render(); });

    const label = rt.el("span", { style:{marginLeft:"8px", textDecoration: t.done?"line-through":"none"} }, t.text);

    const del = rt.el("button", { class:"btn", style:{padding:"4px 8px", marginLeft:"10px"} }, "✕");
    del.addEventListener("click", ()=>{ todos.splice(i,1); save(); render(); });

    const li = rt.el("li", {});
    li.appendChild(cb); li.appendChild(label); li.appendChild(del);
    ul.appendChild(li);
  });
}

addBtn.addEventListener("click", ()=>{
  const text = input.value.trim();
  if(!text) return;
  todos.push({ text, done:false });
  input.value = "";
  save(); render();
});

clearBtn.addEventListener("click", ()=>{
  todos = todos.filter(t => !t.done);
  save(); render();
});

render();
rt.println("Todos persist in localStorage. Reload to confirm.");
};
