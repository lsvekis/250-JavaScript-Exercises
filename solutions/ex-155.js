// Exercise 155 — Chapter 16 canonical solution
window.exercise = function(rt) {
// Autocomplete — suggest items as you type and click to fill
const box = rt.section("Autocomplete");
const input = rt.input("Search a language…");
const list = rt.el("div", { class:"card", style:{display:"none"} });
box.appendChild(input);
box.appendChild(list);

const data = ["JavaScript","TypeScript","Python","PHP","Ruby","Rust","Go","Java","Kotlin","Swift"];

function show(items){
  list.innerHTML = "";
  if (items.length === 0) { list.style.display="none"; return; }
  items.slice(0,5).forEach(x=>{
    const btn = rt.el("button", { class:"btn", style:{width:"100%"} }, x);
    btn.addEventListener("click", ()=>{
      input.value = x;
      list.style.display="none";
      rt.println("selected:", x);
    });
    list.appendChild(btn);
  });
  list.style.display = "block";
}

input.addEventListener("input", ()=>{
  const q = input.value.trim().toLowerCase();
  if (!q) return show([]);
  show(data.filter(x => x.toLowerCase().includes(q)));
});

// click outside to close
document.addEventListener("click", (e)=>{
  if (!box.contains(e.target)) list.style.display="none";
});
};
