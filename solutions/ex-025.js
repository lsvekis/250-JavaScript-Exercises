// Exercise 025 — Chapter 3 canonical solution
window.exercise = function(rt) {
// Map Transform — convert prices with tax
const prices = [4.5, 9.99, 12];
const taxRate = 0.13;

const withTax = prices.map(p => Number((p * (1 + taxRate)).toFixed(2)));

rt.println("prices:", JSON.stringify(prices));
rt.println("withTax:", JSON.stringify(withTax));
};
