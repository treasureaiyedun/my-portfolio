import React from 'react'
import About from '../assets/images/About.jpg'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/js.png'
import react from '../assets/images/react.png'
import tailwind from '../assets/images/tailwindcss.png'
import next from '../assets/images/next.png'
import git from '../assets/images/git.png'
import github from '../assets/images/github.png'

const AboutMe = () => {
  return (
    <div className="leading-relaxed space-y-3 ">
      <h1 className="text-center text-2xl font-medium pt-10">About Me</h1>

      <div className=''>
        <p className="mb-20 md:text-center text-justify">I am a frontend developer with a passion for creating engaging and user-friendly web experiences. With over two years of experience, I am enthusiastic about collaborating with teams to bring creative designs to life and contribute to building intuitive interface for users.  I am eager to learn and grow in the dynamic world of web development.</p>
      </div>

      <h1 className="text-center text-2xl font-medium py-10">My Tech Stack</h1>
      <div className="flex-wrap hidden md:flex justify-between items-center gap-4 mt-20 overflow-x-auto">
        <div>
          <img src={html} alt="HTML" className="w-16 h-16" />
          <p className='text-center uppercase'>html</p>
        </div>
        <div>
          <img src={css} alt="CSS" className="w-16 h-16" />
          <p className="text-center uppercase">css</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={js} alt="JavaScript" className="w-16 h-16" />
          <p className="text-center">JavaScript</p>
        </div>
        <div>
          <img src={react} alt="React" className="w-16 h-16" />
          <p className="text-center">ReactJS</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={tailwind} alt="Tailwind CSS" className="w-16 h-16" />
          <p className="text-center">Tailwind CSS</p>
        </div>
        <div>
          <img src={next} alt="Next.js" className="w-16 h-16" />
          <p className="text-center">Next.js</p>
        </div>
        <div>
          <img src={git} alt="git" className="w-16 h-16" />
          <p className="text-center">Git</p>
        </div>
        <div>
          <img src={github} alt="Github" className="w-16 h-16" />
          <p className="text-center">Github</p>
        </div>
      </div>

      <div className="block md:hidden relative w-full overflow-x-scroll overflow-y-hidden">
        <div className="flex space-x-10 py-6 min-w-max">
          <div className="flex-1 hover:scale-110 transition-all">
          <img src={html} alt="HTML" className="w-16 h-16" />
          <p className='text-center uppercase'>html</p>
        </div>
        <div className="flex-1 hover:scale-110 transition-all">
          <img src={css} alt="CSS" className="w-16 h-16" />
          <p className="text-center uppercase">css</p>
        </div>
        <div className="flex flex-col items-center flex-1 hover:scale-110 transition-all">
          <img src={js} alt="JavaScript" className="w-16 h-16" />
          <p className="text-center">JavaScript</p>
        </div>
        <div className="flex-1 hover:scale-110 transition-all">
          <img src={react} alt="React" className="w-16 h-16" />
          <p className="text-center">ReactJS</p>
        </div>
        <div className="flex flex-col items-center flex-1 hover:scale-110 transition-all">
          <img src={tailwind} alt="Tailwind CSS" className="w-16 h-16" />
          <p className="text-center">Tailwind CSS</p>
        </div>
        <div className="flex-1 hover:scale-110 transition-all">
          <img src={next} alt="Next.js" className="w-16 h-16" />
          <p className="text-center">Next.js</p>
        </div>
        <div className="flex-1 hover:scale-110 transition-all">
          <img src={git} alt="git" className="w-16 h-16" />
          <p className="text-center">Git</p>
        </div>
        <div className="flex-1 hover:scale-110 transition-all">
          <img src={github} alt="Github" className="w-16 h-16" />
          <p className="text-center">Github</p>
        </div>
        </div>
      </div>

    </div>
  )
}

export default AboutMe