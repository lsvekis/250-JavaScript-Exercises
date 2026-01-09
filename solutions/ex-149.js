// Exercise 149 — Chapter 15 canonical solution
window.exercise = function(rt) {
// Pagination — load pages of data (mock) and append to list
const box = rt.section("Pagination");
const btn = rt.el("button", { class:"btn" }, "Load Next Page");
const ul = rt.el("ul", {});
box.appendChild(btn);
box.appendChild(ul);

let page = 0;

function mockPage(p) {
  return new Promise((resolve)=> {
    setTimeout(()=> {
      const items = Array.from({ length: 5 }, (_, i) => ({ id: p*5 + i + 1, title: `Item ${p*5 + i + 1}` }));
      resolve(items);
    }, 350);
  });
}

btn.addEventListener("click", async ()=>{
  btn.disabled = true;
  const items = await mockPage(page++);
  items.forEach(it => ul.appendChild(rt.el("li", {}, `#${it.id} ${it.title}`)));
  btn.disabled = false;
  rt.println("loaded page:", page);
});
};
