// Exercise 172 — Chapter 18 canonical solution
window.exercise = function(rt) {
// DOM Diffing (Tiny) — update only what changed
const box = rt.section("Tiny Diff");
const out = rt.el("div", { class:"output" }, "");
const btn = rt.el("button", { class:"btn" }, "Randomize");
box.appendChild(btn);
box.appendChild(out);

let state = { a: 1, b: 2, c: 3 };
let prevText = "";

function render(){
  const text = `a=${state.a} | b=${state.b} | c=${state.c}`;
  if (text !== prevText) { // diff: only update if changed
    out.textContent = text;
    prevText = text;
  }
}

btn.addEventListener("click", ()=>{
  const keys = ["a","b","c"];
  const k = keys[Math.floor(Math.random()*keys.length)];
  state[k] = Math.floor(Math.random()*10);
  render();
  rt.println("changed:", k);
});

render();
};
