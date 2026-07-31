import React from "react";

interface ButtonProps {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  handleClick?: () => void;
  className?: string;
  containerClassName?: string;
}

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  className,
  containerClassName,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none ${
        containerClassName ?? "w-full sm:w-auto md:mt-10 md:w-60"
      }`}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#393BB2_50%,#06b6d4_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-slate-950 px-5 text-lg font-medium text-white backdrop-blur-3xl sm:px-7 ${className ?? ""}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
