// Exercise 100 — Chapter 10 canonical solution
window.exercise = function(rt) {
// Mini Notes App — tabs + localStorage + export JSON
const box = rt.section("Notes App");
const key = "js250_notes_v1";

let notes = JSON.parse(localStorage.getItem(key) || "[]");
let active = 0;

const nav = rt.el("div", { class:"row" });
const editor = document.createElement("textarea");
editor.className = "input";
editor.rows = 6;

const exportBtn = rt.el("button", { class:"btn" }, "Export JSON");
const addBtn = rt.el("button", { class:"btn" }, "New Note");
const delBtn = rt.el("button", { class:"btn" }, "Delete Note");
const status = rt.el("div", { class:"output" }, "");

box.appendChild(rt.el("div", { class:"row" }, addBtn, delBtn, exportBtn));
box.appendChild(nav);
box.appendChild(editor);
box.appendChild(status);

function save(){ localStorage.setItem(key, JSON.stringify(notes)); }

function ensure(){
  if (notes.length === 0) notes.push({ title:"Note 1", body:"Write here…" });
  if (active >= notes.length) active = notes.length - 1;
}

function render(){
  ensure();
  nav.innerHTML = "";
  notes.forEach((n, i) => {
    const b = rt.el("button", { class:"btn" }, (i===active?"✓ ":"") + n.title);
    b.addEventListener("click", ()=>{ active = i; render(); });
    nav.appendChild(b);
  });
  editor.value = notes[active].body;
  status.textContent = `Notes: ${notes.length} | Active: ${notes[active].title}`;
  save();
}

editor.addEventListener("input", ()=>{
  notes[active].body = editor.value;
  save();
});

addBtn.addEventListener("click", ()=>{
  notes.push({ title:`Note ${notes.length+1}`, body:"" });
  active = notes.length - 1;
  render();
});

delBtn.addEventListener("click", ()=>{
  if (notes.length <= 1) return;
  notes.splice(active, 1);
  active = 0;
  render();
});

exportBtn.addEventListener("click", ()=>{
  const json = JSON.stringify(notes, null, 2);
  rt.println(json);
  status.textContent = "Exported JSON to output panel.";
});

render();
};
