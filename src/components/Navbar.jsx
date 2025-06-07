import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeController from './ThemeToggle';

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null); // Ref for the navbar container

  const toggleNavbar = () => setIsOpen(!isOpen);

  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 mt-3 2xl:mt-10"
    >
      <div
        className={`flex items-center px-4 py-2 shadow-xl shadow-slate-300 rounded-full transition-all duration-300 dark:shadow-gray-900 dark:shadow-lg animate-bounce 2xl:py-4
          ${isOpen ? 'w-[380px] md:w-[420px] 2xl:w-[630px] bg-white dark:bg-[#0f0f0f]' : 'w-[100px] 2xl:w-[180px] bg-white dark:bg-[#0f0f0f]'}
        `}
      >
        <div className="font-bold text-xl mr-3 2xl:text-2xl">TA.</div>

        <div className="flex-1 flex items-center justify-between">
          {isOpen && (
            <ul className="flex pl-1 md:pl-3 items-center space-x-3 md:space-x-4 2xl:space-x-6 text-sm font-medium 2xl:text-2xl">
              <li>
                <button
                  onClick={() => {
                    scrollToSection('home');
                    setIsOpen(false);
                  }}
                  className="hover:text-purple-600 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection('about');
                    setIsOpen(false);
                  }}
                  className="hover:text-purple-600 transition-colors"
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
                  className="hover:text-purple-600 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection('contact');
                    setIsOpen(false);
                  }}
                  className="hover:text-purple-600 transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <ThemeController />
              </li>
            </ul>
          )}
        </div>

        <button
          onClick={toggleNavbar}
          className="ml-3 text-black dark:text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-5 h-5 2xl:w-8 2xl:h-8 outline-none" />
          ) : (
            <Menu size={20} className="outline-none" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
