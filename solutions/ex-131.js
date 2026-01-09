// Exercise 131 — Chapter 14 canonical solution
window.exercise = function(rt) {
// Stack — LIFO data structure
class Stack {
  constructor() { this.items = []; }
  push(x) { this.items.push(x); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  size() { return this.items.length; }
}

const s = new Stack();
s.push(1); s.push(2); s.push(3);
rt.println("peek:", s.peek());
rt.println("pop:", s.pop());
rt.println("size:", s.size());
};
