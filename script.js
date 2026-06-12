const canvas = document.querySelector("#motion-grid");
const ctx = canvas.getContext("2d");

function resize() {
  const scale = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * scale;
  canvas.height = window.innerHeight * scale;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
}

function draw() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const t = performance.now() * 0.00012;

  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = "rgba(24, 255, 0, 0.18)";
  ctx.lineWidth = 1.4;

  for (let i = -3; i < 9; i += 1) {
    ctx.beginPath();
    ctx.moveTo(-120, h * 0.72 + i * 128 + Math.sin(t + i) * 35);
    ctx.lineTo(w + 120, h * 0.08 + i * 96 + Math.cos(t + i) * 28);
    ctx.stroke();
  }

  requestAnimationFrame(draw);
}

resize();
draw();
window.addEventListener("resize", resize);
