// Exercise 249 — Chapter 25 canonical solution
window.exercise = function(rt) {
// Capstone: Data Dashboard — filter + sort + summary stats
const box = rt.section("Data Dashboard");
const controls = rt.el("div", { class:"row" });
const q = rt.el("input", { class:"input", placeholder:"Search name…" });
const min = rt.el("input", { class:"input", type:"number", placeholder:"Min score", value:"0" });
const sort = rt.el("select", { class:"input" },
  rt.el("option", { value:"score_desc" }, "Score ↓"),
  rt.el("option", { value:"score_asc" }, "Score ↑"),
  rt.el("option", { value:"name_asc" }, "Name A→Z"),
  rt.el("option", { value:"name_desc" }, "Name Z→A"),
);
controls.appendChild(q); controls.appendChild(min); controls.appendChild(sort);
box.appendChild(controls);

const out = rt.el("div", { class:"output" }, "");
box.appendChild(out);

const data = [
  { name:"Ava", score: 92 },
  { name:"Liam", score: 76 },
  { name:"Noah", score: 88 },
  { name:"Mia", score: 81 },
  { name:"Ethan", score: 67 },
  { name:"Sofia", score: 95 },
  { name:"Emma", score: 73 },
  { name:"Olivia", score: 84 },
  { name:"Lucas", score: 90 },
  { name:"Zoe", score: 79 },
];

function summarize(rows){
  const n = rows.length;
  const avg = n ? (rows.reduce((s,r)=>s+r.score,0) / n) : 0;
  const max = n ? Math.max(...rows.map(r=>r.score)) : 0;
  const min = n ? Math.min(...rows.map(r=>r.score)) : 0;
  return { n, avg, max, min };
}

function render(){
  const term = q.value.trim().toLowerCase();
  const minScore = Number(min.value) || 0;
  let rows = data
    .filter(r => r.name.toLowerCase().includes(term))
    .filter(r => r.score >= minScore);

  const s = sort.value;
  rows = rows.slice().sort((a,b)=>{
    if (s === "score_desc") return b.score - a.score;
    if (s === "score_asc") return a.score - b.score;
    if (s === "name_asc") return a.name.localeCompare(b.name);
    if (s === "name_desc") return b.name.localeCompare(a.name);
    return 0;
  });

  const sum = summarize(rows);
  out.textContent =
    `Rows: ${sum.n}\nAvg: ${sum.avg.toFixed(1)}\nMax: ${sum.max}\nMin: ${sum.min}\n\n` +
    rows.map(r => `${r.name.padEnd(8)} ${r.score}`).join("\n");
}

[q, min, sort].forEach(el => el.addEventListener("input", render));
render();
};
