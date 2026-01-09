// Exercise 151 — Chapter 16 canonical solution
window.exercise = function(rt) {
// Required Fields — validate on submit and show inline errors
const box = rt.section("Required Fields");
const form = rt.el("form", {});
const name = rt.input("Name");
const email = rt.input("Email");
const submit = rt.el("button", { class:"btn", type:"submit" }, "Submit");
const msg = rt.el("div", { class:"output" }, "Fill the form and submit.");

function errorEl(text){
  return rt.el("div", { class:"small", style:{color:"rgba(255,120,120,.95)"} }, text);
}

let nameErr = errorEl("");
let emailErr = errorEl("");

form.appendChild(rt.el("div", { class:"small" }, "Name *"));
form.appendChild(name);
form.appendChild(nameErr);
form.appendChild(rt.el("div", { class:"small", style:{marginTop:"10px"} }, "Email *"));
form.appendChild(email);
form.appendChild(emailErr);
form.appendChild(rt.el("div", { style:{marginTop:"10px"} }, submit));
form.appendChild(msg);

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const n = name.value.trim();
  const em = email.value.trim();

  nameErr.textContent = n ? "" : "Name is required";
  emailErr.textContent = em && em.includes("@") ? "" : "Valid email required";

  if (nameErr.textContent || emailErr.textContent) {
    msg.textContent = "❌ Fix errors above";
    return;
  }
  msg.textContent = `✅ Submitted: ${n} (${em})`;
});

box.appendChild(form);
};
