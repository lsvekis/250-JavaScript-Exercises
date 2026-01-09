// Exercise 167 — Chapter 17 canonical solution
window.exercise = function(rt) {
// Persisted Store — reducer + localStorage persistence
const box = rt.section("Persisted Reducer Store");
const key = "js250_reducer_count";

function reducer(state, action) {
  switch (action.type) {
    case "inc": return { count: state.count + 1 };
    case "dec": return { count: state.count - 1 };
    default: return state;
  }
}

function load() {
  try { return JSON.parse(localStorage.getItem(key) || ""); }
  catch { return null; }
}

function save(state) {
  localStorage.setItem(key, JSON.stringify(state));
}

let state = load() || { count: 0 };

const out = rt.el("div", { class:"output" }, "");
const inc = rt.el("button", { class:"btn" }, "+");
const dec = rt.el("button", { class:"btn" }, "−");
const reset = rt.el("button", { class:"btn" }, "Reset");

box.appendChild(rt.el("div",{class:"row"}, inc, dec, reset));
box.appendChild(out);

function render(){
  out.textContent = `count = ${state.count} (saved)`;
  save(state);
}

inc.onclick = ()=>{ state = reducer(state, {type:"inc"}); render(); };
dec.onclick = ()=>{ state = reducer(state, {type:"dec"}); render(); };
reset.onclick = ()=>{ state = {count:0}; render(); };

render();
rt.println("Reload the page — count should persist.");
};
