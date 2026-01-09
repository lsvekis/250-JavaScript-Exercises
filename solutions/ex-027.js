// Exercise 027 — Chapter 3 canonical solution
window.exercise = function(rt) {
// Reduce Total — shopping cart subtotal
const cart = [
  { name: "Notebook", price: 4.5, qty: 2 },
  { name: "Pen", price: 1.25, qty: 4 },
  { name: "Sticker", price: 0.99, qty: 3 }
];

const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

rt.println("cart:", JSON.stringify(cart));
rt.println("subtotal:", subtotal.toFixed(2));
};
