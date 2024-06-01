
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Testimonial from './components/Testimonial'
import Work from './components/Work'
import Training from './components/Training'
import Languages from './components/Languages'
import Project from './components/Project'
import About from './components/About'
import Index from './components/Index'
function App() {
  

  return (
    <>

     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/experience" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/training" element={<Training />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/project" element={<Project />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </BrowserRouter>
    
   </>
   
  )
}

export default App
