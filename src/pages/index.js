import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeaderCard from '../components/HeaderCard';
import TechStack from '../components/TechStack';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Languages from '../components/Languages'

function Home() {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    const text = ["Hi,", "I", "am", "Halla", "Hamidi,", "a", "Frontend", "Web", "Developer"];
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
    <div className="bg-purple-100 min-h-screen">
      <Navbar
        aboutRef={aboutRef}
        techRef={techRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <div className= "min-h-screen">
      <div ref={aboutRef} className="text-center mt-20 mb-40 font-serif italic">
        <p className="text-6xl text-black font-bold">
          {visibleText.slice(0, 0)} <span className="text-purple-900">{visibleText.slice(0, 14)}</span>{visibleText.slice(15)}
        </p>
      </div>
      <HeaderCard />
      <p ref={techRef} className="text-5xl text-center mt-32 text-black font-bold font-serif italic">
        What can I use?
      </p>
      <TechStack />
      <p ref={projectRef} className="text-5xl text-center text-black font-bold mt-20 font-serif italic">
        My <span className="text-purple-800">Projects</span>
      </p>
      <ProjectCard />
      <Languages />
      <div ref={contactRef} className="mt-20">
        <ContactForm />
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;



