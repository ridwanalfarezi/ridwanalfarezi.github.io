"use client";
import animationData from "@/data/confetti.json";
import { featuredStack } from "@/data";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { BackgroundGradientAnimation } from "./BgGradient";
import GridGlobe from "./GridGlobe";
import MagicButton from "./MagicButton";
import { TechBadge } from "./TechBadge";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "alfareziridwan@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={
          id % 2 === 0 ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 }
        }
        animate={{ x: 0, opacity: 1 }}
        exit={id % 2 === 0 ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
          className
        )}
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        <div className={`${id === 6 && "flex justify-center"} h-full`}>
          <div className="w-full h-full absolute">
            {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center")}
              />
            )}
          </div>
          <div
            className={`absolute right-0 -bottom-5 ${
              id === 5 && "w-full opacity-80"
            } `}
          >
            {spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className="object-cover object-center w-full h-full"
              />
            )}
          </div>
          {id === 6 && (
            <BackgroundGradientAnimation>
              <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
            </BackgroundGradientAnimation>
          )}

          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            {id === 3 ? (
              <>
                <div className="z-10 max-w-96 font-sans text-3xl font-bold lg:text-4xl">
                  {title}
                </div>
                <div className="z-10 mt-6 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                  {featuredStack.map((item) => (
                    <TechBadge
                      key={item}
                      className="min-h-12 w-full px-3 py-2 text-center text-white lg:text-lg"
                    >
                      {item}
                    </TechBadge>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div
                  className={cn(
                    "z-10 font-sans text-sm font-extralight text-[#C1C2D3] md:text-xs lg:text-base",
                    id === 5
                      ? "whitespace-nowrap md:max-w-none"
                      : "md:max-w-32"
                  )}
                >
                  {description}
                </div>
                <div
                  className={cn(
                    "relative z-10 max-w-96 font-sans text-xl font-bold lg:text-3xl",
                    id === 2 && "z-30"
                  )}
                >
                  {title}
                </div>
              </>
            )}

            {id === 2 && <GridGlobe />}

            {id === 6 && (
              <div className="relative mt-5 flex w-full justify-center">
                <div
                  className={`absolute -bottom-5 right-0 ${
                    copied ? "block" : "block"
                  }`}
                >
                  <Lottie options={defaultOptions} height={200} width={400} />
                </div>

                <MagicButton
                  title={copied ? "Email copied" : "Copy my email"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  className="!bg-[#161A31]"
                  containerClassName="w-full max-w-[22rem] md:mt-10"
                />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
