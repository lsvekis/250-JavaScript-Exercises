// Exercise 062 — Chapter 7 canonical solution
window.exercise = function(rt) {
// DOM Traversal — parent/children/siblings
const box = rt.section("Traversal");

const ul = rt.el("ul", {},
  rt.el("li", {}, "Alpha"),
  rt.el("li", {}, "Beta"),
  rt.el("li", {}, "Gamma")
);
box.appendChild(ul);

const middle = ul.children[1];
rt.println("middle:", middle.textContent);
rt.println("parent:", middle.parentElement.tagName);
rt.println("prev:", middle.previousElementSibling.textContent);
rt.println("next:", middle.nextElementSibling.textContent);

// highlight middle
middle.style.fontWeight = "700";
middle.style.textDecoration = "underline";
};
