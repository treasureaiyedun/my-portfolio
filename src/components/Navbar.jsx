import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
            <div className="flex justify-between py-5">
            <div className="font-bold text-xl">TA.</div>
            <div className="flex list-none gap-5">
                <li>Projects</li>
                <li>Resume</li>
                <li>Contact</li>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar