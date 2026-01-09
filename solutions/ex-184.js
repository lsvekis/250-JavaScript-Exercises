// Exercise 184 — Chapter 19 canonical solution
window.exercise = function(rt) {
// Snapshot-ish Test — compare JSON output to expected string
function formatUser(u) {
  return JSON.stringify({ id:u.id, name:u.name, role:u.role }, null, 2);
}

const user = { id: 7, name:"Ava", role:"admin", extra:"ignored" };
const snapshot = `{
  "id": 7,
  "name": "Ava",
  "role": "admin"
}`;

try {
  const got = formatUser(user);
  if (got.trim() !== snapshot.trim()) throw new Error("Snapshot mismatch");
  rt.println("✅ snapshot match");
} catch (err) {
  rt.println("❌", err.message);
}
};
