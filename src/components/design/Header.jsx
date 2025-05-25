import background from "../../assets/my_assets/background.jpg";
import { GradientLight } from "./Benefits";
import { BackgroundLines } from "./Hero";

export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full bg-n-1/20"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-1/20"></div>
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.10]">
        <img className="w-full h-full object-cover" src={background} width={688} height={953} alt="Background" />
        <GradientLight hero />
      </div>

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

      <SideLines />
    </div>
  );
};
