// Exercise 245 — Chapter 25 canonical solution
window.exercise = function(rt) {
// Capstone: Markdown Preview (tiny subset) — bold, italic, code, links
const box = rt.section("Mini Markdown Preview");
const ta = rt.el("textarea", { class:"input", rows:"8" });
ta.value = [
  "# Title (ignored in this mini parser)",
  "",
  "Type **bold**, *italic*, and `inline code`.",
  "Links: [OpenAI](https://openai.com)",
  "",
  "- (lists not supported here)",
].join("\n");

const out = rt.el("div", { class:"card", style:{marginTop:"10px"} });
box.appendChild(ta);
box.appendChild(out);

function escapeHtml(s){
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function render(md){
  let html = escapeHtml(md);

  // very small markdown subset:
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
  html = html.replace(/`(.+?)`/g, "<code>$1</code>");
  html = html.replace(/\[(.+?)\]\((https?:\/\/.+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  // line breaks
  html = html.replace(/\n/g, "<br>");

  out.innerHTML = html;
}

ta.addEventListener("input", ()=> render(ta.value));
render(ta.value);

rt.println("Security note: we escape HTML first, then apply controlled replacements.");
};
