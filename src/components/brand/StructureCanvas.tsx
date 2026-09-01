"use client";

import { useEffect, useRef } from "react";

export function StructureCanvas({ caption }: { caption?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const outer = [
      { x: 0, y: 1.15, z: 0 },
      { x: 1.15, y: 0, z: 1.15 },
      { x: 1.15, y: 0, z: -1.15 },
      { x: -1.15, y: 0, z: 1.15 },
      { x: -1.15, y: 0, z: -1.15 },
      { x: 0, y: -1.15, z: 0 },
    ];
    const inner = outer.map((n) => ({ x: n.x * 0.42, y: n.y * 0.42, z: n.z * 0.42 }));
    const edges: [number, number][] = [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [5, 1],
      [5, 2],
      [5, 3],
      [5, 4],
      [1, 2],
      [2, 4],
      [4, 3],
      [3, 1],
    ];

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const project = (x: number, y: number, z: number, w: number, h: number, t: number) => {
      const yaw = t * 0.28;
      const pitch = 0.48;
      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);
      const cosP = Math.cos(pitch);
      const sinP = Math.sin(pitch);
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;
      const y1 = y * cosP - z1 * sinP;
      const z2 = y * sinP + z1 * cosP;
      const scale = 150 / (2.7 + z2);
      return { x: w / 2 + x1 * scale, y: h / 2 + y1 * scale, z: z2 };
    };

    const drawCube = (
      nodes: { x: number; y: number; z: number }[],
      t: number,
      w: number,
      h: number,
      color: string,
      width: number,
    ) => {
      const pts = nodes.map((n) => project(n.x, n.y, n.z, w, h, t));
      for (const [a, b] of edges) {
        ctx.beginPath();
        ctx.moveTo(pts[a].x, pts[a].y);
        ctx.lineTo(pts[b].x, pts[b].y);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
      }
      return pts;
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      const t = reduce ? 2.1 : frame / 90;

      ctx.strokeStyle = "rgba(43,127,212,0.12)";
      ctx.lineWidth = 1;
      for (let i = -3; i <= 3; i++) {
        ctx.beginPath();
        ctx.moveTo(width / 2 + i * 42, height * 0.16);
        ctx.lineTo(width / 2 + i * 68, height * 0.88);
        ctx.stroke();
      }

      drawCube(outer, t, width, height, "rgba(43,127,212,0.9)", 1.6);
      const innerPts = drawCube(inner, t, width, height, "rgba(201,164,90,0.95)", 1.5);
      innerPts.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = "#e4c57a";
        ctx.fill();
      });

      if (!reduce) {
        frame += 1;
        raf = requestAnimationFrame(draw);
      }
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <figure className="relative overflow-hidden border border-line bg-ink-2">
      <canvas
        ref={ref}
        className="h-[420px] w-full md:h-[520px]"
        aria-hidden="true"
        width={1200}
        height={520}
      />
      {caption && (
        <figcaption className="border-t border-line px-5 py-4 font-mono text-[11px] leading-6 tracking-[0.08em] text-paper-dim">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
