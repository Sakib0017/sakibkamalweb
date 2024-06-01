import banner from "../assets/Sakib.jpg";
import React from "react";
import '../App.css'
const Home = () => {
  
  return (
  
    <div className=" bg-[#33ddff]/20 fixed w-screen top-0 left-0" id="home">
      <div className="lg:px-12 px-4 relative max-w-7xl mx-auto h-screen flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
      <div className="mx-auto  justify-center items-center ">

      <div className="mx-auto relative  justify-center items-center ">
                    
                    <img  src={banner}  className="mx-auto justify-center items-center   animate-slide-in border-[30px] border  border-primary/50    rounded-full  h-[400] w-[400px] " />
                    
                    
                </div>
         
        </div>
       
        <div className=" w-full z-20 mt-5">
          <p className="text-xl text-headingcolor  font-semibold mb-5">Hey, I am Md. Sakib Kamal</p>
          <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
            I Am <span className="text-primary">A Full Stack</span> Web Developer
          </h1>
          <p className="text-2xl text-body leading-9 mb-8">
            I'm A <span className="text-blue-900/80 font-bold">Computer Science Engineer</span> From <span className=" text-green-700/90 font-bold">Daffodil International University</span>.
          </p>
         
        </div>
       
        
      </div>
    </div>
    
  );
};

export default Home;
