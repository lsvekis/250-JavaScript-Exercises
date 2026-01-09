// Exercise 232 — Chapter 24 canonical solution
window.exercise = function(rt) {
// Accessible Form Validation — inline errors + summary + aria-invalid
const box = rt.section("Form Validation");
const form = rt.el("form", { class:"card", style:{maxWidth:"720px"} });

const name = rt.el("input", { class:"input", placeholder:"Name (min 2 chars)", "aria-describedby":"nameErr" });
const email = rt.el("input", { class:"input", placeholder:"Email (name@domain.com)", "aria-describedby":"emailErr" });
const age = rt.el("input", { class:"input", type:"number", min:"0", max:"120", placeholder:"Age (13+)", "aria-describedby":"ageErr" });

const nameErr = rt.el("div", { id:"nameErr", class:"small" }, "");
const emailErr = rt.el("div", { id:"emailErr", class:"small" }, "");
const ageErr = rt.el("div", { id:"ageErr", class:"small" }, "");

const summary = rt.el("div", { class:"output", role:"alert", "aria-live":"assertive", "aria-atomic":"true" }, "Fill the form, then submit.");
const submit = rt.el("button", { class:"btn", type:"submit" }, "Submit");

form.appendChild(rt.el("h3", {}, "Sign Up"));
form.appendChild(name); form.appendChild(nameErr);
form.appendChild(email); form.appendChild(emailErr);
form.appendChild(age); form.appendChild(ageErr);
form.appendChild(submit);
box.appendChild(form);
box.appendChild(summary);

function setError(input, errEl, msg){
  input.setAttribute("aria-invalid", msg ? "true" : "false");
  errEl.textContent = msg || "";
}

function validEmail(v){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function validate(){
  let ok = true;

  const n = name.value.trim();
  const e = email.value.trim();
  const a = Number(age.value);

  setError(name, nameErr, n.length >= 2 ? "" : "Name must be at least 2 characters.");
  setError(email, emailErr, validEmail(e) ? "" : "Enter a valid email.");
  setError(age, ageErr, (Number.isFinite(a) && a >= 13) ? "" : "Age must be 13 or older.");

  if (n.length < 2) ok = false;
  if (!validEmail(e)) ok = false;
  if (!(Number.isFinite(a) && a >= 13)) ok = false;

  return ok;
}

form.addEventListener("submit", (ev)=>{
  ev.preventDefault();
  if (validate()) {
    summary.textContent = "✅ Submitted! (demo only — no network request)";
    rt.println("submitted:", { name: name.value.trim(), email: email.value.trim(), age: Number(age.value) });
  } else {
    summary.textContent = "❌ Please fix the highlighted fields.";
    // focus first invalid
    const firstBad = [name, email, age].find(el => el.getAttribute("aria-invalid") === "true");
    if (firstBad) firstBad.focus();
  }
});

// validate on blur
[name,email,age].forEach(el => el.addEventListener("blur", validate));
};
