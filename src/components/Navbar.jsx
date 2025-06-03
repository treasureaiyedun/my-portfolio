import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeController from './ThemeToggle';

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const NavLinks = () => (
    <ul className={`lg:flex lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:p-0 lg:space-y-0 lg:space-x-4 lg:flex-row
      ${isOpen ? 'fixed' : 'hidden'} 
      top-0 left-0 w-full h-screen 
      bg-white dark:bg-gray-900
      flex flex-col items-center justify-center 
      space-y-8 z-50`}>
      <li>
        <button
          onClick={() => {
            scrollToSection('about');
            setIsOpen(false);
          }}
          className="hover:text-blue-500 transition-colors"
        >
          About Me
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            scrollToSection('projects');
            setIsOpen(false);
          }}
          className="hover:text-blue-500 transition-colors"
        >
          Projects
        </button>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/1jmP4XLOJiiNSZVDYzASLGZx3mXc2Vj81/view"
          className="hover:text-blue-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </li>
      <li>
        <button
          onClick={() => {
            scrollToSection('contact');
            setIsOpen(false);
          }}
          className="hover:text-blue-500 transition-colors"
        >
          Contact
        </button>
      </li>
      <li><ThemeController /></li>
    </ul>
  );

  return (
    <nav className="relative z-50">
      <div className="flex justify-between items-center my-5 mx-20 border-black border-[1px]">
        <div className="font-bold text-xl z-50">TA.</div>
        <NavLinks />
        <button
          className="lg:hidden z-50"
          onClick={toggleNavbar}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;