// Exercise 092 — Chapter 10 canonical solution
window.exercise = function(rt) {
// Shopping Cart — add items, quantities, total
const box = rt.section("Mini Cart");
const products = [
  { id: 1, name: "Notebook", price: 4.50 },
  { id: 2, name: "Pen", price: 1.25 },
  { id: 3, name: "Sticker", price: 0.99 }
];

const list = rt.el("div", {});
const cartOut = rt.el("div", { class:"output" }, "");
box.appendChild(list);
box.appendChild(cartOut);

const cart = new Map(); // id -> qty

function total(){
  let sum = 0;
  for (const [id, qty] of cart.entries()) {
    const p = products.find(x => x.id === id);
    sum += p.price * qty;
  }
  return sum;
}

function render(){
  list.innerHTML = "";
  products.forEach(p => {
    const add = rt.el("button", { class:"btn" }, `Add ${p.name}`);
    add.addEventListener("click", ()=>{
      cart.set(p.id, (cart.get(p.id) || 0) + 1);
      render();
    });
    list.appendChild(rt.el("div", { class:"row", style:{marginTop:"8px"} },
      rt.el("div", { class:"small", style:{minWidth:"220px"} }, `${p.name} — $${p.price.toFixed(2)}`),
      add
    ));
  });

  const lines = [];
  for (const [id, qty] of cart.entries()) {
    const p = products.find(x => x.id === id);
    lines.push(`${p.name} x${qty} = $${(p.price*qty).toFixed(2)}`);
  }
  cartOut.textContent = (lines.join("\n") || "(cart empty)") + `\n\nTotal: $${total().toFixed(2)}`;
}

render();
};
