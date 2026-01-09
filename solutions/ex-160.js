// Exercise 160 — Chapter 16 canonical solution
window.exercise = function(rt) {
// Undo/Redo — history stack for a textarea
const box = rt.section("Undo / Redo");
const ta = document.createElement("textarea");
ta.className = "input";
ta.rows = 5;
ta.placeholder = "Type here…";

const undoBtn = rt.el("button", { class:"btn" }, "Undo");
const redoBtn = rt.el("button", { class:"btn" }, "Redo");
const out = rt.el("div", { class:"small" }, "");

box.appendChild(rt.el("div",{class:"row"}, undoBtn, redoBtn));
box.appendChild(ta);
box.appendChild(out);

let history = [""];
let index = 0;

function push(value){
  // truncate redo branch
  history = history.slice(0, index + 1);
  history.push(value);
  index++;
  update();
}

function update(){
  undoBtn.disabled = index === 0;
  redoBtn.disabled = index === history.length - 1;
  out.textContent = `history: ${index}/${history.length - 1}`;
}

let t = null;
ta.addEventListener("input", ()=>{
  clearTimeout(t);
  // group typing into snapshots every 300ms
  t = setTimeout(()=> push(ta.value), 300);
});

undoBtn.addEventListener("click", ()=>{
  if (index === 0) return;
  index--;
  ta.value = history[index];
  update();
});

redoBtn.addEventListener("click", ()=>{
  if (index >= history.length - 1) return;
  index++;
  ta.value = history[index];
  update();
});

update();
rt.println("Type, then undo/redo using buttons (custom history).");
};
