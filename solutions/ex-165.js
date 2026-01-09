// Exercise 165 — Chapter 17 canonical solution
window.exercise = function(rt) {
// State Store — tiny pub/sub store that notifies subscribers
const box = rt.section("Tiny Store");
const out = rt.el("div", { class:"output" }, "");
const inc = rt.el("button", { class:"btn" }, "+");
const dec = rt.el("button", { class:"btn" }, "−");
box.appendChild(rt.el("div",{class:"row"}, inc, dec));
box.appendChild(out);

function createStore(initial) {
  let state = initial;
  const subs = new Set();
  return {
    get: () => state,
    set: (next) => { state = next; subs.forEach(fn => fn(state)); },
    subscribe: (fn) => { subs.add(fn); fn(state); return ()=>subs.delete(fn); }
  };
}

const store = createStore({ count: 0 });

store.subscribe((s)=> out.textContent = `count = ${s.count}`);

inc.addEventListener("click", ()=> store.set({ count: store.get().count + 1 }));
dec.addEventListener("click", ()=> store.set({ count: store.get().count - 1 }));

rt.println("Store notifies subscribers on state changes.");
};
