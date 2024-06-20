import React from 'react'
import { NavLink } from 'react-router-dom'
import fancyBorder from '../components/fancyBorder/fancyBorder' 

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center hero-height text-left border-b-[1px] border-black ">
        <p className="block w-full">Hey, I'm</p>
        <p className="text-4xl md:text-6xl lg:text-6xl gradient-text font-bold block w-full py-2 my-4">Treasure Aiyedun</p> 
        <p className="mb-4">I'm a software engineer based in Toronto, Canada and also a communication and journalism student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.</p>

        {/* <a href="mailto:treasureaiyedun01@gmail.com"><fancyBorder>Send an Email</fancyBorder></a> */}
        <NavLink className="block w-full" activeclassname="active" to="/contact">Say Hi &rarr;</NavLink>   
        </div>
  )
}

export default Hero