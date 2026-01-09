// Exercise 111 — Chapter 12 canonical solution
window.exercise = function(rt) {
// Prototype Basics — create an object and set a prototype
const proto = {
  describe() { return `${this.name} (${this.kind})`; }
};

const pet = Object.create(proto);
pet.name = "Mochi";
pet.kind = "cat";

rt.println("pet.describe():", pet.describe());
rt.println("proto is prototype:", Object.getPrototypeOf(pet) === proto);
};
