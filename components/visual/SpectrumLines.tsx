import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** Intensidad de ondulación en píxeles */
  amplitude?: number;
  /** Velocidad base de animación */
  speed?: number;
  /** Número de bandas/líneas */
  bands?: number;
  /** Centro vertical (0..1) de la franja de ondas */
  bandCenter?: number;
  /** Altura relativa (0..1 del alto del contenedor) de la franja */
  bandHeightPct?: number;
  /** Escala multiplicativa del grosor de las líneas */
  lineWidthScale?: number;
};

/**
 * Fondo animado con líneas de espectro multicolor.
 * Renderiza en <canvas> para rendimiento y ocupa todo el contenedor.
 *
 * Inspiración: ondas finas con degradados vibrantes, movimiento suave horizontal.
 */
export default function SpectrumLines({
  className,
  amplitude = 36,
  speed = 0.22,
  bands = 28,
  bandCenter = 0.60,
  bandHeightPct = 0.34,
  lineWidthScale = 1,
}: Props) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const rafRef = React.useRef<number | null>(null);
  const startRef = React.useRef<number>(0);
  const dprRef = React.useRef<number>(1);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      const { clientWidth, clientHeight } = canvas;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      dprRef.current = dpr;
      canvas.width = Math.max(1, Math.floor(clientWidth * dpr));
      canvas.height = Math.max(1, Math.floor(clientHeight * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onVisibility = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else {
        startRef.current = performance.now();
        rafRef.current = requestAnimationFrame(loop);
      }
    };

    const palette = getPalette();

    // Semillas determinísticas por línea para variar ritmos
    const seeds = new Array(Math.max(1, Math.floor(bands)))
      .fill(0)
      .map((_, i) => seeded(i * 97 + 13));

    const loop = (t: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) return;

      const elapsed = (t - startRef.current) / 1000;

      // Clear with subtle transparent fill for smoother blending
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter"; // mezcla aditiva entre líneas

      const lines = Math.max(1, Math.floor(bands));
      const yCenter = h * bandCenter;
      const hBand = Math.max(80, h * bandHeightPct);
      const spacing = lines > 1 ? hBand / (lines - 1) : 0;
      const yStart = yCenter - hBand / 2;

      for (let i = 0; i < lines; i++) {
        const yBase = yStart + spacing * i;
        const seed = seeds[i] || 0.5;
        const phase = i * 0.6 + seed * 3.2;
        const centerRatio = lines > 1 ? i / (lines - 1) : 0.5; // 0..1
        const proximityToCenter = 1 - Math.pow(Math.abs(centerRatio - 0.5) * 2, 1.2); // 0..1
        const ampPulse = 0.55 + proximityToCenter * 0.7 + seed * 0.2;
        const amp = amplitude * ampPulse * (1 + Math.sin(elapsed * (0.18 + seed * 0.22) + phase) * 0.08);
        const lineWidth = (0.85 + proximityToCenter * 1.3) * lineWidthScale;
        const dir = seed > 0.5 ? 1 : -1; // algunas en sentido contrario
        const flow = 0.6 + seed * 1.2; // velocidad horizontal
        const timeScale = speed * (0.8 + seed * 0.9); // distintas velocidades

        // gradient color per line
        const grad = ctx.createLinearGradient(0, yBase - amp, w, yBase + amp);
        const c = palette[i % palette.length];
        grad.addColorStop(0, c[0]);
        grad.addColorStop(0.5, c[1]);
        grad.addColorStop(1, c[2]);

        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = grad;
        ctx.globalAlpha = 0.35 + proximityToCenter * 0.5; // bordes difuminados
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        // patrón de puntos fino para textura
        ctx.setLineDash([]); // continuo para aspecto de honda

        ctx.beginPath();

        const segments = Math.max(160, Math.floor(w / 5));
        for (let s = 0; s <= segments; s++) {
          const xn = s / segments; // 0..1
          const x = xn * w;
          const k = xn * Math.PI * 2 + elapsed * flow * dir * 0.9;
          // Envolvente tipo "onda" (gaussiana) con leve desplazamiento
          const mu = 0.5 + Math.sin(elapsed * (0.12 + seed * 0.08) + phase) * 0.05;
          const sigma = 0.18 + 0.02 * Math.sin(elapsed * 0.1 + i * 0.2);
          const envelope = gaussian(xn, mu, sigma);
          const y =
            yBase +
            // Onda principal con envolvente (onda central pronunciada)
            Math.sin(k * 1.3 + elapsed * timeScale * 1.5 + phase) * amp * 0.55 * envelope +
            // armónicos suaves para riqueza visual
            Math.sin(k * 3.0 + elapsed * timeScale * 2.4 + phase * 1.6) * amp * 0.25 * envelope +
            Math.sin(k * 6.5 + elapsed * timeScale * 3.8 + phase * 2.1) * amp * 0.12 * envelope +
            // deriva vertical lenta para entrelazar
            Math.sin(elapsed * (0.10 + seed * 0.16) + phase) * amplitude * 0.16 * dir;
          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // add soft glow overlay
      ctx.globalAlpha = 0.16;
      const glow = ctx.createLinearGradient(0, 0, 0, h);
      glow.addColorStop(0, "rgba(255,255,255,0.8)");
      glow.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h * 0.35);

      rafRef.current = requestAnimationFrame(loop);
    };

    resize();
    startRef.current = performance.now();
    rafRef.current = requestAnimationFrame(loop);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [amplitude, speed, bands]);

  return (
    <div className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}>
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="absolute inset-0 mix-blend-screen opacity-80" />
    </div>
  );
}

function getPalette() {
  // Colores coherentes con la identidad (morado, coral, cian, toques dorados)
  return [
    ["#5C4DFF", "#6B5BFF", "#7A69FF"],
    ["#DB495E", "#F0607A", "#FF7A95"],
    ["#00A8FF", "#27C1FF", "#59D7FF"],
    ["#9B59B6", "#B06ECC", "#C386E0"],
    ["#F39C12", "#F5B041", "#F7C46A"],
    ["#16A085", "#1ABC9C", "#52D6C9"],
    ["#34495E", "#4B6584", "#6C7A89"],
  ] as const;
}

function seeded(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function gaussian(x: number, mu: number, sigma: number) {
  const a = (x - mu) / (sigma || 0.0001);
  return Math.exp(-0.5 * a * a);
}


