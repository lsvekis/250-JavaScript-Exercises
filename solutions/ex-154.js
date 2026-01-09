// Exercise 154 — Chapter 16 canonical solution
window.exercise = function(rt) {
// Multi-step Form — wizard navigation with state
const box = rt.section("Wizard");
const steps = [
  { title:"Step 1", render: (state)=> rt.el("div", {}, rt.el("div",{class:"small"},"First name"), state.firstInput) },
  { title:"Step 2", render: (state)=> rt.el("div", {}, rt.el("div",{class:"small"},"Last name"), state.lastInput) },
  { title:"Review", render: (state)=> rt.el("div", { class:"output" }, `Name: ${state.firstInput.value.trim()} ${state.lastInput.value.trim()}`) },
];

const state = { firstInput: rt.input("First"), lastInput: rt.input("Last") };
let i = 0;

const title = rt.el("h3", {}, "");
const panel = rt.el("div", { class:"card" });
const back = rt.el("button", { class:"btn" }, "Back");
const next = rt.el("button", { class:"btn" }, "Next");
const status = rt.el("div", { class:"small" }, "");

function render(){
  title.textContent = steps[i].title;
  panel.innerHTML = "";
  panel.appendChild(steps[i].render(state));
  back.disabled = i === 0;
  next.textContent = i === steps.length - 1 ? "Finish" : "Next";
  status.textContent = `Step ${i+1} of ${steps.length}`;
}

next.addEventListener("click", ()=>{
  if (i === 0 && !state.firstInput.value.trim()) return alert("Enter first name");
  if (i === 1 && !state.lastInput.value.trim()) return alert("Enter last name");
  if (i < steps.length - 1) i++; else rt.println("✅ Finished wizard");
  render();
});
back.addEventListener("click", ()=>{ if(i>0) i--; render(); });

box.appendChild(title);
box.appendChild(panel);
box.appendChild(rt.el("div",{class:"row"}, back, next));
box.appendChild(status);
render();
};
