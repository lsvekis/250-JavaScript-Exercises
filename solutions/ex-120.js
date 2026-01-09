// Exercise 120 — Chapter 12 canonical solution
window.exercise = function(rt) {
// Class + DOM Component — reusable "like button" widget
const box = rt.section("Like Button Component");

class LikeButton {
  constructor(label = "Like") {
    this.count = 0;
    this.root = rt.el("div", { class:"card" });
    this.btn = rt.el("button", { class:"btn" }, label);
    this.out = rt.el("div", { class:"output" }, "0 likes");

    this.btn.addEventListener("click", () => {
      this.count++;
      this.render();
    });

    this.root.appendChild(rt.el("h3", {}, "Widget"));
    this.root.appendChild(this.btn);
    this.root.appendChild(this.out);
    this.render();
  }

  render() {
    this.out.textContent = `${this.count} like${this.count === 1 ? "" : "s"}`;
  }
}

box.appendChild(new LikeButton("👍 Like").root);
box.appendChild(new LikeButton("⭐ Star").root);

rt.println("Each widget instance maintains its own state.");
};
