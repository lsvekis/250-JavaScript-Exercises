// Exercise 235 — Chapter 24 canonical solution
window.exercise = function(rt) {
// Accessible Tabs — keyboard navigation (Arrow keys) + aria-selected
const box = rt.section("Accessible Tabs");
const tablist = rt.el("div", { role:"tablist", class:"row" });

const panels = rt.el("div", {});
box.appendChild(tablist);
box.appendChild(panels);

const data = [
  { id:"t1", label:"Overview", body:"This is the overview panel." },
  { id:"t2", label:"Details", body:"This is the details panel." },
  { id:"t3", label:"Notes", body:"This is the notes panel." },
];

const tabs = [];
const panelEls = [];

data.forEach((t, i)=>{
  const tab = rt.el("button", {
    class:"btn",
    role:"tab",
    id: t.id,
    tabindex: i === 0 ? "0" : "-1",
    "aria-selected": i === 0 ? "true" : "false",
    "aria-controls": t.id + "-panel"
  }, t.label);

  const panel = rt.el("div", {
    class:"card",
    role:"tabpanel",
    id: t.id + "-panel",
    "aria-labelledby": t.id,
    style:{marginTop:"10px", display: i === 0 ? "block" : "none"}
  }, rt.el("div",{class:"output"}, t.body));

  tablist.appendChild(tab);
  panels.appendChild(panel);
  tabs.push(tab);
  panelEls.push(panel);
});

function setActive(idx){
  tabs.forEach((t,i)=>{
    const active = i === idx;
    t.setAttribute("aria-selected", active ? "true" : "false");
    t.tabIndex = active ? 0 : -1;
    panelEls[i].style.display = active ? "block" : "none";
  });
  tabs[idx].focus();
}

tabs.forEach((t,i)=> t.addEventListener("click", ()=> setActive(i)));

tablist.addEventListener("keydown", (e)=>{
  const current = tabs.findIndex(t => t.getAttribute("aria-selected") === "true");
  if (e.key === "ArrowRight") { e.preventDefault(); setActive((current + 1) % tabs.length); }
  if (e.key === "ArrowLeft") { e.preventDefault(); setActive((current - 1 + tabs.length) % tabs.length); }
  if (e.key === "Home") { e.preventDefault(); setActive(0); }
  if (e.key === "End") { e.preventDefault(); setActive(tabs.length - 1); }
});

rt.println("Use ArrowLeft/ArrowRight/Home/End while focused on the tabs.");
};
