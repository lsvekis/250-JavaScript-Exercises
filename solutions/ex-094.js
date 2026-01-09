// Exercise 094 — Chapter 10 canonical solution
window.exercise = function(rt) {
// Live Search Filter — filter list as you type
const box = rt.section("Live Search");
const input = rt.input("Search…");
const ul = rt.el("ul", {});
box.appendChild(input);
box.appendChild(ul);

const data = ["JavaScript", "TypeScript", "Python", "Go", "Rust", "Ruby", "Java", "Kotlin", "C#", "C++"];

function render(){
  const q = input.value.trim().toLowerCase();
  const filtered = data.filter(x => x.toLowerCase().includes(q));
  ul.innerHTML = "";
  filtered.forEach(x => ul.appendChild(rt.el("li", {}, x)));
  rt.println("matches:", filtered.length);
}

input.addEventListener("input", render);
render();
};
