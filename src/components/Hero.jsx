import React from 'react'
import { NavLink } from 'react-router-dom'
import Headshot from '../assets/images/Images.jpeg'
import fancyBorder from '../components/fancyBorder/fancyBorder' 

const Hero = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center hero-height text-left border-b-[1px] border-black dark:border-gray-300">
        <p className="block w-full">Hey, I'm</p>
        <div className="">
          <p className="text-4xl md:text-6xl lg:text-6xl gradient-text font-bold block w-full py-2 my-4">Treasure Aiyedun</p>
          <p className="mb-4 w-1/2">I am a frontend developer with a passion for creating engaging and user-friendly web experiences. With a solid foundation in ReactJs, TailwindCSS, HTML, CSS, and JavaScript, I am eager to learn and grow in the dynamic world of web development. I am enthusiastic about collaborating with teams to bring creative designs to life and contribute to building intuitive interfaces for users.</p>

          <div className="img">
          <img src={Headshot} alt="Treasure Aiyedun" className="rounded-full h-48 w-48 border-4 border-white dark:border-gray-300 shadow-lg"/>
        </div>
        </div>
        

        {/* <a href="mailto:treasureaiyedun01@gmail.com"><fancyBorder>Send an Email</fancyBorder></a> */}
        <NavLink className="block w-full" activeclassname="active" to="/contact">Say Hi &rarr;</NavLink>   
        
        </div>

        
    </>
    
  )
}

export default Hero