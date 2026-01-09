// Exercise 242 — Chapter 25 canonical solution
window.exercise = function(rt) {
// Capstone: Expense Tracker — totals by category + simple chart bars
const box = rt.section("Expense Tracker");
const form = rt.el("div", { class:"card", style:{maxWidth:"820px"} });

const amount = rt.el("input", { class:"input", type:"number", step:"0.01", placeholder:"Amount (e.g. 12.50)" });
const category = rt.el("select", { class:"input" },
  rt.el("option", { value:"Food" }, "Food"),
  rt.el("option", { value:"Transport" }, "Transport"),
  rt.el("option", { value:"Bills" }, "Bills"),
  rt.el("option", { value:"Fun" }, "Fun"),
  rt.el("option", { value:"Other" }, "Other"),
);
const note = rt.el("input", { class:"input", placeholder:"Note (optional)" });
const add = rt.el("button", { class:"btn" }, "Add Expense");
const reset = rt.el("button", { class:"btn" }, "Reset");

form.appendChild(rt.el("h3", {}, "Add Expense"));
form.appendChild(rt.el("div",{class:"row"}, amount, category, note, add, reset));
box.appendChild(form);

const log = rt.el("div", { class:"output" }, "");
const chart = rt.el("div", { style:{marginTop:"10px"} });
box.appendChild(log);
box.appendChild(chart);

let items = [];

function money(n){ return new Intl.NumberFormat("en-CA",{style:"currency",currency:"CAD"}).format(n); }

function totals(){
  const by = {};
  for (const it of items){
    by[it.cat] = (by[it.cat] || 0) + it.amount;
  }
  return by;
}

function render(){
  const total = items.reduce((s,i)=> s+i.amount, 0);
  log.textContent =
    `Total: ${money(total)}\n` +
    items.slice(0, 12).map(i => `${i.cat.padEnd(10)} ${money(i.amount)}  ${i.note ? "— "+i.note : ""}`).join("\n");

  // chart
  chart.innerHTML = "";
  const by = totals();
  const max = Math.max(1, ...Object.values(by));
  Object.entries(by).sort((a,b)=>b[1]-a[1]).forEach(([cat, val])=>{
    const bar = rt.el("div", { class:"card", style:{padding:"10px", marginTop:"8px"} });
    const w = Math.round((val / max) * 100);
    const fill = rt.el("div", { style:{height:"10px", borderRadius:"999px", background:"rgba(98,168,255,.9)", width:w+"%"} });
    bar.appendChild(rt.el("div",{class:"small"}, `${cat} — ${money(val)}`));
    bar.appendChild(rt.el("div",{style:{background:"rgba(255,255,255,.10)", borderRadius:"999px", padding:"2px"}}, fill));
    chart.appendChild(bar);
  });
}

add.onclick = ()=>{
  const a = Number(amount.value);
  if (!Number.isFinite(a) || a <= 0) { rt.println("enter a positive amount"); return; }
  items.unshift({ amount: Math.round(a*100)/100, cat: category.value, note: note.value.trim(), at: Date.now() });
  amount.value = ""; note.value = "";
  render();
};

reset.onclick = ()=>{ items = []; render(); };

render();
rt.println("Tracks expenses and renders category totals as simple bars.");
};
