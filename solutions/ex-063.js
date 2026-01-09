// Exercise 063 — Chapter 7 canonical solution
window.exercise = function(rt) {
// Create/Remove — add list items and delete them
const box = rt.section("Add / Remove Items");
const input = rt.input("New item…");
const addBtn = rt.el("button", { class: "btn" }, "Add");
const clearBtn = rt.el("button", { class: "btn" }, "Clear All");

const ul = rt.el("ul", {});
box.appendChild(rt.el("div", { class:"row" }, input, addBtn, clearBtn));
box.appendChild(ul);

function addItem(text){
  const li = rt.el("li", {});
  const label = rt.el("span", {}, text);
  const del = rt.el("button", { class:"btn", style:{padding:"4px 8px"} }, "✕");
  del.addEventListener("click", ()=> li.remove());
  li.appendChild(label);
  li.appendChild(rt.el("span", { style:{marginLeft:"10px"} }));
  li.appendChild(del);
  ul.appendChild(li);
}

addBtn.addEventListener("click", ()=>{
  const t = input.value.trim();
  if(!t) return;
  addItem(t);
  input.value = "";
  input.focus();
});

clearBtn.addEventListener("click", ()=> ul.innerHTML = "");

["Milk","Bread"].forEach(addItem);
rt.println("Tip: Each delete button removes only its own item.");
};
