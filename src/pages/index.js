import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeaderCard from "../components/HeaderCard";
import TechStack from "../components/TechStack";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Languages from "../components/Languages";
import ButterflyAnimation from "../components/ButterflyAnimation";

function Home() {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    const text = [
      "Hi,",
      "I",
      "am",
      "Halla",
      " ",
      "Hamidi,",
      "a",
      "Frontend",
      "Web",
      "Developer",
    ];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setVisibleText(text.slice(0, currentIndex + 1).join(" "));
      currentIndex++;

      if (currentIndex === text.length) {
        setVisibleText("Halla Hamidi, a Frontend Web Developer");
        clearInterval(intervalId);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="bg-purple-100 relative min-h-screen">
        <Navbar
          aboutRef={aboutRef}
          techRef={techRef}
          projectRef={projectRef}
          contactRef={contactRef}
        />
        <ButterflyAnimation />
        <div className="min-h-screen">
          <div ref={aboutRef} className="text-center mt-20 mb-40 font-serif ">
            <p className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold">
              {visibleText.slice(0, 0)}{" "}
              <span className="text-purple-900">
                {visibleText.slice(0, 14)}
              </span>
              {visibleText.slice(15)}
            </p>
          </div>
          <HeaderCard />
          <p
            ref={techRef}
            className="text-[30px] text-center mt-32 text-black font-bold font-serif "
          >
            My tech stack
          </p>
          <TechStack />
          <p
            ref={projectRef}
            className="text-[30px] text-center text-black font-bold mt-20 font-serif "
          >
            My <span className="text-purple-800">Projects</span>
          </p>
          <ProjectCard />
          <Languages />
          <div ref={contactRef} className="mt-20">
            <ContactForm />
          </div>
        </div>
        <div className="mt-8"></div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
