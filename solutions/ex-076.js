// Exercise 076 — Chapter 8 canonical solution
window.exercise = function(rt) {
// Mock Fetch — simulate network with Promise + setTimeout
const box = rt.section("Mock Fetch");
const btn = rt.el("button", { class:"btn" }, "Load Products");
const out = rt.el("div", { class:"output" }, "Click to load…");
box.appendChild(btn);
box.appendChild(out);

function mockFetchProducts(){
  return new Promise((resolve) => {
    setTimeout(()=> {
      resolve([
        { id: 1, name: "Notebook", price: 4.5 },
        { id: 2, name: "Pen", price: 1.25 },
        { id: 3, name: "Sticker", price: 0.99 }
      ]);
    }, 600);
  });
}

btn.addEventListener("click", async ()=>{
  out.textContent = "Loading…";
  const products = await mockFetchProducts();
  out.textContent = products.map(p => `${p.name} — $${p.price}`).join("\n");
  rt.println("loaded", products.length, "products");
});
};
