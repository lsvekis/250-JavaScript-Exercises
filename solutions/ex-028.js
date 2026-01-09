// Exercise 028 — Chapter 3 canonical solution
window.exercise = function(rt) {
// Objects Basics — create, read, update, computed keys
const user = {
  name: "Sasha",
  city: "Toronto",
  role: "learner"
};

rt.println("user:", JSON.stringify(user));
rt.println("name:", user.name);
rt.println("city:", user["city"]);

user.role = "developer";
const key = "favoriteLanguage";
user[key] = "JavaScript";

rt.println("updated:", JSON.stringify(user));
};
