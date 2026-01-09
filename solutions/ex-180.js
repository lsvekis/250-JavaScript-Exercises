// Exercise 180 — Chapter 18 canonical solution
window.exercise = function(rt) {
// Component Pattern — create a reusable counter component (factory)
const box = rt.section("Component Factory");

function CounterComponent({ label, start = 0 }) {
  let value = start;
  const root = rt.el("div", { class:"card" });
  const title = rt.el("h3", {}, label);
  const out = rt.el("div", { class:"output" }, "");
  const inc = rt.el("button", { class:"btn" }, "+");
  const dec = rt.el("button", { class:"btn" }, "−");
  const reset = rt.el("button", { class:"btn" }, "Reset");

  function render(){ out.textContent = "value = " + value; }

  inc.onclick = ()=>{ value++; render(); };
  dec.onclick = ()=>{ value--; render(); };
  reset.onclick = ()=>{ value = start; render(); };

  root.appendChild(title);
  root.appendChild(rt.el("div",{class:"row"}, inc, dec, reset));
  root.appendChild(out);
  render();

  return root;
}

box.appendChild(CounterComponent({ label:"Counter A", start: 5 }));
box.appendChild(CounterComponent({ label:"Counter B", start: 0 }));
rt.println("Component factories help you reuse UI + state.");
};
