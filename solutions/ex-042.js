// Exercise 042 — Chapter 5 canonical solution
window.exercise = function(rt) {
// Find & FindIndex — locate a record in an array of objects
const users = [
  { id: 1, name: "Ava", role: "admin" },
  { id: 2, name: "Ben", role: "user" },
  { id: 3, name: "Cam", role: "user" }
];

const firstUser = users.find(u => u.role === "user");
const idx = users.findIndex(u => u.name === "Cam");

rt.println("first user role=user:", JSON.stringify(firstUser));
rt.println("index of Cam:", idx);
};
