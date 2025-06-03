import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import ContactMe from '../components/ContactMe'
import { ThemeProvider } from '../contexts/ThemeContext'
import AboutMe from '../components/AboutMe'




const Home = () => {
  const sectionRefs = {
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="w-full flex justify-center min-h-screen text-black dark:text-white bg-white dark:bg-[#0f0f0f]">
        <div className="w-[90%]">
          <Navbar scrollToSection={scrollToSection} />
          <Hero scrollToSection={scrollToSection} />
          <div id="about" ref={sectionRefs.about}>
            <AboutMe />
          </div>
          <div ref={sectionRefs.projects}>
            <Projects />
          </div>
          <div ref={sectionRefs.contact}>
            <ContactMe />
          </div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Home