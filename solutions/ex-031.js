// Exercise 031 — Chapter 4 canonical solution
window.exercise = function(rt) {
// String Toolkit — common string methods
const text = "  JavaScript makes the web interactive!  ";

rt.println("raw:", JSON.stringify(text));
rt.println("trim:", JSON.stringify(text.trim()));
rt.println("upper:", text.trim().toUpperCase());
rt.println("lower:", text.trim().toLowerCase());
rt.println("includes 'web':", text.includes("web"));
rt.println("replace 'web'->'browser':", text.replace("web", "browser").trim());
};
