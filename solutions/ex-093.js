// Exercise 093 — Chapter 10 canonical solution
window.exercise = function(rt) {
// Form Builder — dynamic form from schema + validation
const box = rt.section("Dynamic Form");
const schema = [
  { name: "fullName", label: "Full Name", required: true },
  { name: "age", label: "Age", required: true, type: "number" },
  { name: "email", label: "Email", required: true }
];

const form = rt.el("form", {});
const msg = rt.el("div", { class:"output" }, "Fill and submit…");

const fields = {};
schema.forEach(f => {
  const input = rt.input(f.label);
  if (f.type) input.type = f.type;
  fields[f.name] = input;
  form.appendChild(rt.el("div", { style:{marginTop:"8px"} },
    rt.el("div", { class:"small" }, f.label),
    input
  ));
});

const submit = rt.el("button", { class:"btn", type:"submit", style:{marginTop:"10px"} }, "Submit");
form.appendChild(submit);
form.appendChild(msg);

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const data = {};
  const errors = [];

  for (const f of schema) {
    const v = fields[f.name].value.trim();
    if (f.required && !v) errors.push(`${f.label} is required`);
    data[f.name] = (f.type==="number") ? Number(v) : v;
  }
  if (Number.isNaN(data.age)) errors.push("Age must be a number");

  msg.textContent = errors.length ? ("Errors:\n" + errors.join("\n")) : ("✅ Submitted:\n" + JSON.stringify(data, null, 2));
});

box.appendChild(form);
};
