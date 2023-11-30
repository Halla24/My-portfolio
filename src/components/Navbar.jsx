import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'About' },
    { id: 2, text: 'Tech' },
    { id: 3, text: 'Projects' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className='bg-purple-200 flex justify-between items-center h-24 max-w-full mx-auto px-4 text-green-600 font-rubik'>
      {/* Logo */}
      <img
        src="/logo.svg"
        alt='Logo'
        className='w-40 h-40 object-contain mr-2 transform rotate-1'
        style={{ imageRendering: 'pixelated' }}
      />

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-green-200 rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-xl font-semibold'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-purple-200 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <img
          src="/logo.svg"
          alt='Logo'
          className='w-40 h-40 m-4 object-contain'
          style={{ imageRendering: 'pixelated' }}
        />

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-green-200 duration-300 hover:text-black cursor-pointer border-gray-600 text-xl font-semibold'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;


