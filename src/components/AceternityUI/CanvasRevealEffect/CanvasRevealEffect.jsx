"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ParallaxText from "../../FramerMotion/ParallaxText";
import { MouseParallax } from "react-just-parallax";
import { BackgroundLines } from "../../design/Hero";

export function CanvasRevealEffectSkills({ skills }) {
  return (
    <>
      <div className="-py-[1rem] flex flex-col lg:flex-row items-center justify-center bg-none w-full mx-auto px-8 max-md:fixed top-2 left-0 right-0 bottom-0 overflow-hidden gap-16 2xl:px-0">
        {skills.map((item, i) => (
          <Card key={i} title={item.title} icon={item.icon} details={item.details}>
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-n-1/5" />
            <div className="absolute w-full h-full">
              <ParallaxText baseVelocity={-2.2} skillsInfo repeat={20}>
                <div className="flex flex-row-reverse justify-center items-center">
                  {item.details.map((item) => (
                    <div key={item}>
                      <span className="w-fit p-2">{item}</span>
                    </div>
                  ))}
                </div>
              </ParallaxText>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-n-1/10 group/canvas-card flex items-center justify-center max-w-sm w-full h-[36rem] relative shadow-2xl shadow-n-1/5 overflow-hidden">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-n-1" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-n-1" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-n-1" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-n-1" />

      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:scale-110 opacity-40 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center absolute -mt-8">
          <img src={icon} className="w-24 h-24" />
        </div>
        <h2 className="text-lg text-center uppercase opacity-1 group-hover/canvas-card:opacity-0 relative z-10 font-bold font-sans group-hover/canvas-card:scale-95 transition duration-200 ">
          {title}
        </h2>
        <MouseParallax isAbsolutelyPositioned enableOnTouchDevice zIndex={0}>
          <div className="absolute mt-[0rem] top-0 right-0">
            <BackgroundLines />
          </div>
          <div className="absolute mt-[50rem] top-0 left-0">
            <BackgroundLines />
          </div>
          <div className="absolute -mb-[70rem] bottom-0 right-0">
            <BackgroundLines />
          </div>
          <div className="absolute -mb-[0rem] bottom-0 left-0">
            <BackgroundLines />
          </div>
        </MouseParallax>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.6" stroke="currentColor" className={className} {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
