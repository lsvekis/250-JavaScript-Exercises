// Exercise 055 — Chapter 6 canonical solution
window.exercise = function(rt) {
// Form Submit — prevent default and validate
const box = rt.section("Mini Login Form");
const form = rt.el("form", {});

const user = rt.input("Username");
const pass = rt.input("Password");
pass.type = "password";
const btn = rt.el("button", { class: "btn", type: "submit" }, "Login");
const msg = rt.el("div", { class: "output" }, "Submit to validate…");

form.appendChild(user);
form.appendChild(pass);
form.appendChild(btn);
form.appendChild(msg);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const u = user.value.trim();
  const p = pass.value;

  if (u.length < 2) return msg.textContent = "Username must be 2+ chars ❌";
  if (p.length < 6) return msg.textContent = "Password must be 6+ chars ❌";
  msg.textContent = `Welcome, ${u}! ✅`;
});

box.appendChild(form);
rt.println("Try submitting short values to see validation.");
};
