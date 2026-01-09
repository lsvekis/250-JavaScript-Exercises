// Exercise 117 — Chapter 12 canonical solution
window.exercise = function(rt) {
// Method Chaining — fluent API style
class StringBuilder {
  constructor() { this.parts = []; }
  add(text) { this.parts.push(String(text)); return this; }
  space() { this.parts.push(" "); return this; }
  line() { this.parts.push("\n"); return this; }
  toString() { return this.parts.join(""); }
}

const sb = new StringBuilder()
  .add("Hello").space().add("world!")
  .line()
  .add("Chaining").space().add("is").space().add("handy.");

rt.println(sb.toString());
};
