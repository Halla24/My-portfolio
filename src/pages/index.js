import React from 'react';
import Navbar from '../components/Navbar';
import HeaderCard from '../components/HeaderCard';
import TechStack from '../components/TechStack';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className="bg-purple-100 min-h-screen">
      <Navbar />
      <div className="text-center mt-20 font-serif">
        <p className="text-6xl text-black font-bold">
          Hi, I am <span className="text-green-700">HALLA HAMIDI</span>, a Frontend Web Developer
        </p>
      </div>
      <HeaderCard />
      <p className="text-5xl text-center mt-20 text-black font-bold">
      What can i use ?
        </p>
      <TechStack />
      <p className="text-5xl text-center text-black font-bold mt-8">
      My <span className="text-green-700">Projects</span>
        </p>
      <ProjectCard />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
