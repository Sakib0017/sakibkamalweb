import banner from "../assets/Sakib.png";
import React from "react";

const Home = () => {
  return (
  
    <div className=" bg-[#33ddff]/20 fixed top-0 right-0 left-0" id="home">
      <div className="lg:px-12 px-4 max-w-7xl mx-auto h-screen flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
      <div className="md:w-1/2 ">

      <div className="relative">
                    
                    <img src={banner} alt="" className="ms-auto relative z-20 border-blur rounded-2xl  h-auto w-[300px]" />
                    
                    
                </div>
         
        </div>
       
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-headingcolor  font-semibold mb-5">Hey, I am Md. Sakib Kamal</p>
          <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
            I Am <span className="text-primary">A Full Stack</span> Web Developer
          </h1>
          <p className="text-2xl text-body leading-9 mb-8">
            I'm A Computer Science Engineer From Daffodil International University.
          </p>
         
        </div>
       
        
      </div>
    </div>
  );
};

export default Home;
