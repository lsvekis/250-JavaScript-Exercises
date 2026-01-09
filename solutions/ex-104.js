// Exercise 104 — Chapter 11 canonical solution
window.exercise = function(rt) {
// Closure Factory — make independent counters (with UI buttons)
const box = rt.section("Counter Factory");

function makeCounter(label) {
  let value = 0; // captured by closure
  const out = rt.el("div", { class:"output" }, `${label}: ${value}`);

  function render() { out.textContent = `${label}: ${value}`; }

  const inc = rt.el("button", { class:"btn" }, "+");
  const dec = rt.el("button", { class:"btn" }, "−");
  const reset = rt.el("button", { class:"btn" }, "Reset");

  inc.addEventListener("click", () => { value++; render(); });
  dec.addEventListener("click", () => { value--; render(); });
  reset.addEventListener("click", () => { value = 0; render(); });

  const row = rt.el("div", { class:"row" }, inc, dec, reset);
  const card = rt.el("div", { class:"card" }, rt.el("h3", {}, label), row, out);
  return card;
}

box.appendChild(makeCounter("Counter A"));
box.appendChild(makeCounter("Counter B"));

rt.println("Two counters are independent because each closure has its own value.");
};
