import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

export const TechBadge = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "inline-flex min-h-9 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-1.5 text-base leading-5 text-cyan-100",
        className
      )}
    >
      {children}
    </span>
  );
};
