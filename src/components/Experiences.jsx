import Section from "./Section";
import { experiences } from "../constants";
import Heading from "./Heading";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Experiences = () => {
  return (
    <Section id="experiences">
      <HorizontalScrollCarousel />
    </Section>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const isMedium = typeof window !== "undefined" && window.innerWidth <= 1024;

  // 👇 Adjust `x` transform based on screen size
  const x = useTransform(scrollYProgress, [0, 1], isMobile ? ["1%", "-85%"] : isMedium ? ["15%", "-74%"] : ["-20%", "-68%"]);

  // 👇 `y` stays the same regardless of screen size
  const y = useTransform(scrollYProgress, [0, 1], ["94px", "94px"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-n-1/5 border-n-1/10 border-2">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden -mt-[82px]">
        <motion.div style={{ x, y }} className="flex flex-row gap-96">
          <Heading
            className="w-full -mt-36 xl:-mt-[11rem] 2xl:-mt-[15rem]"
            tag="Experiences § Experiences § Experiences § Experiences § Experiences § Experiences § Experiences § Experiences § Experiences § Experiences § Experiences § Experiences § Experiences § Experiences § Experiences § Experiences § Experiences § Experiences § Experiences § Experiences § Experiences § Experiences § "
          />
          {experiences.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 1 }}
              viewport={{ once: false }}
              key={index}
              className="bg-n-2 border-n-1/10 border-2 rounded-xl p-10 shadow-2xl min-w-[20rem] w-[27rem] h-[30rem] 2xl:w-[80rem] 2xl:h-[30rem]">
              <div className="flex flex-col items-center justify-between w-full h-full">
                <div className="flex flex-row items-center justify-center">
                  <h1 className="text-4xl font-bold text-n-1 2xl:text-6xl 2xl:mt-10">{item.title}</h1>
                  {/* <img src={item.logo} className="w-20 h-20 absolute" /> */}
                </div>
                <div className="flex flex-col items-center justify-between">
                  <p className="text-n-1/80 text-sm text-center 2xl:text-xl">{item.description}</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <p className="text-n-1/50 text-sm text-center 2xl:text-xl">{item.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;
