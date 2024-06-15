import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
const App = () => {

  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className="w-4/5">
        <Navbar />
        <Hero />
      </div>
    </div>
  )

}

export default App