import { useState, useEffect } from "react"
import AtomicLite from "../assets/images/Atomic-Lite.png"
import ExpressVPN from "../assets/images/Express-VPN.png"
import LobeTour from "../assets/images/Lobe-tour.png"
import TechWorld from "../assets/images/Tech-World.png"
import Bumbu from "../assets/images/Bumbu.png"
import { Link, ChevronLeft, ChevronRight } from "lucide-react"
import { RiGithubFill } from "@remixicon/react"

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const projects = [
    {
      id: 1,
      image: AtomicLite,
      title: "Atomic Lite",
      description: "A recreation of the Atomic Lite Theme by GiantFocal.",
      tech: "HTML - CSS",
      demoUrl: "https://treasureaiyedun.github.io/atomic-lite/",
      githubUrl: "https://github.com/treasureaiyedun/atomic-lite"
    },
    {
      id: 2,
      image: TechWorld,
      title: "Tech World",
      description: "A UI that shows the tech-world!",
      tech: "ReactJS - TailwindCSS",
      demoUrl: "https://tech-world-chi.vercel.app/",
      githubUrl: "https://github.com/treasureaiyedun/tech-world"
    },
    {
      id: 3,
      image: LobeTour,
      title: "Lobe Tour",
      description: "A recreation of Microsoft's Lobe Tour website.",
      tech: "HTML - TailwindCSS",
      demoUrl: "#",
      githubUrl: "https://github.com/treasureaiyedun/lobe-tour"
    },
    {
      id: 4,
      image: ExpressVPN,
      title: "Express VPN",
      description: "A modern VPN service landing page design.",
      tech: "ReactJS - CSS",
      demoUrl: "#",
      githubUrl: "https://github.com/treasureaiyedun/atomic-lite"
    },
    {
      id: 5,
      image: Bumbu,
      title: "Bumbu App",
      description: "A website for a car trading app.",
      tech: "ReactJS - TailwindCSS",
      demoUrl: "https://bumbu-app.vercel.app/",
      githubUrl: "https://github.com/treasureaiyedun/bumbu-app"
    }
  ]

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused, projects.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const visibleProjects = () => {
    const result = []
    const numProjects = window.innerWidth < 768 ? 1 : 3
    for (let i = 0; i < numProjects; i++) {
      const index = (currentIndex + i) % projects.length
      result.push(projects[index])
    }
    return result
  }

  return (
    <div
      id="projects"
      className="lg:h-screen flex flex-col justify-center 2xl:mb-40 md:mt-0 mt-10 border-b-[1px] border-black dark:border-gray-300"
    >
      <div className="lg:mb-24 text-2xl text-center md:text-left font-bold mb-8 mt-10 md:mt-0 lg:mt-4 md:mb-12 lg:px-0 px-6 2xl:text-4xl">Featured Projects</div>

      <div className="relative mx-auto" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-6 w-6 2xl:h-10 2xl:w-10" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center"
          aria-label="Next project"
        >
          <ChevronRight className="h-6 w-6 2xl:h-10 2xl:w-10" />
        </button>

        {/* Projects Display */}
        <div className="flex flex-col px-6 md:flex-row justify-between md:space-x-6 items-center">
          {visibleProjects().map((project, idx) => (
            <div
              key={project.id}
              className={`card-1 transition-all duration-300 w-full md:w-1/3 mb-8 md:mb-0 px-5
                ${idx === 1 ? 'md:scale-110 md:z-10' : 'md:scale-90 md:opacity-70'}
                hover:scale-100 hover:z-20 hover:opacity-100`}
            >
              <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-lg" loading="lazy" />
              <h1 className="uppercase font-medium mt-2 2xl:text-3xl">{project.title}</h1>
              <p className="mt-3 md:mt-2 2xl:text-xl">{project.description}</p>
              <p className="text-xs text-blue-500 mt-4 2xl:text-lg">{project.tech}</p>
              <div className="flex justify-between">
                <div>
                  <a href={project.demoUrl} className="flex mt-4 hover:text-blue-500">
                    <Link />
                    <p className="ml-2 2xl:text-lg">Live Demo</p>
                  </a>
                </div>
                <div>
                  <a href={project.githubUrl} className="flex mt-4 ml-4 hover:text-blue-500">
                    <RiGithubFill className="text-xl 2xl:text-3xl"/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        {/* <div className="flex justify-center mt-6 space-x-2 mb-5">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Projects