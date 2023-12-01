import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-200 p-4 md:p-6 lg:p-8 text-purple-800 font-serif italic">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-full mx-auto px-20">

        <div className="mb-2 md:mb-0">
          <img src="logo.png" alt="Logo" className="max-w-full md:max-w-[120px]" />
        </div>

        <p className="md:m-0 text-center md:text-left">
          Or you can contact me in:
        </p>

        <div className="flex items-center">
          <div className="text-purple-800 mx-2">
            <FaGithub size={20} />
          </div>
          <div className="text-purple-800 mx-2">
            <FaLinkedin size={20} />
          </div>
          <div className="text-purple-800 mx-2">
            <FaEnvelope size={20} />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


