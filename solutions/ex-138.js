// Exercise 138 — Chapter 14 canonical solution
window.exercise = function(rt) {
// Depth-First Search — traverse a tree
const tree = {
  value: "A",
  children: [
    { value: "B", children: [{ value: "D", children: [] }] },
    { value: "C", children: [{ value: "E", children: [] }, { value: "F", children: [] }] }
  ]
};

function dfs(node, visit) {
  visit(node.value);
  node.children.forEach(child => dfs(child, visit));
}

const visited = [];
dfs(tree, v => visited.push(v));
rt.println("DFS order:", visited.join(" -> "));
};
