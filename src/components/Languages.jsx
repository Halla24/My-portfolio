import React from 'react';

const Languages = () => {
  return (
    <div className="text-center mt-10 md:mt-20">
      <h2 className="text-5xl md:text-6xl text-black font-serif italic font-bold mb-8">My  <span className="text-purple-800">Languages</span></h2>
      <div className="flex flex-wrap justify-center items-center">
        <div className="flag-container">
          <img
            src="./language/languages.png"
            alt="Flag 1"
            className="flag-image jump-animation-1"
          />
        </div>
        <div className="flag-container">
          <img
            src="./language/flag.png"
            alt="Flag 2"
            className="flag-image jump-animation-2"
          />
        </div>
        <div className="flag-container">
          <img
            src="./language/france.png"
            alt="Flag 2"
            className="flag-image jump-animation-3"
          />
        </div>
        <div className="flag-container">
          <img
            src="./language/china.png"
            alt="Flag 2"
            className="flag-image jump-animation-4"
          />
        </div>
        <div className="flag-container">
          <img
            src="./language/germany.png"
            alt="Flag 2"
            className="flag-image jump-animation-5"
          />
        </div>
        <div className="flag-container">
          <img
            src="./language/kenya.png"
            alt="Flag 2"
            className="flag-image jump-animation-6"
          />
        </div>
        <div className="flag-container">
          <img
            src="./language/saudi-arabia.png"
            alt="Flag 2"
            className="flag-image jump-animation-7"
          />
        </div>
        <div className="flag-container">
          <img
            src="./language/turkey.png"
            alt="Flag 2"
            className="flag-image jump-animation-8"
          />
        </div>
        <div className="flag-container">
          <img
            src="./language/united-states.png"
            alt="Flag 2"
            className="flag-image jump-animation-9"
          />
        </div>
      </div>
    </div>
  );
};

export default Languages;
