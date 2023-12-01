import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-200 flex justify-between items-center h-60 max-w-full mx-auto px-4 text-green-700 font-rubik">
      {/* Left side with logo and sentence */}
      <div className="flex items-start mb-[-5px]">
        <img src="logo.svg" alt="Logo" className="max-w-[300px]" />
      </div>
      <p className="m-20">Or you can contact me in :</p>

      {/* Right side with social icons */}
      <div className="flex items-center">
        <a href="https://github.com/Halla24" className="text-green-700 mr-4">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/halla-hamidi-989197229/" className="text-green-700 mr-4">
          <FaLinkedin size={30} />
        </a>
        <a href="aniabisso.16@gmail.com" className="text-green-700">
          <FaEnvelope size={30} />
        </a>
      </div>

    </footer>
  );
};

export default Footer;

