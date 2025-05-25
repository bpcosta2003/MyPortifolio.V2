import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section className="!px-0 !py-10" crosses>
      <div className="container flex sm:justify-between justify-between items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">Ⓒ {new Date().getFullYear()}. brunocosta.dev / All rights reserved.</p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              key={item.id}
              href={item.url}
              target="_blank">
              <img src={item.icon} width={30} height={30} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
