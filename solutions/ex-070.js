// Exercise 070 — Chapter 7 canonical solution
window.exercise = function(rt) {
// Modal Dialog — open/close with ESC and click backdrop
const box = rt.section("Modal");
const openBtn = rt.el("button", { class:"btn" }, "Open Modal");
box.appendChild(openBtn);

function makeModal(){
  const backdrop = rt.el("div", { style:{
    position:"fixed", inset:"0", background:"rgba(0,0,0,.55)",
    display:"flex", alignItems:"center", justifyContent:"center", padding:"18px", zIndex:"9999"
  }});

  const panel = rt.el("div", { class:"card", style:{maxWidth:"520px", width:"100%"} },
    rt.el("h3", {}, "Modal Title"),
    rt.el("p", { class:"small" }, "Click outside, press ESC, or use the close button."),
    rt.el("div", { class:"row" },
      rt.el("button", { class:"btn", id:"closeBtn" }, "Close")
    )
  );

  backdrop.appendChild(panel);

  function close(){
    window.removeEventListener("keydown", onKey);
    backdrop.remove();
    rt.println("modal closed");
  }

  function onKey(e){ if(e.key==="Escape") close(); }

  backdrop.addEventListener("click", (e)=>{ if(e.target===backdrop) close(); });
  panel.querySelector("#closeBtn").addEventListener("click", close);
  window.addEventListener("keydown", onKey);

  document.body.appendChild(backdrop);
  rt.println("modal opened");
}

openBtn.addEventListener("click", makeModal);
rt.println("Click Open Modal.");
};
