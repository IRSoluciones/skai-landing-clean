import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = { className?: string };

/** Fondo tipo "aurora" con manchas de color suaves que se desplazan.
 * Pensado para ir detrás de una imagen/overlay oscura.
 */
export default function Aurora({ className }: Props) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <motion.div
        aria-hidden
        className="absolute -top-24 left-[-10%] h-[70vmin] w-[70vmin] rounded-full blur-[80px]"
        style={{ background: "radial-gradient(circle at 30% 30%, rgba(27,20,100,0.65), transparent 60%)" }}
        initial={{ x: -120, y: -60 }}
        animate={{ x: [-120, 10, -80], y: [-60, -20, -100] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -top-16 right-[-10%] h-[65vmin] w-[65vmin] rounded-full blur-[90px]"
        style={{ background: "radial-gradient(circle at 60% 40%, rgba(219,73,94,0.55), transparent 60%)" }}
        initial={{ x: 140, y: -80 }}
        animate={{ x: [140, 0, 120], y: [-80, -20, -60] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[-10%] left-1/4 h-[65vmin] w-[65vmin] rounded-full blur-[80px]"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(0,168,255,0.35), transparent 60%)" }}
        initial={{ x: -60, y: 120 }}
        animate={{ x: [-60, 20, -40], y: [120, 90, 140] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
    </div>
  );
}


