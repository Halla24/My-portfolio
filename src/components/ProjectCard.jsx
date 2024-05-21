import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, imageSrc, projectLink, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const openProjectLink = () => {
    window.location.href = projectLink;
  };

  return (
    <motion.div
      className="mb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <div className="group">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto rounded-lg transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="bg-gray-800 bg-opacity-50 w-full h-full absolute inset-0"></div>
            <div className="text-white flex flex-col items-center absolute z-10">
              <div
                className="bg-[#4B2499] hover:bg-[#4B2499] w-[70%] text-white font-serif text-center self-center rounded-md transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-md"
                onClick={openProjectLink}
              >
                Check the Project
              </div>
              <div className="text-purple-200 font-serif  mt-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Next.JS / Tailwind CSS
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        animate={{ height: isHovered ? 200 : 0 }}
        className=" text-[#7d0f9fed] bg-purple-200  font-serif overflow-y-scroll px-4 text-justify "
      >
        {description}
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <div className="flex flex-wrap justify-center items-center gap-8 lg:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="w-96 mobileWidth">
            <ProjectCard
              title="Movies Website"
              imageSrc="./project1.png"
              projectLink="https://reelio-topaz.vercel.app/"
              description={`Dive into the immersive world of cinema with our Movies Website! This dynamic platform offers a vast collection of movies across genres and eras. Powered by Next.js, it ensures efficient server-side rendering for lightning-fast load times. Tailwind CSS enhances the visual appeal and responsiveness, providing a seamless user experience. The integration of APIs brings real-time movie data, keeping the content fresh and engaging. Explore, discover, and enjoy the magic of storytelling through the lens of this cutting-edge platform.`}
            />
          </div>
          <div className="w-96 mobileWidth">
            <ProjectCard
              title="E-commerce Website"
              imageSrc="./project2.png"
              projectLink="https://sougna.vercel.app/"
              description={`Embark on a delightful shopping journey with our E-commerce Website! Meticulously crafted with Next.js and Tailwind CSS, this platform offers a diverse catalog of products for every taste. The seamless integration of Firebase ensures secure user authentication, enabling a personalized shopping experience. Real-time updates and dynamic product management keep the catalog up-to-date, creating an interactive and engaging e-commerce space. Experience the future of online shopping with our feature-rich and responsive platform.`}
            />
          </div>
        </div>
        <div className="flex mx-auto mobileWidth items-center w-96 justify-center">
          <ProjectCard
            title="Volunteer Events Website"
            imageSrc="./project3.png"
            projectLink="https://pebble-work.vercel.app/"
            description={`Ignite social change with our Volunteer Events Website! This impactful platform, powered by Next.js and Tailwind CSS, connects passionate individuals with meaningful volunteering opportunities. Leveraging Firebase for efficient data storage and retrieval, the site provides an intuitive interface for users to discover and engage in various volunteer events. Foster a sense of community and social impact as you explore, sign up, and contribute to causes that matter. Join us in making the world a better place through this user-friendly and purpose-driven platform.`}
          />
        </div>
        <div className="w-96 mobileWidth">
            <ProjectCard
              title="Languages Website"
              imageSrc="./project4.png"
              projectLink="https://quiz-lang-land.vercel.app/"
              description={`COMING SOON!`}
            />
          </div>
      </div>
    </div>
  );
};

export default Projects;
