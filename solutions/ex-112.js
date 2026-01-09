// Exercise 112 — Chapter 12 canonical solution
window.exercise = function(rt) {
// Constructor Function — build objects with new
function User(name, role) {
  this.name = name;
  this.role = role;
  this.createdAt = new Date().toLocaleDateString();
}

User.prototype.summary = function() {
  return `${this.name} — ${this.role} (created ${this.createdAt})`;
};

const a = new User("Ava", "admin");
const b = new User("Ben", "user");

rt.println(a.summary());
rt.println(b.summary());
rt.println("instanceof User:", a instanceof User);
};
