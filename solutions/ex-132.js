// Exercise 132 — Chapter 14 canonical solution
window.exercise = function(rt) {
// Queue — FIFO data structure
class Queue {
  constructor() { this.items = []; }
  enqueue(x) { this.items.push(x); }
  dequeue() { return this.items.shift(); }
  size() { return this.items.length; }
}

const q = new Queue();
q.enqueue("A"); q.enqueue("B"); q.enqueue("C");
rt.println("dequeue:", q.dequeue());
rt.println("size:", q.size());
};
