import React, { useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
// import ThemeController from './ThemeController';
const Navbar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const projectsRef = useRef(null);

  const handleScrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavLinks = () => {
    return (
      <>
      <ul className="lg:hidden flex flex-col list-none gap-5 absolute side-bar items-center justify-center py-4 bg-white rounded-xl w-full z-50 px-20 space-y-5 h-screen">

        <li><a href="#projects" onClick={handleScrollToProjects}>Projects</a></li>
        <li><a href="https://drive.google.com/file/d/1jmP4XLOJiiNSZVDYzASLGZx3mXc2Vj81/view">Resume</a></li>
        <li><NavLink activeclassname="active" to="/contact">Contact</NavLink></li>
        {/* <li><ThemeController/></li> */}
      </ul>

      <ul className="lg:flex hidden list-none gap-5">

        <li><a href="#projects" onClick={handleScrollToProjects}>Projects</a></li>
        <li><a href="https://drive.google.com/file/d/1jmP4XLOJiiNSZVDYzASLGZx3mXc2Vj81/view">Resume</a></li>
        <li><NavLink activeclassname="active" to="/contact">Contact</NavLink></li>
        {/* <li><ThemeController/></li> */}
      </ul>
      </>
       
    )
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }


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
  )
}

export default Navbar