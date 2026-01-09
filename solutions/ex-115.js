// Exercise 115 — Chapter 12 canonical solution
window.exercise = function(rt) {
// Inheritance — extend a base class and override a method
class Shape {
  constructor(name) { this.name = name; }
  area() { return 0; }
  describe() { return `${this.name} area=${this.area()}`; }
}

class Rectangle extends Shape {
  constructor(w, h) { super("Rectangle"); this.w = w; this.h = h; }
  area() { return this.w * this.h; }
}

class Circle extends Shape {
  constructor(r) { super("Circle"); this.r = r; }
  area() { return Math.PI * this.r * this.r; }
}

const r = new Rectangle(6, 4);
const c = new Circle(3);

rt.println(r.describe());
rt.println(c.describe());
};
