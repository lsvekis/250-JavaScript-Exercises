// Exercise 032 — Chapter 4 canonical solution
window.exercise = function(rt) {
// Split & Join — turn a sentence into slug + back again
const sentence = "Build websites with JavaScript fast";
const words = sentence.toLowerCase().split(" ");
const slug = words.join("-");

rt.println("sentence:", sentence);
rt.println("words:", JSON.stringify(words));
rt.println("slug:", slug);

// reverse: slug back to title-ish text
const rebuilt = slug.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
rt.println("rebuilt:", rebuilt);
};
