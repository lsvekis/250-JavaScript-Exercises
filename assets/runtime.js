(function(){
  function bindRuntime(appEl, outEl){
    function println(){
      const args = Array.from(arguments);
      console.log.apply(console, args);
      outEl.textContent += args.map(String).join(" ") + "\n";
    }
    function clear(){
      outEl.textContent = "";
      appEl.innerHTML = "";
    }
    function el(tag, attrs){
      attrs = attrs || {};
      const children = Array.prototype.slice.call(arguments, 2);
      const node = document.createElement(tag);
      Object.keys(attrs).forEach(k=>{
        const v = attrs[k];
        if(k === "class") node.className = v;
        else if(k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
        else if(k === "style" && typeof v === "object") Object.assign(node.style, v);
        else node.setAttribute(k, String(v));
      });
      children.forEach(c=>{
        if(c==null) return;
        node.appendChild(typeof c==="string" ? document.createTextNode(c) : c);
      });
      return node;
    }
    function input(placeholder, value){
      return el("input", {class:"input", placeholder: placeholder || "", value: value || ""});
    }
    function section(title){
      const box = el("div", {class:"card", style:{background:"rgba(255,255,255,.03)", marginTop:"12px"}});
      box.appendChild(el("h2", {style:{margin:"0 0 8px", fontSize:"16px"}}, title));
      appEl.appendChild(box);
      return box;
    }
    return {println, clear, el, input, section};
  }
  window.Runtime = { bindRuntime };
})();
