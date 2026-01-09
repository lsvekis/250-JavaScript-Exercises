// Exercise 246 — Chapter 25 canonical solution
window.exercise = function(rt) {
// Capstone: Drag & Drop Kanban — move cards between columns
const box = rt.section("Mini Kanban");
const board = rt.el("div", { style:{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"10px"} });
box.appendChild(board);

const cols = [
  { id:"todo", title:"To Do" },
  { id:"doing", title:"Doing" },
  { id:"done", title:"Done" },
];

function colEl(c){
  const wrap = rt.el("div", { class:"card", style:{minHeight:"220px", padding:"10px"} });
  wrap.dataset.col = c.id;
  wrap.appendChild(rt.el("h3", {}, c.title));
  wrap.appendChild(rt.el("div",{class:"small"}, "Drag cards here"));
  return wrap;
}

const colMap = new Map();
cols.forEach(c=>{
  const el = colEl(c);
  colMap.set(c.id, el);
  board.appendChild(el);
});

function makeCard(text){
  return rt.el("div", { class:"card", draggable:"true", style:{padding:"10px", marginTop:"10px", background:"rgba(255,255,255,.05)"} }, text);
}

["Write outline","Build UI","Ship demo"].forEach(t=> colMap.get("todo").appendChild(makeCard(t)));

let dragging = null;

board.addEventListener("dragstart", (e)=>{
  const card = e.target.closest('[draggable="true"]');
  if (!card) return;
  dragging = card;
  e.dataTransfer.effectAllowed = "move";
  card.style.opacity = "0.6";
});

board.addEventListener("dragend", (e)=>{
  const card = e.target.closest('[draggable="true"]');
  if (card) card.style.opacity = "1";
  dragging = null;
});

board.addEventListener("dragover", (e)=>{
  const col = e.target.closest('[data-col]');
  if (!col || !dragging) return;
  e.preventDefault();
});

board.addEventListener("drop", (e)=>{
  const col = e.target.closest('[data-col]');
  if (!col || !dragging) return;
  e.preventDefault();
  col.appendChild(dragging);
  rt.println("moved card to", col.dataset.col);
});
};
