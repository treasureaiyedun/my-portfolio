import React, { useRef } from 'react'
import AtomicLite from '../assets/images/Atomic-Lite.png'
import ExpressVPN from '../assets/images/Express-VPN.png'
import LobeTour from '../assets/images/Lobe-tour.png'
import TechWorld from "../assets/images/Tech-World.png"
import { Link } from 'lucide-react'

const Projects = () => {

  const targetRef = useRef(null);
  return (
    <div ref={targetRef} id="projects" className="lg:h-screen flex flex-col justify-center border-b-[1px] border-gray-300 dark:border-gray-300">
      <div className="lg:my-24 text-2xl font-bold my-8 md:my-12">Featured Projects</div>
      <div className="flex flex-col lg:flex-row justify-between lg:space-x-10 md:flex md:justify-center md:items-center">
        <div className="card-1 w-full lg:w-2/5 md:w-3/5 mb-8 lg:mb-0">
          <img src={AtomicLite} alt="" />
          <h1 className="uppercase font-medium mt-2">Atomic Lite</h1>
          <p className="mt-2">
            A recreation of the Atomic Lite Theme by GiantFocal.
          </p>
          <p className="text-xs text-blue-500 mt-4">HTML - CSS</p>
          <a href="#" className="flex mt-4 hover:text-blue-500"><Link /><p className="ml-2">Live Demo</p></a>

        </div>

        <div className="card-1 lg:w-2/5 md:w-3/5 mb-8 lg:mb-0">
          <img src={TechWorld} alt="" />
          <h1 className="uppercase font-medium mt-2">Tech World</h1>
          <p className="mt-2">
            A UI that shows the tech-world!
          </p>
          <p className="text-xs text-blue-500 mt-4">ReactJS - TailwindCSS</p>
          <a href="#" className="flex mt-4 hover:text-blue-500"><Link /><p className="ml-2">Live Demo</p></a>
        </div>

        <div className="card-1 lg:w-2/5 md:w-3/5 mb-8 lg:mb-0">
          <img src={LobeTour} alt="" />
          <h1 className="uppercase font-medium mt-2">Lobe Tour</h1>
          <p className="mt-2">
            A recreation of Microsoft's Lobe Tour website.
          </p>
          <p className="text-xs text-blue-500 mt-4">HTML - TailwindCSS</p>
          <a href="#" className="flex mt-4 hover:text-blue-500"><Link /><p className="ml-2">Live Demo</p></a>
        </div>
      </div>
    </div>
  )
}

export default Projects