import React, { useState, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ aboutRef, techRef, projectRef, contactRef }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
    }
  };

  const getRefByName = (name) => {
    switch (name) {
      case "About":
        return aboutRef;
      case "Tech":
        return techRef;
      case "Projects":
        return projectRef;
      case "Contact":
        return contactRef;
      default:
        return null;
    }
  };

  const navItems = [
    { id: 1, text: "About" },
    { id: 2, text: "Tech" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Contact" },
  ];

  return (
    <div className="bg-purple-200 z-[9999] flex justify-between items-center h-16 max-w-full mx-auto px- text-purple-800 font-serif  ">
      <div className="flex overflow-hidden justify-center items-center h-full">
        <img
          src="/logoo.svg"
          alt="Logo"
          className="w-[130px] pt-0 object-contain mr-2 transform rotate-1"
          style={{ imageRendering: "pixelated" }}
        />
      </div>

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-purple-300 rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-xl font-semibold"
            onClick={() => scrollToRef(getRefByName(item.text))}
          >
            {item.text}
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "fixed md:hidden z-[999] left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-purple-200 ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <img
          src="/logoo.svg"
          alt="Logo"
          className="w-40 h-40 m-0 object-contain"
          style={{ imageRendering: "pixelated" }}
        />

        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-purple-300 duration-300 hover:text-black cursor-pointer border-gray-600 text-xl font-semibold"
            onClick={() => {
              scrollToRef(getRefByName(item.text));
              handleNav();
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
