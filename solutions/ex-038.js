// Exercise 038 — Chapter 4 canonical solution
window.exercise = function(rt) {
// Date Formatter — show parts of today's date + ISO
const now = new Date();

rt.println("toString:", now.toString());
rt.println("ISO:", now.toISOString());
rt.println("year:", now.getFullYear());
rt.println("month (1-12):", now.getMonth() + 1);
rt.println("day:", now.getDate());
rt.println("weekday:", now.toLocaleDateString(undefined, { weekday: "long" }));

// custom YYYY-MM-DD
const yyyy = now.getFullYear();
const mm = String(now.getMonth() + 1).padStart(2, "0");
const dd = String(now.getDate()).padStart(2, "0");
rt.println("YYYY-MM-DD:", `${yyyy}-${mm}-${dd}`);
};
