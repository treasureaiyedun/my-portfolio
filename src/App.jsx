import React from 'react'

const App = () => {

  const isActive = true
  if (isActive) {
    return <h1>Active</h1>
  }
  const naija_president = "Bola Tinubu"
  return (
    <>
    <div className="text-3xl font-bold underline">App</div>
    <h1 >
      Hello world!
    </h1>

<h3>{naija_president}</h3>
    </>

  )
}

export default App