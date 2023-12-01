import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-200 flex justify-between items-center h-60 max-w-full mx-auto px-4 text-purple-800 font-serif italic">
      {/* Left side with logo and sentence */}
      <div className="flex items-start mb-[-5px]">
        <img src="logo.png" alt="Logo" className="max-w-[300px]" />
      </div>
      <p className="m-20">Or you can contact me in :</p>

      {/* Right side with social icons */}
      <div className="flex items-center">
        <a href="https://github.com/Halla24" className="text-purple-800 mr-4  ">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/halla-hamidi-989197229/" className="text-purple-800 mr-4">
          <FaLinkedin size={30} />
        </a>
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=aniabisso.16@gmail.com&tf=cm" className="text-purple-800 ">
          <FaEnvelope size={30} />
        </a>
      </div>

    </footer>
  );
};

export default Footer;

