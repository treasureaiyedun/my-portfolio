import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import ContactMe from '../components/ContactMe'
import { ThemeProvider } from '../contexts/ThemeContext'
// import { ThemeProvider } from '../components/ThemeController'



const Home = () => {
  return (
    <ThemeProvider>
      <div className="w-full flex justify-center min-h-screen text-black dark:text-white bg-white dark:bg-[#061337]">
        <div className="w-4/5">
          <Navbar />
          <Hero />
          <Projects />
          <ContactMe />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Home