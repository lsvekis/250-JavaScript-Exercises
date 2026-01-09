// Exercise 159 — Chapter 16 canonical solution
window.exercise = function(rt) {
// Form Serialization — convert form fields to an object
const box = rt.section("Serialize Form");
const form = rt.el("form", {});
const name = rt.input("Name");
const color = document.createElement("select");
color.className = "input";
["red","blue","green"].forEach(c => {
  const o = document.createElement("option");
  o.value = c; o.textContent = c;
  color.appendChild(o);
});
const agree = rt.el("input", { type:"checkbox" });
const submit = rt.el("button", { class:"btn", type:"submit" }, "Serialize");
const out = rt.el("div", { class:"output" }, "");

form.appendChild(rt.el("div",{class:"small"},"Name"));
form.appendChild(name);
form.appendChild(rt.el("div",{class:"small",style:{marginTop:"10px"}},"Favorite color"));
form.appendChild(color);
form.appendChild(rt.el("label",{class:"small",style:{display:"block",marginTop:"10px"}}, agree, " I agree"));
form.appendChild(rt.el("div",{style:{marginTop:"10px"}}, submit));
box.appendChild(form);
box.appendChild(out);

function serialize(formEl){
  const data = {};
  const inputs = formEl.querySelectorAll("input, select, textarea");
  inputs.forEach(el=>{
    if (el.type === "submit") return;
    if (el.type === "checkbox") data["agree"] = el.checked;
    else if (el.tagName === "SELECT") data["color"] = el.value;
    else data[el.placeholder.toLowerCase()] = el.value;
  });
  return data;
}

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  out.textContent = JSON.stringify(serialize(form), null, 2);
});
};
