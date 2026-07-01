"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function ParallaxHero({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const dotGridY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const glow1Y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const glow2Y = useTransform(scrollYProgress, [0, 1], [0, 75]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 sm:pt-28"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 dot-grid opacity-40"
        style={{ y: dotGridY }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"
        style={{ y: glow1Y }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[80px]"
        style={{ y: glow2Y }}
        aria-hidden="true"
      />
      {children}
    </section>
  );
}
