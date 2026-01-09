// Exercise 095 — Chapter 10 canonical solution
window.exercise = function(rt) {
// Sortable Table — click headers to sort rows
const box = rt.section("Sortable Table");
const rows = [
  { name: "Ava", score: 88 },
  { name: "Ben", score: 72 },
  { name: "Cam", score: 95 },
  { name: "Dan", score: 88 }
];

let sortKey = "name";
let dir = 1;

const table = document.createElement("table");
table.className = "output";
table.style.width = "100%";
table.style.borderCollapse = "collapse";

function cell(text, isHeader=false){
  const el = document.createElement(isHeader ? "th" : "td");
  el.textContent = text;
  el.style.padding = "6px";
  el.style.borderBottom = "1px solid rgba(255,255,255,.12)";
  el.style.textAlign = "left";
  return el;
}

function render(){
  table.innerHTML = "";
  const thead = document.createElement("thead");
  const trh = document.createElement("tr");
  const hName = cell("Name" + (sortKey==="name" ? (dir===1?" ▲":" ▼") : ""), true);
  const hScore = cell("Score" + (sortKey==="score" ? (dir===1?" ▲":" ▼") : ""), true);

  hName.style.cursor = "pointer";
  hScore.style.cursor = "pointer";
  hName.onclick = ()=>{ sortKey="name"; dir *= -1; render(); };
  hScore.onclick = ()=>{ sortKey="score"; dir *= -1; render(); };

  trh.appendChild(hName); trh.appendChild(hScore);
  thead.appendChild(trh);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  const sorted = [...rows].sort((a,b)=>{
    const av=a[sortKey], bv=b[sortKey];
    if (typeof av === "number") return (av-bv)*dir;
    return av.localeCompare(bv)*dir;
  });

  sorted.forEach(r=>{
    const tr = document.createElement("tr");
    tr.appendChild(cell(r.name));
    tr.appendChild(cell(String(r.score)));
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
}

box.appendChild(table);
render();
};
