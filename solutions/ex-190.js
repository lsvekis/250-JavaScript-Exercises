// Exercise 190 — Chapter 19 canonical solution
window.exercise = function(rt) {
// Mini Project Skeleton — render app from a single state object
const box = rt.section("Mini App Skeleton");
const inc = rt.el("button", { class:"btn" }, "+");
const dec = rt.el("button", { class:"btn" }, "−");
const reset = rt.el("button", { class:"btn" }, "Reset");
const out = rt.el("div", { class:"output" }, "");

box.appendChild(rt.el("div",{class:"row"}, inc, dec, reset));
box.appendChild(out);

const state = { count: 0 };

function render() {
  out.textContent = `count=${state.count}`;
}

function update(action) {
  switch (action.type) {
    case "inc": state.count++; break;
    case "dec": state.count--; break;
    case "reset": state.count = 0; break;
  }
  render();
}

inc.onclick = ()=> update({ type:"inc" });
dec.onclick = ()=> update({ type:"dec" });
reset.onclick = ()=> update({ type:"reset" });

render();
rt.println("Pattern: state + update(action) + render(). Scale this into folders/files later.");
};
