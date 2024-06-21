import React, { useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
// import ThemeController from './ThemeController';
const Navbar = () => {

  const projectsRef = useRef(null);

  const handleScrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavLinks = () => {
    return (
      <ul className="lg:flex list-none gap-5">
        <li><a href="#projects" onClick={handleScrollToProjects}>Projects</a></li>
        <li>Resume</li>
        <li><NavLink activeclassname="active" to="/contact">Contact</NavLink></li>
        {/* <li><ThemeController/></li> */}
      </ul>
    )
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div>
      <nav>
        <div className="flex justify-between py-5">
          <div className="font-bold text-xl">TA.</div>
            <div className="hidden lg:flex">{NavLinks()}</div>
          <button className="lg:hidden" onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && <NavLinks />}

    </div>
  )
}

export default Navbar