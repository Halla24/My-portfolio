import React, {useState} from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, imageSrc, projectLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  const openProjectLink = () => {
    window.location.href = projectLink;
  };

  return (
    <motion.div className="mb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
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
                onClick={openProjectLink}>
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
        className=" text-purple-600 font-serif overflow-y-scroll">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
        dolorem! Officiis iure rerum voluptates a cumque velit
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
              title="Movies website"
              imageSrc="./project1.png"
              projectLink="https://reelio-topaz.vercel.app/"
            />
          </div>
          <div className="w-96 mobileWidth">
            <ProjectCard
              title="E-commerce website"
              imageSrc="./project2.png"
              projectLink="https://sougna.vercel.app/"
            />
          </div>
        </div>
        <div className="flex mx-auto mobileWidth items-center w-96 justify-center">
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
