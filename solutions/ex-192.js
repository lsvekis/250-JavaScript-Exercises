// Exercise 192 — Chapter 20 canonical solution
window.exercise = function(rt) {
// FileReader — load a local text file and display it
const box = rt.section("FileReader (Text)");
const input = rt.el("input", { type:"file", class:"input", accept:".txt,.md,.csv,.json,text/plain" });
const out = rt.el("div", { class:"output" }, "Choose a small text file…");
box.appendChild(input);
box.appendChild(out);

input.addEventListener("change", ()=>{
  const file = input.files?.[0];
  if (!file) return;
  if (file.size > 200_000) { out.textContent = "File too large for this demo (max 200KB)."; return; }

  const reader = new FileReader();
  reader.onload = ()=> {
    out.textContent = String(reader.result).slice(0, 5000);
    rt.println("loaded:", file.name, "bytes:", file.size);
  };
  reader.onerror = ()=> out.textContent = "❌ Read error";
  reader.readAsText(file);
});
};
