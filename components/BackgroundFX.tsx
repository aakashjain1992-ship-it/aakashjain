"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

const LINK_DIST = 150;
const MOUSE_RADIUS = 220;

export default function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.floor((width * height) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1 + Math.random() * 1.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        if (!reducedMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -20) n.x = width + 20;
          if (n.x > width + 20) n.x = -20;
          if (n.y < -20) n.y = height + 20;
          if (n.y > height + 20) n.y = -20;
        }
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const mDist = Math.hypot(midX - mouse.x, midY - mouse.y);
            const nearMouse = Math.max(0, 1 - mDist / MOUSE_RADIUS);
            const base = (1 - dist / LINK_DIST) * 0.16;
            const alpha = base + nearMouse * 0.3;
            ctx.strokeStyle =
              nearMouse > 0.25
                ? `rgba(255, 61, 242, ${alpha})`
                : `rgba(0, 229, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const mDist = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        const nearMouse = Math.max(0, 1 - mDist / MOUSE_RADIUS);
        ctx.fillStyle = `rgba(0, 229, 255, ${0.35 + nearMouse * 0.55})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + nearMouse * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reducedMotion) raf = requestAnimationFrame(draw);
    };

    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      // reduced-motion: repaint once so the highlight still responds
      if (reducedMotion) draw();
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      {/* base wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 70% -10%, rgba(0,229,255,0.10), transparent 60%), radial-gradient(ellipse 60% 45% at 10% 100%, rgba(255,61,242,0.06), transparent 60%), var(--void)",
        }}
      />
      <div className="dot-grid absolute inset-0 opacity-40" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
