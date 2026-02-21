import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'


function App() {


  return (
    <div className="bg-black min-h-screen ">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Certifications" element={<Certifications />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </Router>
      
      <About />
      <Services />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  )
}

export default App
