import React, { useState } from "react";
import Ticker from "framer-motion-ticker";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwindcss.png";
import next from "../assets/images/next.png";
import typescript from "../assets/images/typescript.png";

const AboutMe = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const techStack = [
    { image: html, name: "HTML" },
    { image: css, name: "CSS" },
    { image: js, name: "JavaScript" },
    { image: react, name: "ReactJS" },
    { image: tailwind, name: "Tailwind CSS" },
    { image: next, name: "Next.js" },
    { image: typescript, name: "TypeScript" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="leading-relaxed min-h-[60vh] lg:pt-24" id="about">
      <h1 className="text-center text-2xl font-bold pt-10 border-t-[1px] border-black dark:border-gray-300 lg:pt-20">About Me</h1>
      <p className="mb-20 md:text-center text-justify px-4">
        Hi! I'm Treasure, a frontend engineer with a passion for creating engaging and user-friendly web experiences. I have a Bachelor's degree in Software Engineering from Babcock University, Ogun state, Nigeria. I am enthusiastic about bringing
        creative designs to life and building intuitive interfaces for users.
        I have been doing this for over two years now, and with that, I can boldy say that I love writing clean code and building not just functional but elegant websites as well. Be it individually or in a team, I am always eager to do more - learn new technologies, build cool stuff and improve myself generally.
      </p>

      <h1 className="text-center text-2xl font-bold py-10">My Tech Stack</h1>

      <div
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <Ticker duration={20} isPlaying={isPlaying}>
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="rounded-xl bg-gray-50 dark:bg-[#1a1a23] cursor-pointer mx-6 w-24 h-24 flex flex-col items-center justify-center group hover:scale-110 transition-transform"
            >
              <img src={tech.image} alt={tech.name} className="w-20 h-12 object-contain" />
              <p className="mt-2 text-sm text-center font-medium">{tech.name}</p>
            </div>
          ))}
        </Ticker>
      </div>
    </div>
    </div>
    
  );
};

export default AboutMe;
