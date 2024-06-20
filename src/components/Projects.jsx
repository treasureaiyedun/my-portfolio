import React, { useRef } from 'react'
import AtomicLite from '../assets/images/Atomic-Lite.png'
import ExpressVPN from '../assets/images/Express-VPN.png'
import LobeTour from '../assets/images/Lobe-tour.png'
import { Link } from 'lucide-react'

const Projects = () => {

  const targetRef = useRef(null);
  return (
    <div ref={targetRef} id="projects" className="h-screen flex flex-col justify-center">
      <div className="my-24 text-2xl font-bold">Featured Projects</div>
      <div className="flex justify-between space-x-10">
        <div className="card-1 lg:w-2/5 md:w-3/5 mx-10 lg:mx-0 mb-8 lg:mb-0">
          <img src={AtomicLite} alt="" />
          <h1 className="uppercase font-medium mt-2">Atomic Lite</h1>
          <p className="mt-2">
            A recreation of the Atomic Lite Theme by GiantFocal.
          </p>
          <p className="text-xs text-blue-500 mt-4">HTML - CSS</p>
          <a href="#" className="flex mt-4 hover:text-blue-500"><Link /><p className="ml-2">Live Demo</p></a>

        </div>

        <div className="card-1 lg:w-2/5 md:w-3/5 mx-10 lg:mx-0 mb-8 lg:mb-0">
          <img src={ExpressVPN} alt="" />
          <h1 className="uppercase font-medium mt-2">ExpressVPN</h1>
          <p className="mt-2">
            A clone of the ExpressVPN website built during my internship at Oasis Infobyte.
          </p>
          <p className="text-xs text-blue-500 mt-4">HTML - CSS</p>
          <a href="#" className="flex mt-4 hover:text-blue-500"><Link /><p className="ml-2">Live Demo</p></a>
        </div>

        <div className="card-1 lg:w-2/5 md:w-3/5 mx-10 lg:mx-0 mb-8 lg:mb-0">
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