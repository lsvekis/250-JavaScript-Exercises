// Exercise 058 — Chapter 6 canonical solution
window.exercise = function(rt) {
// List Rendering — render an array into <ul>
const box = rt.section("Render List");
const fruits = ["apple", "banana", "cherry"];
const ul = rt.el("ul", {});

function render() {
  ul.innerHTML = "";
  fruits.forEach(f => ul.appendChild(rt.el("li", {}, f)));
}

const addBtn = rt.el("button", { class: "btn" }, "Add 'orange'");
addBtn.addEventListener("click", () => { fruits.push("orange"); render(); });

box.appendChild(addBtn);
box.appendChild(ul);
render();
rt.println("List rendered. Click to add an item.");
};
