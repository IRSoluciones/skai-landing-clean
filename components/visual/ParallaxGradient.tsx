import { motion, useScroll, useTransform } from "framer-motion";
import * as React from "react";

export default function ParallaxGradient() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -60]);
  const y2 = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute -top-24 -left-24 h-[60vmin] w-[60vmin] rounded-full opacity-70 blur-[90px]"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(27,20,100,0.10),transparent_60%)]" />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: y2 }}
        className="absolute -top-16 right-0 h-[55vmin] w-[55vmin] rounded-full opacity-70 blur-[90px]"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_70%_40%,rgba(219,73,94,0.10),transparent_60%)]" />
      </motion.div>
    </>
  );
}


