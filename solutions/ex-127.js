// Exercise 127 — Chapter 13 canonical solution
window.exercise = function(rt) {
// Stack Trace — learn where an error happened
function level1(){ level2(); }
function level2(){ level3(); }
function level3(){
  throw new Error("Boom — something went wrong");
}

try {
  level1();
} catch (err) {
  rt.println("message:", err.message);
  rt.println("stack (first lines):");
  const lines = String(err.stack || "").split("\n").slice(0, 5);
  lines.forEach(l => rt.println(l));
  rt.println("Tip: stack traces help you find the call path.");
}
};
