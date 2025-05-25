import Section from "./Section";
import Heading from "./Heading";
import { projects } from "../constants/index";
import { HeroParallax } from "../components/AceternityUI/HeroParallax";

const Benefits = () => {
  return (
    <Section className="overflow-hidden relative" id="projects">
      <div className="container relative z-2 mt-16">
        <Heading
          className="w-full"
          tag="Building beautiful and interactive web experiences § Building beautiful and interactive web experiences § Building beautiful and interactive web experiences §"
        />
      </div>
      <HeroParallax projects={projects} />
    </Section>
  );
};

export default Benefits;
