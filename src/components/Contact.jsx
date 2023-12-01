// components/ContactCard.js
import React from 'react';

const ContactCard = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <div className="flex items-center gap-4">
        <div
          className="cursor-pointer"
          onClick={() => openLink('https://www.linkedin.com/in/your-linkedin')}
        >
          <img src="/icons/linkedin-icon.png" alt="LinkedIn" className="w-8 h-8" />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => openLink('https://github.com/your-github')}
        >
          <img src="/icons/github-icon.png" alt="GitHub" className="w-8 h-8" />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => openLink('mailto:your-email@gmail.com')}
        >
          <img src="/icons/gmail-icon.png" alt="Gmail" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
