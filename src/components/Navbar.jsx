/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";
import banner from "../assets/Sakib.png";
import Marquee from "react-fast-marquee";
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
    <nav
        className={`shadow-lg w-full h-[35px] top-0 z-20 flex flex-col items-center justify-center bg-gray-900/90`}>
        <div className="w-full h-[30px]  flex flex-wrap items-center   justify-between max-w-7xl text-[#ffffff] ">
          <div className="flex flex-row items-center w-[300px] justify-start me-auto">
          <Marquee>
            Hello, There & Welcome to My Personal Web Page to Recognige as A Full Stack Web Developer. I'm Free for 24/7. You Can Check Me Below If You Want Then You Can Hire me.
          </Marquee>
          </div>
          <div className="flex flex-row items-start justify-start ms-auto">
            <a
              href="https://www.facebook.com/populardiagnostic"
              aria-label="Facebook"
              className="text-white p-1 pl-2">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19">
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/populardiagnostic"
              aria-label="LinkedIn"
              className="text-white p-1 pl-2 ">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="8 2 8 19">
                <path
                  fill-rule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clip-rule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@populardiagnostic"
              aria-label="Visit our Youtube channel"
              className="text-white p-1 pl-2 mr-2 hover:text-gray-900 dark:hover:text-black">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 576 512"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor">
                <path
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    <header className="w-full  sticky top-0 left-0 right-0">
      <nav
        className={`py-4 md:px-12 px-4 bg-primary/90 ${
          isSticky ? "sticky top-0 right-0 left-0 bg-primary " : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-lg cursor-pointer">
          <img src={banner} alt="" className="h-[50px] w-[50px] rounded-full"/>
          
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
