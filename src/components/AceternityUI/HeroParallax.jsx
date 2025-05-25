"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const HeroParallax = ({ projects }) => {
  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const thirdRow = projects.slice(10, 15);
  const fourthRow = projects.slice(15, 20);
  const ref = React.useRef(null);

  // 👇 Mobile detection hook
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // 👇 Adjust values based on screen size
  const translateRange = isMobile ? [0, 2500] : [0, 1000];
  const translateRangeReverse = isMobile ? [0, -2500] : [0, -1000];

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], translateRange), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], translateRangeReverse), springConfig);

  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div
      ref={ref}
      className="h-[300vh] py-[30rem] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((project, i) => (
            <ProjectCard comingSoon={project?.comingSoon} project={project} translate={translateX} key={i} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((project, i) => (
            <ProjectCard comingSoon={project?.comingSoon} project={project} translate={translateXReverse} key={i} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {thirdRow.map((project, i) => (
            <ProjectCard comingSoon={project?.comingSoon} project={project} translate={translateX} key={i} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {fourthRow.map((project, i) => (
            <ProjectCard comingSoon={project?.comingSoon} project={project} translate={translateXReverse} key={i} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProjectCard = ({ project, translate, comingSoon }) => {
  return (
    <>
      {!comingSoon ? (
        <motion.div
          style={{
            x: translate,
          }}
          whileHover={{
            y: -20,
          }}
          key={project.title}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0, duration: 1 }}
          viewport={{ once: false }}
          className="group/product h-96 w-[30rem] relative flex-shrink-0 shadow-2xl shadow-n-1/10 rounded-xl">
          <a target="_blank" href={project.link} className="block group-hover/product:shadow-2xl rounded-xl">
            <img
              src={project.thumbnail}
              height={300}
              width={500}
              className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl"
              alt={project.title}
            />
          </a>
          <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-xl"></div>
          <div className="flex flex-row items-end justify-start gap-4 w-full h-full p-4 opacity-0 group-hover/product:opacity-100">
            <h2 className="absolute top-4 left-4 z-10 text-white text-2xl font-bold">{project.title}</h2>
            {project.tech.map((_, index) => (
              <img key={index} src={project.tech[index]} className={`z-10 rounded-full w-6 h-6`} />
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          style={{
            x: translate,
          }}
          key={project.title}
          className="h-96 w-[30rem] relative flex-shrink-0 shadow-2xl shadow-n-1/10 rounded-xl border-dashed border-2 border-n-1/20  bg-n-2">
          <div className="block  rounded-xl h-full w-full">
            <div height={300} width={500} className="flex flex-col h-full w-full inset-0 rounded-xl items-center justify-center gap-2 ">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center p-2">Coming Soon</h1>
              <h1 className="text-n-1/50 text-md md:text-lg font-thin text-center font-sans">Working on creating more awesome projects!</h1>
            </div>
          </div>

          <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">{project.title}</h2>
        </motion.div>
      )}
    </>
  );
};
