import React from 'react'
import { NavLink } from 'react-router-dom'
import Headshot from '../assets/images/Headshot.png'
import HeroImg from "../assets/images/code.png"
import { TypeAnimation } from 'react-type-animation';
// import fancyBorder from './fancyBorder/FancyBorder'

const Hero = () => {
  return (
    <>
      <div className="">
        <div className="flex w-full justify-between items-center hero-height text-left ">
          <div className="flex flex-col">
            <p className="block w-full">Hey, I'm</p>
            <p className="text-4xl md:text-6xl lg:text-6xl gradient-text font-bold block w-full py-2 my-4">Treasure Aiyedun</p>
            <TypeAnimation
              sequence={[
                "I'm a Frontend Developer",
                1000,
                "I Build Things for the Web",
                1000,
              ]}
              wrapper="h1"
              cursor={true}
              repeat={Infinity}
              className="text-lg font-bold text-gray-800 dark:text-white"
            />
          </div>

          <div className="">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero