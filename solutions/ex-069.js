// Exercise 069 — Chapter 7 canonical solution
window.exercise = function(rt) {
// Theme Toggle — switch light/dark and remember preference
const box = rt.section("Theme Toggle");
const btn = rt.el("button", { class:"btn" }, "Toggle Theme");
const note = rt.el("div", { class:"small" }, "Preference stored in localStorage.");

box.appendChild(btn);
box.appendChild(note);

const key = "js250_theme";
function apply(theme){
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(key, theme);
}

function current(){ return document.documentElement.dataset.theme || "dark"; }

btn.addEventListener("click", ()=>{
  const next = current()==="dark" ? "light" : "dark";
  apply(next);
  rt.println("theme:", next);
});

// minimal theme styles
const style = document.createElement("style");
style.textContent = `
:root[data-theme="light"] body{ background:#f6f8ff; color:#0b1220 }
:root[data-theme="light"] .card{ background:rgba(0,0,0,.04) }
:root[data-theme="light"] .output{ background:rgba(0,0,0,.08) }
`;
document.head.appendChild(style);

apply(localStorage.getItem(key) || "dark");
rt.println("Current theme:", current());
};
