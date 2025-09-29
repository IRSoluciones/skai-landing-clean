import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
};

export default function FadeIn({
  className,
  children,
  delay = 0,
  y = 20,
  duration = 0.6,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true, margin: "-80px" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}


