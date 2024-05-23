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
    <header className="w-full fixed top-0 left-0 right-0">
      <nav
        className={`py-4 md:px-12 px-4 bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white " : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-lg cursor-pointer">
           
          </div>
          
          {/* for larger device */}
          <div className="lg:flex items-center gap-3 hidden text-body">
            <Link activeClass="active" smooth={true} spy={true} offset={-100} 
              to="home"
              className="block text-primary hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Home
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="experience" className="block hover:text-gray-400 py-2 px-4 cursor-pointer">
              Experience
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="skills" className="block hover:text-gray-400 py-2 px-4 cursor-pointer">
              Skills
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="training" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
              
             Education & Training
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="languages" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
              
              Languages
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="project" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
              
              Project
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="testimonials" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
              Testimonials
            </Link>
          </div>

          {/* contact me btn */}
          <div className="lg:block hidden">
            <button className="px-4 py-2 bg-transparent border border-primary text-primary rounded hover:bg-primary hover:text-white transition-all duration-300">
              Collect Resume
            </button>
          </div>

          {/* btn for small devices */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-body p-4 rounded-lg text-white">
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="home" className="block hover:text-gray-400 py-2">
              Home
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="skills" className="block hover:text-gray-400 py-2">
              Skills
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="about" className="block hover:text-gray-400 py-2">
              About me
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="portfolio" className="block hover:text-gray-400 py-2">
              Portfolio
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="testimonials" className="block hover:text-gray-400 py-2">
              Testimonials
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
