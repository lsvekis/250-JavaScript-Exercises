// Exercise 065 — Chapter 7 canonical solution
window.exercise = function(rt) {
// Debounce — delay an action until typing stops
const box = rt.section("Debounced Search");
const input = rt.input("Type to 'search'…");
const status = rt.el("div", { class:"output" }, "Waiting…");
box.appendChild(input);
box.appendChild(status);

let tId = null;
function debounce(fn, wait){
  return function(){
    const args = arguments;
    clearTimeout(tId);
    tId = setTimeout(()=>fn.apply(null, args), wait);
  };
}

const doSearch = debounce((q)=>{
  status.textContent = `Searching for: "${q}"`;
  rt.println("search fired for:", q);
}, 400);

input.addEventListener("input", ()=> {
  status.textContent = "Typing…";
  doSearch(input.value.trim());
});

rt.println("Debounce waits 400ms after last keystroke.");
};
