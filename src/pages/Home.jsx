import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div className="w-full flex justify-center min-h-screen dark:bg-slate-900 dark:text-white ">
      <div className="w-4/5">
        <Navbar />
        <Hero />
        <Projects />
      </div>
    </div>
  )
}

export default Home