import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import * as React from "react";

type Props = { className?: string };

/**
 * Orbes líquidos luminosos con mezcla aditiva para un efecto "liquid glass".
 * No interactúan (pointer-events none) y se renderizan detrás del contenido.
 */
export function LiquidOrbs({ className }: Props) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-0 overflow-hidden mix-blend-soft-light",
        className
      )}
      aria-hidden
    >
      <motion.div
        initial={{ x: -200, y: -100, scale: 1 }}
        animate={{ x: [ -200, 50, -120 ], y: [ -100, -60, -140 ], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -left-10 h-[45vmin] w-[45vmin] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(27,20,100,0.55), transparent 60%)",
        }}
      />
      <motion.div
        initial={{ x: 200, y: -120, scale: 1 }}
        animate={{ x: [ 200, 20, 180 ], y: [ -120, -40, -90 ], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute -top-16 right-0 h-[50vmin] w-[50vmin] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, rgba(219,73,94,0.50), transparent 60%)",
        }}
      />
      <motion.div
        initial={{ x: -100, y: 200, scale: 1 }}
        animate={{ x: [ -100, -20, -160 ], y: [ 200, 120, 240 ], scale: [1, 1.12, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-0 left-1/3 h-[50vmin] w-[50vmin] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,168,255,0.35), transparent 60%)",
        }}
      />
    </div>
  );
}

export default LiquidOrbs;

