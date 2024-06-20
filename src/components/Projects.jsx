import React, { useRef } from 'react'

const Projects = () => {

    const targetRef = useRef(null);
  return (
    <div ref={targetRef} id="projects">
        <div className="mx-4">Featured Projects</div>
    </div>
  )
}

export default Projects