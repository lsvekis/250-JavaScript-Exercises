// Exercise 170 — Chapter 17 canonical solution
window.exercise = function(rt) {
// State + UI Sync — bind inputs to state and persist
const box = rt.section("Settings Panel");
const key = "js250_settings";

const state = (() => {
  try { return JSON.parse(localStorage.getItem(key) || "") || { name:"", volume:50, dark:true }; }
  catch { return { name:"", volume:50, dark:true }; }
})();

const name = rt.input("Name");
const volume = rt.el("input", { type:"range", min:"0", max:"100", value:String(state.volume) });
const dark = rt.el("input", { type:"checkbox" });
dark.checked = !!state.dark;

const out = rt.el("div", { class:"output" }, "");

box.appendChild(rt.el("div",{class:"small"},"Name"));
box.appendChild(name);
box.appendChild(rt.el("div",{class:"small",style:{marginTop:"10px"}},"Volume"));
box.appendChild(volume);
box.appendChild(rt.el("label",{class:"small",style:{display:"block",marginTop:"10px"}}, dark, " Dark mode"));
box.appendChild(out);

function save(){ localStorage.setItem(key, JSON.stringify(state)); }

function render(){
  name.value = state.name;
  volume.value = String(state.volume);
  dark.checked = state.dark;

  document.documentElement.dataset.theme = state.dark ? "dark" : "light";
  out.textContent = JSON.stringify(state, null, 2);
  save();
}

name.addEventListener("input", ()=>{ state.name = name.value; render(); });
volume.addEventListener("input", ()=>{ state.volume = Number(volume.value); render(); });
dark.addEventListener("change", ()=>{ state.dark = dark.checked; render(); });

// light theme snippet
const style = document.createElement("style");
style.textContent = `
:root[data-theme="light"] body{ background:#f6f8ff; color:#0b1220 }
:root[data-theme="light"] .card{ background:rgba(0,0,0,.04) }
:root[data-theme="light"] .output{ background:rgba(0,0,0,.08) }
`;
document.head.appendChild(style);

render();
};
