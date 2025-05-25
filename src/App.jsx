import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";

const App = () => {
  return (
    <>
      <div className="h-screen w-full">
        <Header />
        <Home />
        <Projects />
        <Experiences />
        <Skills />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
