// Exercise 177 — Chapter 18 canonical solution
window.exercise = function(rt) {
// Focus Trap (Modal) — keep keyboard focus inside a modal
const box = rt.section("Focus Trap Modal");
const openBtn = rt.el("button", { class:"btn" }, "Open Modal");
box.appendChild(openBtn);

function getFocusable(root){
  return [...root.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')]
    .filter(el => !el.disabled);
}

openBtn.addEventListener("click", ()=>{
  const backdrop = rt.el("div", { style:{position:"fixed", inset:"0", background:"rgba(0,0,0,.55)", display:"grid", placeItems:"center", zIndex:"9999"} });
  const modal = rt.el("div", { class:"card", style:{width:"min(520px, 92vw)"} },
    rt.el("h3", {}, "Modal"),
    rt.el("p", { class:"small" }, "Tab/Shift+Tab stays inside. Esc closes."),
    rt.input("Type here…"),
    rt.el("div",{class:"row", style:{marginTop:"10px"}}, 
      rt.el("button",{class:"btn"}, "Action"),
      rt.el("button",{class:"btn"}, "Close")
    )
  );
  backdrop.appendChild(modal);
  document.body.appendChild(backdrop);

  const closeBtn = modal.querySelectorAll("button")[1];
  const focusables = ()=>getFocusable(modal);

  function close(){
    backdrop.remove();
    openBtn.focus();
  }

  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", (e)=>{ if(e.target === backdrop) close(); });
  document.addEventListener("keydown", function onKey(e){
    if (!document.body.contains(backdrop)) { document.removeEventListener("keydown", onKey); return; }
    if (e.key === "Escape") close();
    if (e.key !== "Tab") return;

    const f = focusables();
    const first = f[0], last = f[f.length-1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  focusables()[0].focus();
});
};
