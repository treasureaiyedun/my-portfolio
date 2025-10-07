import React, { useRef, useState } from "react";
import Ticker from "framer-motion-ticker";
import { motion, useInView } from "framer-motion";

// Tech stack images
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwindcss.png";
import next from "../assets/images/next.png";
import typescript from "../assets/images/typescript.png";

const AboutMe = () => {
    const [tickerPlaying, setTickerPlaying] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

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
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="leading-relaxed min-h-[60vh] lg:pt-24">
        {/* Section Title */}
        <motion.h1
          id="about-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-extrabold pt-10 border-t border-gray-300 dark:border-gray-600 lg:pt-20 font-heading"
        >
          About Me 👋
        </motion.h1>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-center mx-auto mb-14 px-4"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-text">
            Hi there! I'm{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Treasure
            </span>{","}
            a{" "}
            <span className="font-semibold text-pink-600 dark:text-pink-400">
              Frontend Engineer
            </span>{" "}
            who turns ideas into refined, user-friendly websites that feel great
            to use. I hold a{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              Bachelor's degree in Software Engineering
            </span>{" "}
            from Babcock University, Nigeria. With over two years of hands-on
            experience, I enjoy transforming creative designs into{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              responsive, accessible
            </span>{" "}
            and well-structured interfaces. I take pride in writing clean,
            maintainable code and building websites that are both{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              functional
            </span>{" "}
            and visually elegant.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <h1 className="text-center text-2xl font-bold py-10 font-heading">My Tech Stack 🧰</h1>
        <div
          className="w-full overflow-hidden"
          onMouseEnter={() => setTickerPlaying(false)}
          onMouseLeave={() => setTickerPlaying(true)}
        >
          <Ticker duration={20} isPlaying={tickerPlaying}>
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="rounded-xl bg-gray-50 dark:bg-[#1a1a23] shadow-md cursor-pointer mx-6 w-28 h-28 flex flex-col items-center justify-center transition-transform mb-10"
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-16 h-12 object-contain"
                />
                <p className="mt-2 text-sm text-center font-medium font-mono">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </Ticker>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
