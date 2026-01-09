// Exercise 176 — Chapter 18 canonical solution
window.exercise = function(rt) {
// Web Component Lite — build a small custom element (no shadow DOM)
const box = rt.section("Custom Element");
class XBadge extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute("label") || "Badge";
    const value = this.getAttribute("value") || "0";
    this.innerHTML = `
      <div class="card">
        <div class="small">${label}</div>
        <div class="output">${value}</div>
      </div>
    `;
  }
}
customElements.define("x-badge", XBadge);

box.appendChild(document.createElement("x-badge")).setAttribute("label","Stars");
box.lastChild.setAttribute("value","42");

box.appendChild(document.createElement("x-badge")).setAttribute("label","XP");
box.lastChild.setAttribute("value","9001");

rt.println("Custom elements let you create reusable tags.");
};
