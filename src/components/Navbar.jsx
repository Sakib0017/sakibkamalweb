/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    
    <header className="w-full  sticky  top-0 left-0 right-0">
      <nav
        className={`py-4 md:px-12 px-4 bg-primary/90 ${
          isSticky ? "sticky top-0 right-0 left-0 bg-primary  " : ""
        }`}
      >
        <div className="flex items-center max-w-7xl w-full mx-auto justify-between">
          <div className="text-white font-bold text-lg cursor-pointer">
          <p>sakib.dev</p>
          
          </div>
         
            
          
          <div className="lg:flex items-center gap-3 hidden text-body">
            <Link activeClass="active" smooth={true} spy={true} offset={-100} 
              to="home"
              className="block text-white font-bold hover:text-blue-100 py-2 px-4 cursor-pointer"
            >
              Home
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="about" className="block text-white font-bold hover:text-blue-100 py-2 px-4 cursor-pointer">
              About me
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="experience" className="block text-white font-bold hover:text-blue-100 py-2 px-4 cursor-pointer">
              Experience
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="skills" className="block text-white font-bold hover:text-blue-100 py-2 px-4 cursor-pointer">
              Skills
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="training" className="block  text-white font-bold hover:text-blue-100 py-2 px-4 cursor-pointer">
              
             Education & Training
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="languages" className="block  text-white font-bold hover:text-blue-100 py-2 px-4 cursor-pointer">
              
              Languages
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="project" className="block  text-white font-bold hover:text-blue-100 py-2 px-4 cursor-pointer">
              
              Project
            </Link>
            
          </div>

        
          <div className="lg:block hidden">
            <button className="px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-primary hover:text-blue-100 transition-all duration-300">
              Collect Resume
            </button>
          </div>

          
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

      
        {isMenuOpen && (
          <div className="mt-4 bg-body p-4 rounded-lg text-white">
            <Link activeClass="active" smooth={true} spy={true} offset={-100} 
              to="home"
              className="block text-white font-bold hover:text-blue-100 py-2 px-4 cursor-pointer"
            >
              Home
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="about" className="block text-white font-bold hover:text-blue-100 py-2 px-4 cursor-pointer">
              About me
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="experience" className="block text-white font-bold hover:text-blue-100 py-2 px-4 cursor-pointer">
              Experience
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="skills" className="block text-white font-bold hover:text-blue-100 py-2 px-4 cursor-pointer">
              Skills
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="training" className="block  text-white font-bold hover:text-blue-100 py-2 px-4 cursor-pointer">
              
             Education & Training
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="languages" className="block  text-white font-bold hover:text-blue-100 py-2 px-4 cursor-pointer">
              
              Languages
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="project" className="block  text-white font-bold hover:text-blue-100 py-2 px-4 cursor-pointer">
              
              Project
            </Link>
          </div>
        )}
      </nav>
    </header>
    </>
  );
};

export default Navbar;
