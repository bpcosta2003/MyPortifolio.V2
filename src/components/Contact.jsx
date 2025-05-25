import Section from "./Section";
import Heading from "./Heading";
import { AuroraBackground } from "./AceternityUI/AuroraBackground";
import { HeroHighlight, Highlight } from "./AceternityUI/HeroHighlight";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "./AceternityUI/ButtonGradient";
import { sendMessage } from "../assets";

const Contact = () => {
  return (
    <Section className="overflow-hidden relative" id="contact">
      <AuroraBackground>
        <div className="container relative z-2 mt-16 h-[100vh]">
          <Heading tag="Let's work together § Let's work together § Let's work together § Let's work together § Let's work together § Let's work together § Let's work together § Let's work together § Let's work together § Let's work together §" />
        </div>
        <div className="absolute z-60 w-full h-screen right-0 left-0 bottom-0 bg-linear-gradient-bottom from-[#111111] to-[#111111]/0 to-50% pointer-events-none overflow-hidden"></div>
        <div className="absolute z-60 w-full h-screen top-0 right-0 left-0 bg-linear-gradient-top from-[#111111] to-[#111111]/0 to-80% pointer-events-none overflow-hidden"></div>
      </AuroraBackground>
      <div className="absolute w-full h-full top-0">
        <HeroHighlight>
          <div className="flex flex-col items-center justify-center gap-6 mt-28">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0, duration: 1 }}
              viewport={{ once: false }}
              className="text-2xl px-7 md:text-4xl lg:text-5xl font-bold text-n-1/80 max-w-3xl leading-relaxed lg:leading-snug text-center mx-auto ">
              Ready to take <Highlight className="text-n-1/60 font-diplomat">your{""}</Highlight> digital presence to the next level?
            </motion.h1>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 2 }}
              viewport={{ once: false }}
              href="mailto:contact.brunocosta.tech@gmail.com"
              target="_blank">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className=" bg-n-2/50 text-n-1/60 flex items-center space-x-2 hover:bg-n-2/20 hover:text-n-1/90 transition-all group px-7">
                <span>Let&apos;s get in touch</span>
                <img src={sendMessage} className="w-5 h-5 group-hover:filter-none" style={{ filter: "grayscale(1)" }} />
              </HoverBorderGradient>
            </motion.a>
          </div>
        </HeroHighlight>
      </div>
    </Section>
  );
};

export default Contact;
