// Exercise 175 — Chapter 18 canonical solution
window.exercise = function(rt) {
// Template Element — clone HTML templates into the DOM
const box = rt.section("Template Cloning");
const tpl = document.createElement("template");
tpl.innerHTML = `
  <div class="card">
    <h3 class="title"></h3>
    <div class="output body"></div>
  </div>
`;

const data = [
  { title:"Card A", body:"Templates help you avoid manual DOM wiring." },
  { title:"Card B", body:"Clone, then fill values." },
  { title:"Card C", body:"Great for components." }
];

data.forEach(d=>{
  const node = tpl.content.cloneNode(true);
  node.querySelector(".title").textContent = d.title;
  node.querySelector(".body").textContent = d.body;
  box.appendChild(node);
});
};
