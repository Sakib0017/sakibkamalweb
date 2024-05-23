
import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Testimonial from './components/Testimonial'
import Work from './components/Work'
import Training from './components/Training'
import Languages from './components/Languages'
import Project from './components/Project'
function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <Work />
    <Skills/>
    <Training />
    <Languages />
    <Project />
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
