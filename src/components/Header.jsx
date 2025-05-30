import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import profileLogo from "../assets/my_assets/profileLogo.png";
import { GradientLight } from "../components/design/Benefits";
import { useState } from "react";
import { useScreenSize } from "../constants";
import { useEffect } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  const screenSize = useScreenSize();
  useEffect(() => {
    if (screenSize.width >= 1024) {
      setOpenNavigation(false);
    }
  }, [screenSize]);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-1/20 bg-n-2/90 backdrop-blur-md `}>
      <div className="flex items-center px-5 lg:px-7.5xl:px-10 max-lg:py-4">
        <a onClick={handleClick} className="flex items-center flex-row gap-2 w-[12rem]  x:mr-8 font-sans" href="#home">
          <img src={profileLogo} width={30} height={10} alt="BC" style={{ filter: "drop-shadow(10px 10px 15px rgba(0,0,0,1))" }} />
          <h4 className="font-thin font-sans w-fit text-n-1/80" style={{ lineHeight: "normal" }}>
            Bruno Costa
          </h4>

          <GradientLight header />
        </a>
        <nav
          className={`${
            openNavigation ? "flex h-[calc(100vh-76px)] bg-n-2 mt-[4.8rem] overflow-hidden" : "hidden"
          } fixed top-0 left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          {openNavigation ? <GradientLight header modal /> : ""}
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row w-full h-full">
            {navigation.map((item) => (
              <a
                className={`navbarHighlightDefault block relative font-sans text-2xl text-n-1 transition-colors hover:text-color-1/60 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-medium ${
                  item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/30"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                key={item.id}
                href={item.url}
                onClick={handleClick}>
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Button className="hidden lg:flex" href="#contact" header>
          Contact
        </Button>
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation} header>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
