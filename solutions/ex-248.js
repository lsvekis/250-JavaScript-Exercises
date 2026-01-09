// Exercise 248 — Chapter 25 canonical solution
window.exercise = function(rt) {
// Capstone: Mini Router — hash routes with params
const box = rt.section("Mini Router");
const nav = rt.el("div", { class:"row" });
const a = rt.el("a", { class:"btn", href:"#/home" }, "Home");
const b = rt.el("a", { class:"btn", href:"#/users" }, "Users");
const c = rt.el("a", { class:"btn", href:"#/users/42" }, "User 42");
nav.appendChild(a); nav.appendChild(b); nav.appendChild(c);

const view = rt.el("div", { class:"output" }, "");
box.appendChild(nav);
box.appendChild(view);

function match(path){
  // returns {name, params}
  if (path === "/home" || path === "/") return { name:"home", params:{} };
  if (path === "/users") return { name:"users", params:{} };
  const m = path.match(/^\/users\/(\d+)$/);
  if (m) return { name:"user", params:{ id: m[1] } };
  return { name:"404", params:{} };
}

function render(){
  const hash = location.hash.replace("#","") || "/home";
  const { name, params } = match(hash);

  if (name === "home") view.textContent = "Home: Welcome!";
  else if (name === "users") view.textContent = "Users: try /users/42 for a param route.";
  else if (name === "user") view.textContent = `User page for id=${params.id}`;
  else view.textContent = "404: route not found";

  rt.println("route:", hash, "=>", name, params.id ? "(id="+params.id+")" : "");
}

window.addEventListener("hashchange", render);
render();

rt.println("Pattern: parse URL -> match -> render. Add more routes as an exercise.");
};
