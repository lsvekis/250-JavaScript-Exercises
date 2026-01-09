// Exercise 030 — Chapter 3 canonical solution
window.exercise = function(rt) {
// JSON Round Trip — stringify + parse
const session = {
  id: "abc123",
  user: { name: "Lars", isLoggedIn: true },
  scores: [10, 20, 30]
};

const json = JSON.stringify(session);
rt.println("json:", json);

const parsed = JSON.parse(json);
rt.println("parsed.user.name:", parsed.user.name);
rt.println("parsed.scores[1]:", parsed.scores[1]);
rt.println("equal content:", JSON.stringify(parsed) === JSON.stringify(session));
};
