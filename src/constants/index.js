import {
  github,
  instagram,
  linkedIn,
  salesForce,
  exerciseTrackApp,
  travelAdvisorApp,
  moveItApp,
  chatApp,
  cryptoVerseApp,
  comingSoonThumbnail,
  fiapGraduationCertificate,
  fiapPythonCertificate,
  fiapUXCertificate,
  salesforceAdminCertificate,
  salesforceAiAssociateCertificate,
  salesforcePD1Certificate,
  salesforceAssociateCertificate,
  certificatesIcon,
  treinaWebFullStackCertificate,
  frameworksIcon,
  programmingLanguageIcon,
  speakingLanguageIcon,
  iconJs,
  iconTs,
  iconReactJs,
  iconNextJs,
  iconRedux,
  iconHtml,
  iconCss,
  accenture,
  wipro,
  origeo,
} from "../assets";
import { useState, useEffect } from "react";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
    default: true,
  },
  {
    id: "1",
    title: "Projects",
    url: "#projects",
    default: false,
  },
  {
    id: "2",
    title: "Experiences",
    url: "#experiences",
    default: false,
  },
  {
    id: "3",
    title: "Skills",
    url: "#skills",
    default: false,
  },
  {
    id: "4",
    title: "Certificates",
    url: "#certificates",
    default: false,
  },
  {
    id: "5",
    title: "Contact",
    url: "#contact",
    onlyMobile: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "GitHub",
    icon: github,
    url: "https://github.com/bpcosta2003",
    width: 45,
    height: 45,
  },
  {
    id: "1",
    title: "Instagram",
    icon: instagram,
    url: "https://www.instagram.com/brunodepaula2003",
    width: 45,
    height: 45,
  },
  {
    id: "2",
    title: "LinkedIn",
    icon: linkedIn,
    url: "https://www.linkedin.com/in/bruno-costa-3238161b5/",
    width: 45,
    height: 45,
  },
  {
    id: "3",
    title: "SalesForce",
    icon: salesForce,
    url: "https://www.salesforce.com/trailblazer/brunocosta03",
    width: 45,
    height: 45,
  },
];

export const projects = [
  {
    title: "...",
    thumbnail: comingSoonThumbnail,
    comingSoon: true,
  },
  {
    title: "Travel Advisor App",
    link: "https://travel-advisor-app-bybrunocosta.vercel.app/",
    thumbnail: travelAdvisorApp,
    tech: [iconJs, iconReactJs, iconHtml],
  },
  {
    title: "MoveIt App",
    link: "https://moveit-bybrunocosta.vercel.app/",
    thumbnail: moveItApp,
    tech: [iconJs, iconTs, iconReactJs, iconNextJs, iconHtml, iconCss],
  },
  {
    title: "Chat App",
    link: "https://aluracord-bybrunocosta.vercel.app/",
    thumbnail: chatApp,
    tech: [iconJs, iconReactJs, iconNextJs, iconHtml, iconCss],
  },
  {
    title: "CryptoVerse App",
    link: "https://crypto-currency-app-bybrunocosta.vercel.app/",
    thumbnail: cryptoVerseApp,
    tech: [iconJs, iconReactJs, iconRedux, iconHtml, iconCss],
  },
  {
    title: "Exercise Track App",
    link: "https://exercisetrack-bybrunocosta.vercel.app/",
    thumbnail: exerciseTrackApp,
    tech: [iconJs, iconTs, iconReactJs, iconNextJs, iconHtml, iconCss],
  },
  {
    title: "...",
    thumbnail: comingSoonThumbnail,
    comingSoon: true,
  },
  {
    title: "Exercise Track App",
    link: "https://exercisetrack-bybrunocosta.vercel.app/",
    thumbnail: exerciseTrackApp,
    tech: [iconJs, iconTs, iconReactJs, iconNextJs, iconHtml, iconCss],
  },
  {
    title: "CryptoVerse App",
    link: "https://crypto-currency-app-bybrunocosta.vercel.app/",
    thumbnail: cryptoVerseApp,
    tech: [iconJs, iconReactJs, iconRedux, iconHtml, iconCss],
  },
  {
    title: "Exercise Track App",
    link: "https://exercisetrack-bybrunocosta.vercel.app/",
    thumbnail: exerciseTrackApp,
    tech: [iconJs, iconTs, iconReactJs, iconNextJs, iconHtml, iconCss],
  },
  {
    title: "Exercise Track App",
    link: "https://exercisetrack-bybrunocosta.vercel.app/",
    thumbnail: exerciseTrackApp,
    tech: [iconJs, iconTs, iconReactJs, iconNextJs, iconHtml, iconCss],
  },
  {
    title: "...",
    thumbnail: comingSoonThumbnail,
    comingSoon: true,
  },
  {
    title: "MoveIt App",
    link: "https://moveit-bybrunocosta.vercel.app/",
    thumbnail: moveItApp,
    tech: [iconJs, iconTs, iconReactJs, iconNextJs, iconHtml, iconCss],
  },
  {
    title: "Chat App",
    link: "https://aluracord-bybrunocosta.vercel.app/",
    thumbnail: chatApp,
    tech: [iconJs, iconReactJs, iconNextJs, iconHtml, iconCss],
  },
  {
    title: "CryptoVerse App",
    link: "https://crypto-currency-app-bybrunocosta.vercel.app/",
    thumbnail: cryptoVerseApp,
    tech: [iconJs, iconReactJs, iconRedux, iconHtml, iconCss],
  },
  {
    title: "Exercise Track App",
    link: "https://exercisetrack-bybrunocosta.vercel.app/",
    thumbnail: exerciseTrackApp,
    tech: [iconJs, iconTs, iconReactJs, iconNextJs, iconHtml, iconCss],
  },
  {
    title: "...",
    thumbnail: comingSoonThumbnail,
    comingSoon: true,
  },
  {
    title: "Travel Advisor App",
    link: "https://travel-advisor-app-bybrunocosta.vercel.app/",
    thumbnail: travelAdvisorApp,
    tech: [iconJs, iconReactJs, iconHtml],
  },
  {
    title: "MoveIt App",
    link: "https://moveit-bybrunocosta.vercel.app/",
    thumbnail: moveItApp,
    tech: [iconJs, iconTs, iconReactJs, iconNextJs, iconHtml, iconCss],
  },
  {
    title: "Exercise Track App",
    link: "https://exercisetrack-bybrunocosta.vercel.app/",
    thumbnail: exerciseTrackApp,
    tech: [iconJs, iconTs, iconReactJs, iconNextJs, iconHtml, iconCss],
  },
];

export const experiences = [
  {
    title: "Wipro",
    date: "April 2022 - May 2024",
    description:
      " Developed components using LWC and worked extensively with Apex (Classes, Triggers, Test Classes, Callouts). Participated in integration projects and API consumption using Sales Cloud and responsible for administrative configurations and automation flows.",
    logo: wipro,
  },
  {
    title: "Accenture",
    date: "May 2024 - August 2024",
    description:
      "Worked on administrative tasks, flows, and automation. Performed object customizations and implemented validation rules within the Sales Cloud environment.",
    logo: accenture,
  },
  {
    title: "Orígeo",
    date: "August 2024 - Currently",
    description:
      "Daily work involves extensive customizations, from system administration to coding — with a strong focus on developing LWC components, Apex classes, system integrations, and API consumption, primarily using Sales Cloud.",
    logo: origeo,
  },
];

export const skills = [
  {
    title: "Programming Languages",
    details: ["JavaScript", "TypeScript", "Python", "Java", "Apex", "HTML", "CSS"],
    icon: programmingLanguageIcon,
  },
  {
    title: "Frameworks and Libraries",
    details: ["NextJs", "ReactNative", "FramerMotion", "ReactJs", "MUI", "RadixUI", "Vercel"],
    icon: frameworksIcon,
  },
  {
    title: "Languages speaking",
    details: ["English", "Portuguese", "French", "Spanish"],
    icon: speakingLanguageIcon,
  },
];

export const certificates = [
  {
    title: "Systems Analysis and Development",
    description:
      "Technologist in Systems Analysis and Development, focusing on designing, implementing, and managing complex information systems for IT careers.",
    date: "December 16, 2022",
    stars: [1, 2, 3, 4, 5],
    starIcon: certificatesIcon,
    image: fiapGraduationCertificate,
  },
  {
    title: "Python",
    description:
      "Python NANO COURSE by FIAP, covering fundamental concepts, data structures, and libraries to develop a strong programming foundation.",
    date: "August 20, 2022",
    stars: [1, 2, 3, 4],
    starIcon: certificatesIcon,
    image: fiapPythonCertificate,
  },
  {
    title: "UX",
    description:
      "User Experience NANO COURSE by FIAP, focusing on user research, design prototypes, and usability to enhance overall user satisfaction.",
    date: "August 10, 2022",
    stars: [1, 2, 3],
    starIcon: certificatesIcon,
    image: fiapUXCertificate,
  },
  {
    title: "Salesforce Certified Administrator",
    description:
      "Certification for advanced Salesforce features, demonstrating proficiency in managing applications, automating processes, and ensuring data integrity.",
    date: "August 3, 2022",
    stars: [1, 2, 3, 4, 5],
    starIcon: certificatesIcon,
    image: salesforceAdminCertificate,
  },
  {
    title: "Salesforce Certified Platform Developer I",
    description:
      "Certification for developing custom business logic and interfaces using Apex, Visualforce, and Lightning components on the Salesforce platform.",
    date: "December 8, 2022",
    stars: [1, 2, 3, 4, 5],
    starIcon: certificatesIcon,
    image: salesforcePD1Certificate,
  },
  {
    title: "Salesforce Certified Associate",
    description:
      "Certification for foundational knowledge in reporting, user administration, sharing, customization, and data management in Salesforce.",
    date: "May 8, 2023",
    stars: [1, 2, 3, 4, 5],
    starIcon: certificatesIcon,
    image: salesforceAssociateCertificate,
  },
  {
    title: "Salesforce Certified AI Associate",
    description:
      "Certification covering foundational AI aspects, ethical implications, and practical applications in Salesforce modules and data management.",
    date: "January 2, 2024",
    stars: [1, 2, 3, 4, 5],
    starIcon: certificatesIcon,
    image: salesforceAiAssociateCertificate,
  },
  {
    title: "TreinaWeb Multi-stack #2",
    description:
      "FullStack practice course by TreinaWeb, focusing on developing an app using NextJS, API, and Axios for comprehensive project implementation.",
    date: "October 17, 2021 ",
    stars: [1, 2, 3, 4, 5],
    starIcon: certificatesIcon,
    image: treinaWebFullStackCertificate,
  },
];

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};
