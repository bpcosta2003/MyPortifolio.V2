import Section from "./Section";
import React from "react";
import { skills } from "../constants";
import { CanvasRevealEffectSkills } from "./AceternityUI/CanvasRevealEffect/CanvasRevealEffect";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Heading from "./Heading";

const Skills = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const isMedium = typeof window !== "undefined" && window.innerWidth <= 1024;

  const translateY = useSpring(useTransform(scrollYProgress, [0, 1], isMobile ? [-140, 10] : isMedium ? [-1150, 1200] : [-2450, 2200]), springConfig);

  const motionStyle = {
    translateY,
  };

  return (
    <Section className="overflow-hidden relative h-[250vh] md:h-[150vh]" crosses id="skills">
      <div className="container relative z-2 -mt-4 max-sm:mt-16">
        <Heading
          className="w-full"
          tag="Skills § Skills § Skills § Skills § Skills § Skills § Skills § Skills § Skills § Skills § Skills § Skills § Skills § Skills § Skills § Skills §"
        />
      </div>

      <motion.div style={motionStyle} className="container w-full h-full 2xl:max-w-[1920px]">
        <CanvasRevealEffectSkills skills={skills} />
      </motion.div>
      <div className="absolute z-60 w-full h-screen right-0 left-0 bottom-0 bg-linear-gradient-bottom from-[#111111] to-[#111111]/0 to-50% pointer-events-none overflow-hidden"></div>
      <div className="absolute z-60 w-full h-screen top-0 right-0 left-0 bg-linear-gradient-top from-[#111111] to-[#111111]/0 to-80% pointer-events-none overflow-hidden"></div>
    </Section>
  );
};

export default Skills;
