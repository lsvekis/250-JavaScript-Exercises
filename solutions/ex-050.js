// Exercise 050 — Chapter 5 canonical solution
window.exercise = function(rt) {
// Simple Data Validator — validate an object against rules
function validateUser(user) {
  const errors = [];

  if (!user.name || user.name.trim().length < 2) errors.push("name must be 2+ chars");
  if (!Number.isInteger(user.age) || user.age < 13) errors.push("age must be an integer >= 13");
  if (typeof user.email !== "string" || !user.email.includes("@")) errors.push("email must contain @");

  return { ok: errors.length === 0, errors };
}

const good = { name: "Ava", age: 16, email: "ava@example.com" };
const bad = { name: " ", age: 9, email: "nope" };

rt.println("good:", JSON.stringify(validateUser(good)));
rt.println("bad:", JSON.stringify(validateUser(bad)));
};
