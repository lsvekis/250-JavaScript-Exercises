// Exercise 074 — Chapter 8 canonical solution
window.exercise = function(rt) {
// Accordion Component — expand/collapse sections (single-open)
const box = rt.section("Accordion");
const data = [
  { title: "What is JavaScript?", body: "A programming language used heavily on the web." },
  { title: "What is the DOM?", body: "A tree representation of the page you can modify with JS." },
  { title: "Why practice?", body: "Repetition + variation builds real skill." }
];

let openIndex = 0;

function render(){
  box.innerHTML = "<h2 style='margin:0 0 10px'>Accordion</h2>";
  data.forEach((item, i) => {
    const header = rt.el("button", { class:"btn", style:{width:"100%", justifyContent:"space-between"} }, item.title, rt.el("span", {}, i===openIndex ? "−" : "+"));
    const body = rt.el("div", { class:"output", style:{display: i===openIndex ? "block":"none", marginTop:"8px"} }, item.body);
    header.addEventListener("click", ()=>{ openIndex = (openIndex===i ? -1 : i); render(); });
    const wrap = rt.el("div", { class:"card", style:{marginTop:"10px"} }, header, body);
    box.appendChild(wrap);
  });
}
render();
rt.println("Accordion renders 3 sections. Only one is open at a time.");
};
