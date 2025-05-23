import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Projects from './pages/Projects'
import { Contact } from 'lucide-react'
import ContactMe from './components/ContactMe'
import AboutMe from './components/AboutMe'
import Home from './pages/Home'
// import { ThemeProvider } from './components/ThemeController'
// import { ThemeToggle } from './components/ThemeToggle'
// import { useTheme } from './components/ThemeProvider'



const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/about" element={<AboutMe />} /> 
        </Routes>
    </Router>
  )

}

export default App