// Exercise 218 — Chapter 22 canonical solution
window.exercise = function(rt) {
// ImageData — generate pixel art and scale it up (no external images)
const box = rt.section("Pixel Art (ImageData)");
const canvas = document.createElement("canvas");
canvas.width = 520;
canvas.height = 260;
canvas.style.width = "100%";
canvas.style.background = "rgba(255,255,255,.06)";
canvas.style.borderRadius = "10px";
box.appendChild(canvas);

const ctx = canvas.getContext("2d");

// create tiny art
const w = 32, h = 16;
const img = ctx.createImageData(w, h);

function setPixel(x,y,r,g,b,a=255){
  const i = (y*w + x) * 4;
  img.data[i] = r;
  img.data[i+1] = g;
  img.data[i+2] = b;
  img.data[i+3] = a;
}

for (let y=0; y<h; y++){
  for (let x=0; x<w; x++){
    const cx = x - w/2;
    const cy = y - h/2;
    const d = Math.sqrt(cx*cx + cy*cy);

    // background
    setPixel(x,y, 15, 23, 38);

    // face
    if (d < 7.2) setPixel(x,y, 255, 220, 80);

    // eyes
    if ((x===12 && y===6) || (x===20 && y===6)) setPixel(x,y, 10,10,10);

    // mouth
    if (y===10 && x>=12 && x<=20) setPixel(x,y, 10,10,10);
    if (y===9 && (x===12 || x===20)) setPixel(x,y, 10,10,10);
  }
}

// draw to offscreen, then scale up to main canvas
const off = document.createElement("canvas");
off.width = w; off.height = h;
off.getContext("2d").putImageData(img, 0, 0);

ctx.imageSmoothingEnabled = false;
ctx.clearRect(0,0,canvas.width,canvas.height);

const scale = Math.floor(Math.min(canvas.width / w, canvas.height / h));
const drawW = w * scale;
const drawH = h * scale;
const ox = Math.floor((canvas.width - drawW)/2);
const oy = Math.floor((canvas.height - drawH)/2);

ctx.drawImage(off, 0, 0, w, h, ox, oy, drawW, drawH);

rt.println("ImageData lets you set pixels directly, then scale up for crisp pixel art.");
};
