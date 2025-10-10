import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Clock, CheckCircle } from "lucide-react";
import { RiGithubFill } from "@remixicon/react";
import AtomicLite from "../assets/images/Atomic-Lite.png";
import Bloom from "../assets/images/Bloom.png";
import Bumbu from "../assets/images/Bumbu.png";
import TechWorld from "../assets/images/Tech-World.png";
import SplitPay from "../assets/images/Split-Pay.png";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);

  // ✅ Responsive visible count
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3); // lg
      else if (window.innerWidth >= 768) setVisibleCount(2); // md
      else setVisibleCount(1); // mobile
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const projects = [
    {
      id: 1,
      image: AtomicLite,
      title: "Atomic Lite",
      description:
        "A minimalistic, clean UI demo inspired by the Atomic Lite theme by GiantFocal, designed to showcase layout, typography, and aesthetic consistency.",
      stack: ["HTML", "CSS"],
      demoUrl: "https://treasureaiyedun.github.io/atomic-lite/",
      githubUrl: "https://github.com/treasureaiyedun/atomic-lite",
      status: "completed",
    },
    {
      id: 2,
      image: TechWorld,
      title: "Tech World",
      description:
        "A demo tech-themed UI built to showcase my frontend design skills, featuring a clean layout, smooth interactions, and a modern aesthetic.",
      stack: ["ReactJS", "TailwindCSS"],
      demoUrl: "https://tech-world-chi.vercel.app/",
      githubUrl: "https://github.com/treasureaiyedun/tech-world",
      status: "completed",
    },
    {
      id: 3,
      image: Bloom,
      title: "Bloom",
      description:
        "A personal project aimed at creating a digital garden for tracking and nurturing ideas, featuring a clean and intuitive interface.",
      stack: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion", "Recharts", "Redux Toolkit"],
      demoUrl: "#",
      githubUrl: "https://github.com/treasureaiyedun/base",
      status: "in-progress",
    },
    {
      id: 5,
      image: SplitPay,
      title: "SplitPay",
      description:
        "SplitPay is a web-based application designed to simplify the process of dividing bills among multiple people, even when they are using different currencies.",
      stack: ["Next.js", "TypeScript", "TailwindCSS", "FastAPI"],
      demoUrl: "https://split-pay-two.vercel.app/",
      githubUrl: "https://github.com/treasureaiyedun/split-pay",
      status: "completed",
    },
    {
      id: 6,
      image: Bumbu,
      title: "Bumbu App",
      description:
        "A sleek, responsive website built for a car trading app, showcasing listings and app features with a clean, modern UI.",
      stack: ["ReactJS", "TailwindCSS"],
      demoUrl: "https://bumbu-app.vercel.app/",
      githubUrl: "https://github.com/treasureaiyedun/bumbu-app",
      status: "completed",
    },
  ];

  const getStatusConfig = (status) => {
    switch (status) {
      case "completed":
        return {
          icon: <CheckCircle className="w-3 h-3" />,
          text: "Completed",
          bgColor: "bg-green-100 dark:bg-green-900",
          textColor: "text-green-600 dark:text-green-400",
          borderColor: "border-green-200 dark:border-green-700",
        };
      case "in-progress":
        return {
          icon: <Clock className="w-3 h-3" />,
          text: "In Progress",
          bgColor: "bg-yellow-100 dark:bg-yellow-500",
          textColor: "text-yellow-700 dark:text-yellow-900",
          borderColor: "border-yellow-200 dark:border-yellow-700",
        };
      default:
        return {
          icon: <CheckCircle className="w-3 h-3" />,
          text: "Completed",
          bgColor: "bg-green-100 dark:bg-green-900",
          textColor: "text-green-600 dark:text-green-400",
          borderColor: "border-green-200 dark:border-green-700",
        };
    }
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const displayedProjects = projects
    .slice(currentIndex, currentIndex + visibleCount)
    .concat(
      currentIndex + visibleCount > projects.length
        ? projects.slice(0, (currentIndex + visibleCount) % projects.length)
        : []
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: false }}
      className="w-full max-w-7xl mx-auto py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="text-center mb-8 border-t border-gray-300 dark:border-gray-600 lg:pt-20">
        <h2 className="text-3xl font-semibold dark:text-white mt-8 mb-3 font-heading">
          Featured Projects 👩🏽‍🍳
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 mx-auto rounded-full"></div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center mb-6">
        {/* Prev Button */}
        <button
          onClick={goToPrevious}
          className="p-2.5 bg-white dark:bg-black rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-950"
        >
          <ChevronLeft className="text-rose-500" />
        </button>

        {/* Responsive grid */}
        <div className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => {
            const statusConfig = getStatusConfig(project.status);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white dark:bg-[#0a0a0a] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl"
              >
                {/* Status Badge */}
                <div
                  className={`absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium border ${statusConfig.bgColor} ${statusConfig.textColor} ${statusConfig.borderColor}`}
                >
                  {statusConfig.icon}
                  <span>{statusConfig.text}</span>
                </div>

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                />

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium bg-gray-100 dark:bg-[#1f1f1f] text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="grid gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center gap-2 px-4 py-2 text-gray-900 dark:text-white text-sm font-medium rounded-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-[1px]">
                          <span className="block h-full w-full rounded-lg bg-white dark:bg-[#0a0a0a] hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-colors"></span>
                        </span>

                        <span className="relative z-10 flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-[#232323] hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 transition"
                      >
                        <RiGithubFill className="text-lg" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="p-2.5 bg-white dark:bg-black rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-950"
        >
          <ChevronRight className="text-rose-500" />
        </button>
      </div>
    </motion.div>
  );
};

export default Projects;
