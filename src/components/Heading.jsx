import Tagline from "./Tagline";
import ParallaxText from "./FramerMotion/ParallaxText";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div className={`${className} mx-auto mb-12 lg:mb-20 md:text-center`}>
      <div className="relative w-full flex justify-center items-center">
        {title && <h2 className="h2 relative p-2 w-fit backdrop-blur-sm z-2 shadow-2xl shadow-n-2 flex justify-center items-center">{title}</h2>}
        {tag && (
          <Tagline className="flex items-center justify-center z-1 absolute w-full top-[40%]">
            <ParallaxText baseVelocity={-0.2}>{tag}</ParallaxText>
            <ParallaxText baseVelocity={0.2}>{tag}</ParallaxText>
          </Tagline>
        )}
      </div>
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
