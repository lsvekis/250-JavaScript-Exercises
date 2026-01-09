// Exercise 145 — Chapter 15 canonical solution
window.exercise = function(rt) {
// Headers & Content Types — build a request config object
function makeJsonRequest(method, body) {
  return {
    method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(body)
  };
}

const req = makeJsonRequest("POST", { name:"Ava", role:"user" });
rt.println(JSON.stringify(req, null, 2));
};
