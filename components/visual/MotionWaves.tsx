import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimationFrame } from "motion/react";

type Props = {
  className?: string;
  /** 0..1 posición vertical del centro de la honda */
  center?: number;
  /** altura relativa de la banda */
  heightPct?: number;
  /** ancho del trazo de las ondas */
  strokeWidth?: number;
  /** velocidad base */
  speed?: number;
};

/**
 * Fondo con una única banda de ondas animadas usando Motion (motion.dev).
 * Implementado en SVG para nitidez y rendimiento, con 5 curvas que se
 * entrelazan a distinta fase y velocidad.
 */
export default function MotionWaves({
  className,
  center = 0.68,
  heightPct = 0.28,
  strokeWidth = 1.8,
  speed = 0.7,
}: Props) {
  const ref = React.useRef<SVGSVGElement | null>(null);
  const [t, setT] = React.useState(0);

  useAnimationFrame((time) => {
    setT(time / 1000);
  });

  return (
    <div className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}>
      <svg
        ref={ref}
        className="h-full w-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradientes de color */}
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5C4DFF" />
            <stop offset="50%" stopColor="#DB495E" />
            <stop offset="100%" stopColor="#00A8FF" />
          </linearGradient>
          <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F39C12" />
            <stop offset="50%" stopColor="#9B59B6" />
            <stop offset="100%" stopColor="#27C1FF" />
          </linearGradient>

          {/* Máscara de desvanecido lateral (negro=oculto, blanco=visible) */}
          <linearGradient id="fade-x" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#000" />
            <stop offset="6%" stopColor="#000" />
            <stop offset="14%" stopColor="#fff" />
            <stop offset="86%" stopColor="#fff" />
            <stop offset="94%" stopColor="#000" />
            <stop offset="100%" stopColor="#000" />
          </linearGradient>
          <mask id="fade-mask">
            <rect x="0" y="0" width="1000" height="1000" fill="url(#fade-x)" />
          </mask>
        </defs>

        <g mask="url(#fade-mask)">
        {Array.from({ length: 5 }).map((_, i) => {
          const height = 1000 * heightPct;
          const yCenter = 1000 * center;
          const phase = i * Math.PI * 0.35;
          const localSpeed = speed * (0.6 + i * 0.1);
          const amplitude = height * (0.28 + 0.16 * Math.cos(i));
          const color = i % 2 === 0 ? "url(#g1)" : "url(#g2)";
          const opacity = 0.28 + (i === 2 ? 0.25 : 0);

          const path = buildWavePath({
            width: 1000,
            height: 1000,
            y: yCenter + Math.sin(t * localSpeed + phase) * height * 0.05,
            amplitude,
            freq: 1.2 + i * 0.25,
            time: t * localSpeed + phase,
          });

          return (
            <motion.path
              key={i}
              d={path}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth + (i === 2 ? 1 : 0)}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ mixBlendMode: "screen", opacity }}
            />
          );
        })}
        </g>
      </svg>
    </div>
  );
}

function buildWavePath({
  width,
  height,
  y,
  amplitude,
  freq,
  time,
}: {
  width: number;
  height: number;
  y: number;
  amplitude: number;
  freq: number;
  time: number;
}) {
  const points: Array<[number, number]> = [];
  const steps = 24;
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width;
    const k = (i / steps) * Math.PI * 2 * freq + time;
    const env = gaussian(i / steps, 0.5, 0.22);
    const yy = y + Math.sin(k) * amplitude * 0.6 * env + Math.sin(k * 2.6) * amplitude * 0.18 * env;
    points.push([x, yy]);
  }

  // construimos curva suave con comandos C (Bezier cúbica)
  let d = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    const p0 = points[i - 1];
    const p1 = points[i];
    const cp1x = p0[0] + (p1[0] - p0[0]) / 3;
    const cp1y = p0[1];
    const cp2x = p0[0] + ((p1[0] - p0[0]) / 3) * 2;
    const cp2y = p1[1];
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1[0]} ${p1[1]}`;
  }
  return d;
}

function gaussian(x: number, mu: number, sigma: number) {
  const a = (x - mu) / (sigma || 0.0001);
  return Math.exp(-0.5 * a * a);
}


