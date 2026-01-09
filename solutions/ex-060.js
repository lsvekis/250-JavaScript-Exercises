// Exercise 060 — Chapter 6 canonical solution
window.exercise = function(rt) {
// Simple Tab UI — switch visible panel
const box = rt.section("Tabs");
const tabs = ["Home", "Profile", "Settings"];
const tabBar = rt.el("div", { class: "row" });
const panel = rt.el("div", { class: "output" }, "");

let active = "Home";
function render() {
  tabBar.innerHTML = "";
  tabs.forEach(name => {
    const b = rt.el("button", { class:"btn", "data-tab": name }, name + (name===active ? " ✓" : ""));
    b.addEventListener("click", () => { active = name; render(); });
    tabBar.appendChild(b);
  });
  panel.textContent = `You are viewing: ${active}`;
}

box.appendChild(tabBar);
box.appendChild(panel);
render();
};
