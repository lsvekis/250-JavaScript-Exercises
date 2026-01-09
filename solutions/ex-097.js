// Exercise 097 — Chapter 10 canonical solution
window.exercise = function(rt) {
// Clipboard Copy — copy generated text to clipboard
const box = rt.section("Copy to Clipboard");
const input = rt.input("Type something…");
const btn = rt.el("button", { class:"btn" }, "Copy");
const out = rt.el("div", { class:"output" }, "Status: idle");

box.appendChild(rt.el("div", { class:"row" }, input, btn));
box.appendChild(out);

btn.addEventListener("click", async ()=>{
  const text = input.value;
  try {
    await navigator.clipboard.writeText(text);
    out.textContent = "✅ Copied to clipboard!";
  } catch (err) {
    out.textContent = "❌ Clipboard blocked (try HTTPS / GitHub Pages).";
    rt.println("clipboard error:", err.message);
  }
});

rt.println("Note: Clipboard requires secure context (https).");
};
