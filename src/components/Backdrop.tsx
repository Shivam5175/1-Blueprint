"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Pt {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

/**
 * Global animated backdrop: a gold constellation particle field on canvas,
 * drifting mesh-gradient blobs, and a noise overlay. Honors reduced motion by
 * drawing a single static frame (still rich, just not moving) and pausing when
 * the tab is hidden.
 */
export default function Backdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let W = 0;
    let H = 0;
    let DPR = 1;
    let raf = 0;
    let pts: Pt[] = [];
    const RGB = "212,175,55";

    const resize = () => {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.width = Math.floor(window.innerWidth * DPR);
      H = canvas.height = Math.floor(window.innerHeight * DPR);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      const count =
        window.innerWidth < 700 ? 28 : window.innerWidth < 1100 ? 50 : 70;
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.22 * DPR,
        vy: (Math.random() - 0.5) * 0.22 * DPR,
        r: (Math.random() * 1.6 + 0.6) * DPR,
      }));
    };

    const draw = (move: boolean) => {
      ctx.clearRect(0, 0, W, H);
      const linkDist = (window.innerWidth < 700 ? 90 : 130) * DPR;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if (move) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${RGB},0.5)`;
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${RGB},${0.16 * (1 - dist / linkDist)})`;
            ctx.lineWidth = DPR * 0.6;
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      draw(true);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!raf) loop();
    };
    const stop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    resize();
    if (reduce) draw(false);
    else start();

    const onResize = () => {
      resize();
      if (reduce) draw(false);
    };
    const onVis = () => {
      if (document.hidden) stop();
      else if (!reduce) start();
    };
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVis);

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduce]);

  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop-mesh">
        <span className="backdrop-blob b1" />
        <span className="backdrop-blob b2" />
        <span className="backdrop-blob b3" />
      </div>
      <canvas ref={canvasRef} className="backdrop-canvas" />
      <div className="backdrop-noise" />
    </div>
  );
}
