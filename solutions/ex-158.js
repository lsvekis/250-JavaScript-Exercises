// Exercise 158 — Chapter 16 canonical solution
window.exercise = function(rt) {
// Inline Edit — click text to edit, press Enter to save
const box = rt.section("Inline Edit");
const label = rt.el("div", { class:"output", style:{cursor:"pointer"} }, "Click to edit me");
box.appendChild(label);

function startEdit(){
  const input = rt.input("Edit…");
  input.value = label.textContent;
  label.replaceWith(input);
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);

  function finish(save){
    const value = save ? input.value.trim() : label.textContent;
    label.textContent = value || "Untitled";
    input.replaceWith(label);
    rt.println("saved:", label.textContent);
  }

  input.addEventListener("keydown", (e)=>{
    if (e.key === "Enter") finish(true);
    if (e.key === "Escape") finish(false);
  });
  input.addEventListener("blur", ()=> finish(true));
}

label.addEventListener("click", startEdit);
rt.println("Enter=save, Esc=cancel, blur=save.");
};
