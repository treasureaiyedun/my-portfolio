import React, { useState } from "react";
import Ticker from "framer-motion-ticker";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwindcss.png";
import next from "../assets/images/next.png";
import git from "../assets/images/git.png";
import github from "../assets/images/github.png";

const AboutMe = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const techStack = [
    { image: html, name: "HTML" },
    { image: css, name: "CSS" },
    { image: js, name: "JavaScript" },
    { image: react, name: "ReactJS" },
    { image: tailwind, name: "Tailwind CSS" },
    { image: next, name: "Next.js" },
    { image: git, name: "Git" },
    { image: github, name: "Github" },
  ];

  return (
    <div className="leading-relaxed min-h-[80vh] lg:pt-10 border-t-[1px] border-black dark:border-gray-300" id="about">
      <h1 className="text-center text-2xl font-medium pt-10">About Me</h1>
      <p className="mb-20 md:text-center text-justify px-4">
        I am a frontend developer with a passion for creating engaging and user-friendly web experiences. 
        With over two years of experience, I am enthusiastic about collaborating with teams to bring 
        creative designs to life and contribute to building intuitive interfaces for users. 
        I am eager to learn and grow in the dynamic world of web development.
      </p>

      <h1 className="text-center text-2xl font-medium py-10">My Tech Stack</h1>

      <div
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <Ticker duration={20} isPlaying={isPlaying}>
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="rounded-xl bg-white dark:bg-[#1a1a23] cursor-pointer mx-6 w-20 h-20 flex flex-col items-center justify-center group hover:scale-110 transition-transform"
            >
              <img src={tech.image} alt={tech.name} className="w-20 h-12 object-contain" />
              <p className="mt-2 text-sm text-center font-medium">{tech.name}</p>
            </div>
          ))}
        </Ticker>
      </div>
    </div>
  );
};

export default AboutMe;
