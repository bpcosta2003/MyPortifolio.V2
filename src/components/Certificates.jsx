import Section from "./Section";
import Heading from "./Heading";
import { certificates } from "../constants";
import { CardBody, CardContainer, CardItem } from "./AceternityUI/ThreeDCard";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Certificates = () => {
  return (
    <Section id="certificates">
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

  const x = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "-95%"] : isMedium ? ["1%", "-80%"] : ["1%", "-73%"]);

  const y = useTransform(scrollYProgress, [0, 1], ["94px", "94px"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-n-1/5 border-n-1/10 border-2">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden -mt-[82px]">
        <motion.div style={{ x, y }} className="flex flex-row gap-16">
          <Heading
            className="w-full -mt-20"
            tag="Certificates § Certificates § Certificates § Certificates § Certificates § Certificates § Certificates § Certificates § Certificates § Certificates § Certificates § Certificates § Certificates § Certificates § Certificates § Certificates § Certificates § Certificates § Certificates § Certificates § Certificates § Certificates § "
          />
          {certificates.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 1 }}
              viewport={{ once: false }}
              key={index}
              className="mt-12">
              <CardContainer>
                <CardBody className="bg-n-2 relative group/card border-n-1/10 border-2 w-[30rem] h-auto rounded-xl p-6 shadow-2xl shadow-n-1/10">
                  <CardItem translateZ="50" className="text-xl font-bold text-n-1">
                    {item.title}
                  </CardItem>
                  <CardItem translateZ="60" className="text-n-1/50 text-xs max-w-sm mt-2">
                    {item.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img src={item.image} className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt={item.title} />
                  </CardItem>
                  {/* <div className="absolute -bottom-2 z-10">
                    <CardItem key={index} translateZ="100" className="flex flex-row gap-2 mt-6">
                      {item.stars.map((star) => (
                        <img key={star} src={item.starIcon} className="h-10 w-10 backdrop-blur-sm" alt={item.title} />
                      ))}
                    </CardItem>
                  </div> */}
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
