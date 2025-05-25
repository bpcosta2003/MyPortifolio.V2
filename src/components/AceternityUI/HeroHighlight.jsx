"use client";
import { cn } from "../../utils/cn";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

export const HeroHighlight = ({ children, className, containerClassName }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn("relative w-full h-full flex items-center bg-transparent justify-center group", containerClassName)}
      onMouseMove={handleMouseMove}>
      <div className="absolute inset-0 bg-dot-thick-n-1/10 pointer-events-none" />
      <div className="absolute z-60 w-full h-screen top-0 right-0 left-0 bg-linear-gradient-top from-[#111111] to-[#111111]/0 to-80% pointer-events-none overflow-hidden"></div>
      <motion.div
        className="pointer-events-none bg-dot-thick-n-1/50 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({ children, className }) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
        opacity: 0,
      }}
      whileInView={{ opacity: 1, backgroundSize: "100% 100%" }}
      transition={{
        duration: 1,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      viewport={{ once: false }}
      className={cn(`relative inline-block pb-1 px-3 max-sm:px-2 rounded-lg bg-gradient-to-r from-n-1/20 to-n-1/20`, className)}>
      {children}
    </motion.span>
  );
};
