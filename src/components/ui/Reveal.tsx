"use client";

import { cn } from "@/utils/cn";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealDirection = "up" | "left" | "right";

const offsets: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 36 },
  left: { x: -48, y: 0 },
  right: { x: 48, y: 0 },
};

export const Reveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
}) => {
  const reduceMotion = useReducedMotion();
  const offset = offsets[direction];

  return (
    <motion.div
      className={cn(className)}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 1,
              x: offset.x,
              y: offset.y,
            }
      }
      whileInView={{ x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        delay: reduceMotion ? 0 : delay,
        duration: reduceMotion ? 0 : 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
