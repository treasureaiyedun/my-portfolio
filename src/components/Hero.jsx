import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center hero-height text-left">
        <p className="block w-full">Hey, I'm</p>
        <p className="text-6xl gradient-text font-bold block w-full py-2 my-4">Treasure Aiyedun</p> 
        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui rerum corrupti hic, incidunt maiores repudiandae culpa praesentium doloremque perspiciatis eaque molestiae doloribus iusto, error voluptate optio neque enim quod sapiente? Recusandae omnis aperiam, facere saepe alias hic nemo dolores ipsum! Quis sapiente quam modi dolore aperiam ex necessitatibus autem quos!</p>

        <button className="block w-full text-start">Say Hi &rarr;</button>
    </div>
  )
}

export default Hero