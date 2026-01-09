// Exercise 133 — Chapter 14 canonical solution
window.exercise = function(rt) {
// Linked List — basic singly linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const n = new Node(value);
    if (!this.head) { this.head = n; return; }
    let cur = this.head;
    while (cur.next) cur = cur.next;
    cur.next = n;
  }
  toArray() {
    const out = [];
    let cur = this.head;
    while (cur) { out.push(cur.value); cur = cur.next; }
    return out;
  }
}

const list = new LinkedList();
list.append(10); list.append(20); list.append(30);
rt.println("list:", JSON.stringify(list.toArray()));
};
