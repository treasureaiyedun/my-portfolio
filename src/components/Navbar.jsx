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
    <>
      <ul className="lg:hidden flex flex-col list-none gap-5 absolute side-bar items-center justify-center py-4 bg-white rounded-xl w-full z-50 px-20 space-y-5 h-screen">
        <li><button onClick={() => scrollToSection('about')}>About Me</button></li>
        <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
        <li><a href="https://drive.google.com/file/d/1jmP4XLOJiiNSZVDYzASLGZx3mXc2Vj81/view">Resume</a></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><ThemeController /></li>
      </ul>

      <ul className="lg:flex hidden list-none gap-5">
        <li><button onClick={() => scrollToSection('about')}>About Me</button></li>
        <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
        <li><a href="https://drive.google.com/file/d/1jmP4XLOJiiNSZVDYzASLGZx3mXc2Vj81/view">Resume</a></li>
        <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        <li><ThemeController /></li>
      </ul>
    </>
  );

  return (
    <div className="relative">
      <nav>
        <div className="flex justify-between py-5">
          <div className="font-bold text-xl">TA.</div>
          <div className="hidden lg:flex">{NavLinks()}</div>
          <button className="lg:hidden" onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && <NavLinks />}
    </div>
  );
};

export default Navbar;
