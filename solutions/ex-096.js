// Exercise 096 — Chapter 10 canonical solution
window.exercise = function(rt) {
// Mini Router — hash-based navigation
const box = rt.section("Hash Router");
const nav = rt.el("div", { class:"row" });
const view = rt.el("div", { class:"output" }, "");
box.appendChild(nav);
box.appendChild(view);

const routes = {
  "#home": "Home view: welcome!",
  "#about": "About view: this is a tiny router.",
  "#help": "Help view: change the hash to navigate."
};

Object.keys(routes).forEach(h => {
  const btn = rt.el("button", { class:"btn" }, h.replace("#","").toUpperCase());
  btn.addEventListener("click", ()=> location.hash = h);
  nav.appendChild(btn);
});

function render(){
  const h = location.hash || "#home";
  view.textContent = routes[h] || "404 — not found";
  rt.println("route:", h);
}

window.addEventListener("hashchange", render);
if (!location.hash) location.hash = "#home";
render();
};
