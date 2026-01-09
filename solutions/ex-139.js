// Exercise 139 — Chapter 14 canonical solution
window.exercise = function(rt) {
// Breadth-First Search — traverse level by level
function bfs(root) {
  const q = [root];
  const out = [];
  while (q.length) {
    const n = q.shift();
    out.push(n.value);
    n.children.forEach(c => q.push(c));
  }
  return out;
}

rt.println("BFS order:", bfs(tree).join(" -> "));
};
