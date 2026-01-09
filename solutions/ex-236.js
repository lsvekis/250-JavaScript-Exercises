// Exercise 236 — Chapter 24 canonical solution
window.exercise = function(rt) {
// Combobox-ish Autocomplete — filter a list and select with keyboard
const box = rt.section("Autocomplete");
const input = rt.el("input", { class:"input", placeholder:"Type a fruit…" });
const list = rt.el("div", { class:"card", role:"listbox", style:{marginTop:"8px", padding:"6px"} });
const out = rt.el("div", { class:"output" }, "Selected: (none)");
box.appendChild(input);
box.appendChild(list);
box.appendChild(out);

const fruits = ["Apple","Apricot","Banana","Blackberry","Blueberry","Cherry","Coconut","Grape","Grapefruit","Kiwi","Lemon","Lime","Mango","Orange","Peach","Pear","Pineapple","Plum","Raspberry","Strawberry","Watermelon"];

let active = -1;
let visible = [];

function render(){
  const q = input.value.trim().toLowerCase();
  visible = fruits.filter(f => f.toLowerCase().includes(q)).slice(0, 8);
  list.innerHTML = "";
  active = -1;

  visible.forEach((f,i)=>{
    const opt = rt.el("div", { role:"option", tabindex:"-1", class:"card", style:{padding:"8px", margin:"6px 0", background:"rgba(255,255,255,.05)"} }, f);
    opt.addEventListener("mousedown", (e)=>{ e.preventDefault(); choose(i); });
    list.appendChild(opt);
  });

  if (!visible.length) {
    list.appendChild(rt.el("div",{class:"small"}, "(no matches)"));
  }
}

function highlight(idx){
  const opts = [...list.querySelectorAll('[role="option"]')];
  opts.forEach((el,i)=>{
    el.style.outline = (i === idx) ? "2px solid rgba(98,168,255,.8)" : "none";
  });
}

function choose(idx){
  const v = visible[idx];
  if (!v) return;
  input.value = v;
  out.textContent = "Selected: " + v;
  render();
}

input.addEventListener("input", render);
input.addEventListener("keydown", (e)=>{
  const opts = [...list.querySelectorAll('[role="option"]')];
  if (!opts.length) return;

  if (e.key === "ArrowDown") { e.preventDefault(); active = Math.min(opts.length-1, active+1); highlight(active); }
  if (e.key === "ArrowUp") { e.preventDefault(); active = Math.max(0, active-1); highlight(active); }
  if (e.key === "Enter") { if (active >= 0) { e.preventDefault(); choose(active); } }
  if (e.key === "Escape") { render(); }
});

render();
};
