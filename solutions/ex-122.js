// Exercise 122 — Chapter 13 canonical solution
window.exercise = function(rt) {
// Throw Your Own Errors — enforce rules with custom messages
function requireNonEmptyString(value, label) {
  if (typeof value !== "string") throw new TypeError(`${label} must be a string`);
  if (value.trim().length === 0) throw new Error(`${label} cannot be empty`);
  return value.trim();
}

try {
  const username = requireNonEmptyString("  Ava  ", "username");
  rt.println("username:", username);
  requireNonEmptyString("   ", "displayName"); // will throw
} catch (err) {
  rt.println("caught:", err.name + " — " + err.message);
}
};
