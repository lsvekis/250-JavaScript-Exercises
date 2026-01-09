// Exercise 110 — Chapter 11 canonical solution
window.exercise = function(rt) {
// Compose / Pipe — build functions from smaller functions
const trim = s => s.trim();
const lower = s => s.toLowerCase();
const slug = s => s.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function pipe(...fns) {
  return (input) => fns.reduce((v, fn) => fn(v), input);
}

const toSlug = pipe(trim, lower, slug);

const title = "  JavaScript Functions: Scope & Closures!  ";
rt.println("title:", JSON.stringify(title));
rt.println("slug:", toSlug(title));

// Compose example (right-to-left)
function compose(...fns) {
  return (input) => fns.reduceRight((v, fn) => fn(v), input);
}
const toSlug2 = compose(slug, lower, trim);
rt.println("compose slug:", toSlug2(title));
};
