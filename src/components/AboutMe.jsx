import React from 'react';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import js from '../assets/images/js.png';
import reactLogo from '../assets/images/react.png';
import tailwind from '../assets/images/tailwindcss.png';
import next from '../assets/images/next.png';
import git from '../assets/images/git.png';
import github from '../assets/images/github.png';

const AboutMe = () => {
  const techStack = [
    { image: html, name: 'HTML' },
    { image: css, name: 'CSS' },
    { image: js, name: 'JavaScript' },
    { image: reactLogo, name: 'ReactJS' },
    { image: tailwind, name: 'Tailwind CSS' },
    { image: next, name: 'Next.js' },
    { image: git, name: 'Git' },
    { image: github, name: 'Github' },
  ];

  // Duplicate the tech stack for seamless loop
  const scrollingTech = [...techStack, ...techStack];

  return (
    <div className="leading-relaxed min-h-[80vh] lg:pt-10 border-t border-black dark:border-gray-300" id="about">
      <h1 className="text-center text-2xl font-medium pt-10">About Me</h1>

      <p className="mb-20 text-justify md:text-center px-4 md:px-0">
        I am a frontend developer with a passion for creating engaging and user-friendly web experiences.
        With over two years of experience, I am enthusiastic about collaborating with teams to bring 
        creative designs to life and contribute to building intuitive interfaces for users.
        I am eager to learn and grow in the dynamic world of web development.
      </p>

      <h1 className="text-center text-2xl font-medium pb-6">My Tech Stack</h1>

      <div className="w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap space-x-12">
          {scrollingTech.map((tech, index) => (
            <div key={index} className="flex flex-col items-center group min-w-[80px]">
              <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img src={tech.image} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              <p className="mt-2 text-sm font-medium text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
