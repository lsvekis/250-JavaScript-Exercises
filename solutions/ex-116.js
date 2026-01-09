// Exercise 116 — Chapter 12 canonical solution
window.exercise = function(rt) {
// Getters & Setters — validate and compute derived values
class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  get fullName() { return `${this.first} ${this.last}`; }
  set fullName(value) {
    const parts = value.trim().split(/\s+/);
    if (parts.length < 2) throw new Error("Provide first and last name");
    this.first = parts[0];
    this.last = parts.slice(1).join(" ");
  }
}

const p = new Person("Ava", "Chen");
rt.println("fullName:", p.fullName);
p.fullName = "Ben Cruz";
rt.println("updated:", p.fullName);
};
