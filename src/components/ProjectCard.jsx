import React from 'react';

const ProjectCard = ({ title, imageSrc, projectLink }) => {
  const openProjectLink = () => {
    window.location.href = projectLink;
  };

  return (
    <div className="relative overflow-hidden mb-8 rounded-lg shadow-lg cursor-pointer">
      <div className="group">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto rounded-lg transition-transform duration-300 transform group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="bg-gray-800 bg-opacity-50 w-full h-full absolute inset-0"></div>
          <div className="text-white absolute z-10">
            <div
              className="bg-[#4B2499] hover:bg-purple-400 text-white font-serif italic px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
              onClick={openProjectLink}
            >
              Check the Project
            </div>
            <div className="text-purple-200 font-serif italic mt-8">
              Next.JS / Tailwind Css
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <div className="flex flex-wrap justify-center gap-8 lg:justify-between">
        <div className="flex gap-8">
          <ProjectCard
            title="Movies website"
            imageSrc="./project1.png"
            projectLink="https://reelio-topaz.vercel.app/"
          />
          <ProjectCard
            title="E-commerce website"
            imageSrc="./project2.png"
            projectLink="https://sougna.vercel.app/"
          />
        </div>
        <div className="flex mx-auto items-center w-96 justify-center mt-8">
          <ProjectCard
            title="Volunteer events website"
            imageSrc="./project3.png"
            projectLink="https://pebble-work.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;



