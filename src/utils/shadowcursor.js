// src/utils/shadowcursor.js
export default function initShadowCursor(opts = {}) {
  const canvasId = opts.canvasId || 'shadow-canvas';
  const canvas = document.getElementById(canvasId);
  if (!canvas) {
    console.warn('[shadowcursor] canvas not found:', canvasId);
    return () => {};
  }
  const ctx = canvas.getContext('2d', { alpha: true });
  let DPR = Math.max(1, window.devicePixelRatio || 1);
  function resize() {
    DPR = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = Math.floor(canvas.clientWidth * DPR);
    canvas.height = Math.floor(canvas.clientHeight * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  let x = -1000,
    y = -1000,
    tx = x,
    ty = y;
  let raf = null;
  function onMove(e) {
    x = e.clientX;
    y = e.clientY;
  }
  window.addEventListener('mousemove', onMove, { passive: true });

  function loop() {
    // smooth follower
    tx += (x - tx) * 0.14;
    ty += (y - ty) * 0.14;

    // fade a little each frame
    ctx.fillStyle = 'rgba(0,0,0,0.12)';
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    ctx.beginPath();
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.filter = 'blur(16px)';
    ctx.arc(tx, ty, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.filter = 'none';

    raf = requestAnimationFrame(loop);
  }
  raf = requestAnimationFrame(loop);

  return function cleanup() {
    cancelAnimationFrame(raf);
    window.removeEventListener('mousemove', onMove);
    window.removeEventListener('resize', resize);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
}
