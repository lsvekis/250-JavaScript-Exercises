// Exercise 166 — Chapter 17 canonical solution
window.exercise = function(rt) {
// Reducer Pattern — update state via actions (like Redux lite)
const box = rt.section("Reducer Store");
const out = rt.el("div", { class:"output" }, "");
const add = rt.el("button", { class:"btn" }, "+1");
const sub = rt.el("button", { class:"btn" }, "-1");
const add5 = rt.el("button", { class:"btn" }, "+5");
box.appendChild(rt.el("div",{class:"row"}, add, sub, add5));
box.appendChild(out);

function reducer(state, action) {
  switch (action.type) {
    case "inc": return { count: state.count + 1 };
    case "dec": return { count: state.count - 1 };
    case "add": return { count: state.count + action.amount };
    default: return state;
  }
}

function createReducerStore(reducer, initial) {
  let state = initial;
  const subs = new Set();
  return {
    get: () => state,
    dispatch: (action) => { state = reducer(state, action); subs.forEach(fn=>fn(state)); },
    subscribe: (fn) => { subs.add(fn); fn(state); return ()=>subs.delete(fn); }
  };
}

const store = createReducerStore(reducer, { count: 0 });
store.subscribe(s => out.textContent = `count = ${s.count}`);

add.onclick = ()=> store.dispatch({ type:"inc" });
sub.onclick = ()=> store.dispatch({ type:"dec" });
add5.onclick = ()=> store.dispatch({ type:"add", amount: 5 });
};
