import profile from "../assets/my_assets/profile.png";
import Section from "./Section";
import { BackgroundLines } from "./design/Hero";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { socials } from "../constants";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Hero = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.075], [1, 0]), springConfig);

  const motionStyle = {
    opacity,
  };

  return (
    <Section className="overflow-hidden h-screen relative" hero customPaddings id="home">
      <div className="absolute w-full h-screen top-0 right-0 left-0 bottom-0 bg-linear-gradient-bottom from-[#111111]  to-[#111111]/50 to-100%"></div>

      <motion.div style={motionStyle} className="container h-full w-full flex justify-center items-center">
        <div className="backdrop-blur border-8 max-md:border-none border-n-1/10 rounded-3xl max-sm:rounded-none max-[767px]:rounded-none flex justify-center items-center overflow-hidden mt-[84px] max-w-[64rem] w-[64rem] h-[40rem] max-sm:h-[calc(100vh-68px)] max-[767px]:h-[calc(100vh-68px)]  shadow-n-1/10 shadow-inner">
          <img
            src={profile}
            width={550}
            className="z-2 absolute max-sm:scale-150 max-[767px]:scale-150"
            height={550}
            alt="profile"
            style={{ filter: "drop-shadow(10px 10px 60px rgba(0,0,0,1)) brightness(1.1)" }}
          />

          <div className="absolute z-2 w-full h-screen top-0 right-0 left-0 bottom-0 bg-linear-gradient-bottom from-[#111111] to-[#111111]/0 to-100% pointer-events-none"></div>
          <div className="absolute z-2 w-full h-screen top-0 right-0 left-0 bottom-0 bg-linear-gradient-bottom from-[#111111] to-[#111111]/0 to-100% pointer-events-none"></div>

          <div className="animate-pulse bg-none rounded-t-full w-1/5 h-1/5 absolute bottom-0 left-1/2 -translate-x-1/2 z-2 overflow-hidden">
            <ScrollParallax enableOnTouchDevice>
              <div className="w-full h-full flex items-center justify-center mt-10">
                <svg width="50px" height="50px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.707 17.707l5-5a.999.999 0 10-1.414-1.414L11 14.586V3a1 1 0 10-2 0v11.586l-3.293-3.293a.999.999 0 10-1.414 1.414l5 5a.999.999 0 001.414 0z"
                    fill="#fffcf270"
                  />
                </svg>
              </div>
            </ScrollParallax>
          </div>

          <ScrollParallax zIndex={2} enableOnTouchDevice>
            <div className="z-2 flex flex-col items-center justify-center max-sm:mt-[calc(100vh-55vh)]  max-[767px]:mt-[calc(100vh-50vh)] mt-80">
              <h1 className="h1 text-n-1 max-sm:text-2xl max-sm:leading-[3rem] max-md:text-4xl max-md:leading-[3rem] ">Hello I&apos;m Bruno Costa</h1>
              <p className="p-2 max-sm:text-[0.8em] text-n-1/60 bg-n-2/40 backdrop-blur-md bg-linear-gradient-bottom border border-n-1/60 rounded-lg">
                Salesforce + Full Stack Developer
              </p>
            </div>
          </ScrollParallax>

          {socials.map((app, index) => (
            <a
              href={app.url}
              target="_blank"
              key={app.id}
              className={`z-2 p-8 group hover:p-9 transition-all duration-75 absolute shadow-inner shadow-n-1/5 cursor-pointer ${
                index % 2 === 0
                  ? `top-0 ${
                      index == 2
                        ? "left-0 rounded-br-full bg-linear-icon-gradient-tl from-[#fffcf230]  to-[#fffcf200]"
                        : "right-0 rounded-bl-full bg-linear-icon-gradient-tr from-[#fffcf230]  to-[#fffcf200]"
                    }`
                  : `bottom-0 ${
                      index == 1
                        ? "left-0 rounded-tr-full bg-linear-icon-gradient-bl from-[#fffcf230]  to-[#fffcf200]"
                        : "right-0 rounded-tl-full bg-linear-icon-gradient-br from-[#fffcf230]  to-[#fffcf200]"
                    }`
              }`}>
              <img
                className={`z-2 transition-all absolute ${
                  index % 2 === 0 ? `top-1/2 ${index == 2 ? "left-1/2" : "right-1/2"}` : `bottom-1/2 ${index == 1 ? "left-1/2" : "right-1/2 "}`
                }`}
                width={app.width}
                height={app.height}
                src={app.icon}
                alt={app.title}
              />
              <img
                className={`z-2 absolute group-hover:blur-[18px] duration-75 blur-xl transition-all ${
                  index % 2 === 0 ? `top-1/2 ${index == 2 ? "left-1/2" : "right-1/2"}` : `bottom-1/2 ${index == 1 ? "left-1/2" : "right-1/2 "}`
                }`}
                width={app.width}
                height={app.height}
                src={app.icon}
                alt={app.title}
              />
            </a>
          ))}

          <MouseParallax isAbsolutelyPositioned enableOnTouchDevice zIndex={0}>
            <div className="absolute mt-80 top-0 right-0">
              <BackgroundLines />
            </div>
            <div className="absolute mt-80 top-0 left-0">
              <BackgroundLines />
            </div>
            <div className="absolute -mb-80 bottom-0 right-0">
              <BackgroundLines />
            </div>
            <div className="absolute -mb-80 bottom-0 left-0">
              <BackgroundLines />
            </div>
          </MouseParallax>

          <div className="z-2 animate-spotlight absolute -top-[65rem] max-sm:-top-[38rem] opacity-25 w-full max-sm:w-[180%] max-md:w-[150%] max-lg:w-[130%] max-md:-left-1/3 max-lg:-left-20 aspect-square bg-radial-gradient from-[#fffcf285]  to-[#28206C]/0 to-70% pointer-events-none" />
        </div>
      </motion.div>
    </Section>
  );
};

export default Hero;
