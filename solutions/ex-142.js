// Exercise 142 — Chapter 15 canonical solution
window.exercise = function(rt) {
// Query Strings — build URL with parameters safely
function buildQuery(params) {
  const usp = new URLSearchParams(params);
  return usp.toString();
}

const params = { q: "javascript fetch", page: 2, sort: "new" };
const qs = buildQuery(params);

rt.println("params:", JSON.stringify(params));
rt.println("querystring:", qs);
rt.println("full url:", "/search?" + qs);
};
