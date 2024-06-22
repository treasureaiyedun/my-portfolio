import React from 'react'
import { NavLink } from 'react-router-dom'
import Headshot from '../assets/images/Headshot.jpg'
import fancyBorder from '../components/fancyBorder/fancyBorder'

const Hero = () => {
  return (
    <>
      <div className="">
        <div className="flex w-full justify-between items-center hero-height text-left border-b-[1px] border-black dark:border-gray-300">
          <div className="flex flex-col lg:w-3/5">
          <div className="flex justify-center lg:hidden">
            <img src={Headshot} alt="Treasure Aiyedun" className="rounded-full h-48 w-48 border-4 border-white dark:border-gray-300 shadow-lg" />
          </div>
            <p className="block w-full">Hey, I'm</p>
            <p className="text-4xl md:text-6xl lg:text-6xl gradient-text font-bold block w-full py-2 my-4">Treasure Aiyedun</p>
            <p className="mb-4">I am a frontend developer with a passion for creating engaging and user-friendly web experiences. With a solid foundation in ReactJs, TailwindCSS, HTML, CSS, and JavaScript, I am eager to learn and grow in the dynamic world of web development. I am enthusiastic about collaborating with teams to bring creative designs to life and contribute to building intuitive interfaces for users.</p>

            <NavLink className="block w-full" activeclassname="active" to="/contact">Say Hi &rarr;</NavLink>
          </div>

          <div className="hidden lg:flex mr-10 w-1/2 justify-center">
            <img src={Headshot} alt="Treasure Aiyedun" className="rounded-full h-60 object-cover w-80 border-4 border-white dark:border-gray-300 shadow-lg" />
          </div>
        </div>


        {/* <a href="mailto:treasureaiyedun01@gmail.com"><fancyBorder>Send an Email</fancyBorder></a> */}


      </div>


    </>

  )
}

export default Hero